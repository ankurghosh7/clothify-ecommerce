import db from "@/db";
import customers from "@/db/schema/customers";
import { verifyAuthSession } from "@/utils/verify";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  // user route
  try {
    const userId = await verifyAuthSession();
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    // find user by id
    const customerCart = await db
      .select({
        cart: customers.cart,
      })
      .from(customers)
      .where(eq(customers.id, Number(userId)));
    if (!customerCart) {
      return new Response("Cart not found", { status: 404 });
    }
    return NextResponse.json(
      {
        data: customerCart,
        message: "User cart items fetched successfully",
      },
      { status: 200 }
    );
    // return user cart items
  } catch (error: any) {
    console.error("An error occurred while fetching user cart items", error);
    return NextResponse.json(
      {
        error: "An error occurred while fetching user cart items",
        message: error?.message ?? "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  // user route
  const { productId, quantity } = await req.json();
  if (!productId || !quantity) {
    return new Response("Invalid request", { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  // user route
}

export async function DELETE(req: NextRequest) {
  // user route
}
