import "server-only";
import { currentUser, auth } from "@clerk/nextjs/server";
export async function verifyAuthSession() {
  const { userId } = await auth();
  return userId;
}

export async function getAdminUser() {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  const { publicMetadata } = user;
  if (!publicMetadata?.role) {
    return null;
  }
  if (publicMetadata.role !== "admin") {
    return null;
  }
  return user;
}

export async function getCustomer() {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  const { publicMetadata } = user;
  if (!publicMetadata?.role) {
    return null;
  }
  if (publicMetadata.role !== "customer") {
    return null;
  }
  return user;
}
