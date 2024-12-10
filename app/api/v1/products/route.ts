// import db from "@/db";
// import { verifyAuthSession } from "@/utils/verify";
// import { NextRequest } from "next/server";

// // export async function GET(req: NextRequest, res: Response) {
// //   // public route
// //   const searchParams = req.nextUrl.searchParams;
// //   const paramCategory = searchParams.get("category");
// //   const paramLimit = Number(searchParams.get("limit")) ?? 14;
// // }

// export async function POST(req: NextRequest, res: Response) {
//   // admin route
//   const body = await req.json();
//   const { name } = body;
//   try {
//     const userId = await verifyAuthSession();
//     if (!userId) {
//       return new Response("Unauthorized", { status: 401 });
//     }
//     // get admin user from db
//     const adminUser = await db.query.admins.findFirst({
//       where(f, o) {
//         return o.eq(f.id, Number(userId));
//       },
//     });
//     if (!adminUser) {
//       return new Response("Unauthorized", { status: 401 });
//     }

//     //check admin user has permission to create a category
//     const { accessPermission } = adminUser;
//     if (!accessPermission.includes("create:product")) {
//       return new Response("Unauthorized to create category", { status: 401 });
//     }
//   } catch (error) {
//     return new Response("Unauthorized", { status: 401 });
//   }
// }

// export async function PUT(req: Request, res: Response) {
//   // admin route
//   const userId = await verifyAuthSession();
//   if (!userId) {
//     return new Response("Unauthorized", { status: 401 });
//   }
// }

// export async function DELETE(req: Request, res: Response) {
//   // admin route
//   const userId = await verifyAdmin();
//   if (!userId) {
//     return new Response("Unauthorized", { status: 401 });
//   }
// }
