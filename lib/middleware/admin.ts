import { NextRequest, NextResponse } from "next/server";

export default async function AdminMiddleware(req: NextRequest) {
  // get cookies from the request
  let cookie = req.cookies.get("_session_D_A")?.value;

  if (
    (req.nextUrl.pathname === "/admin" ||
      req.nextUrl.pathname === "/pa/admin") &&
    !cookie
  ) {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname === "/pa/admin" && cookie) {
    return NextResponse.redirect(new URL("/admin", req.nextUrl.basePath));
  }
}
