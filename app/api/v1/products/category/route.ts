import { paramRegex, validateParam } from "@/utils/valid-param";
import { NextRequest, NextResponse } from "next/server";
import db from "@/db/index";
import { verifyAuthSession } from "@/utils/verify";
import { categories, products } from "@/db/schema";
import { eq, or } from "drizzle-orm";

//  get products by category route
export async function GET(req: NextRequest) {
  // public route

  const searchParams = req.nextUrl.searchParams;
  const paramCategory = searchParams.get("category");
  const paramLimit = Number(searchParams.get("limit")) ?? 14;
  // const paramSort = searchParams.get("sort") ?? "asc";

  if (!paramCategory) {
    return new Response("Category not found", { status: 404 });
  }
  if (!validateParam(paramCategory, paramRegex)) {
    return new Response("Invalid paramCategory", { status: 400 });
  }
  try {
    const findProducts = await db
      .select({
        product: products,
      })
      .from(products)
      .leftJoin(categories, eq(products.category_id, categories.id))
      .where(eq(categories.name, paramCategory))
      .limit(paramLimit);

    if (findProducts.length < 0) {
      return new Response("No products found with the Category", {
        status: 404,
      });
    }

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return new Response("Internal server error", { status: 500 });
  }
}

// create category new categorys
export async function POST(req: Request) {
  // admin route
  const { name } = await req.json();
  if (!name) {
    return new Response("Category name is required", { status: 400 });
  }

  try {
    // vefify user is admin
    const userId = await verifyAuthSession();
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    // get admin user from db
    const adminUser = await db.query.admins.findFirst({
      where(f, o) {
        return o.eq(f.id, Number(userId));
      },
    });
    if (!adminUser) {
      return new Response("Unauthorized", { status: 401 });
    }

    //check admin user has permission to create a category
    const { accessPermission, id } = adminUser;
    if (!accessPermission.includes("create:category")) {
      return new Response("Unauthorized to create category", { status: 401 });
    }
    // cheack if category name is provided

    // check if category already exists
    const categoryExists = await db.query.categories.findFirst({
      where(f, o) {
        return o.eq(f.name, name);
      },
    });
    if (categoryExists) {
      return new Response("Category already exists", { status: 400 });
    }
    // create category
    const newCategory = await db
      .insert(categories)
      .values({ name, adminId: id })
      .execute();

    return new Response(JSON.stringify(newCategory), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Internal server error", { status: 500 });
  }
}

// update category
export async function PUT(req: Request) {
  // admin route
  const { name } = await req.json();
  if (!name) {
    return new Response("Category name is required", { status: 400 });
  }
  try {
    const userId = await verifyAuthSession();
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    // get admin user from db
    const adminUser = await db.query.admins.findFirst({
      where(f, o) {
        return o.eq(f.id, Number(userId));
      },
    });
    if (!adminUser) {
      return new Response("Unauthorized", { status: 401 });
    }

    //check admin user has permission to create a category
    const { accessPermission } = adminUser;
    if (!accessPermission.includes("update:category")) {
      return new Response("Unauthorized to update category", { status: 401 });
    }
    // check if category exists
    const categoryExists = await db.query.categories.findFirst({
      where(f, o) {
        return o.eq(f.name, name);
      },
    });
    if (!categoryExists) {
      return new Response("Category does not exist", { status: 404 });
    }
    // update category
    const updatedCategory = await db
      .update(categories)
      .set({ name })
      .where(eq(categories.id, categoryExists.id))
      .execute();

    //
    return new Response(JSON.stringify(updatedCategory), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Internal server error", { status: 500 });
  }
}

// delete category
export async function DELETE(req: Request) {
  // admin route
  const { id, name } = await req.json();
  if (!id || !name) {
    return new Response("Category id or name is required", { status: 400 });
  }
  try {
    const userId = await verifyAuthSession();
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    // get admin user from db
    const adminUser = await db.query.admins.findFirst({
      where(f, o) {
        return o.eq(f.id, Number(userId));
      },
    });
    if (!adminUser) {
      return new Response("Unauthorized", { status: 401 });
    }

    //check admin user has permission to delet a category
    const { accessPermission } = adminUser;
    if (!accessPermission.includes("delete:category")) {
      return new Response("Unauthorized to update category", { status: 401 });
    }
    await db
      .delete(categories)
      .where(or(eq(categories.id, Number(id)), eq(categories.name, name)))
      .execute();

    return new Response("Category deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal server error", { status: 500 });
  }
}
