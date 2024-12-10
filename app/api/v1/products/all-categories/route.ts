// import { NextRequest, NextResponse } from "next/server";
// import db from "@/db/index";
// import { categories } from "@/db/schema";

// export async function GET(req: NextRequest) {
//   // public route

//   //   const searchParams = req.nextUrl.searchParams;
//   //   const paramLimit = Number(searchParams.get("limit")) ?? 14;

//   try {
//     const findCategories = await db
//       .select({
//         id: categories.id,
//         name: categories.name,
//       })
//       .from(categories);

//     if (findCategories.length < 0) {
//       return new Response("No Categorie found", {
//         status: 404,
//       });
//     }

//     return NextResponse.json(findCategories);
//   } catch (error) {
//     console.log(error);
//     return new Response("Internal server error", { status: 500 });
//   }
// }
