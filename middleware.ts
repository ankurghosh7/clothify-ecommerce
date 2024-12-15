import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import AdminMiddleware from "./lib/middleware/admin";
const isProtectedRoute = createRouteMatcher([
  "/orders(.*)",
  "/payment(.*)",
  "/reviews",
]);
export default clerkMiddleware(async (auth, req) => {
  //
  await AdminMiddleware(req);
  const { userId, redirectToSignIn, has } = await auth();

  if (userId)
    if (!userId && isProtectedRoute(req)) {
      // Add custom logic to run before redirecting

      return redirectToSignIn();
    }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
