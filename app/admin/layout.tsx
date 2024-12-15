import { AdminSidebarProvider } from "@/services/adminSidebar.provider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminSidebarProvider>
      <div className="">{children}</div>
      {/* <Footer /> */}
    </AdminSidebarProvider>
  );
}
