import AdminFooter from "@/components/admin/footer";
import AdminSidebar from "@/components/admin/sidebar/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <div className="flex-1  bg-zinc-900 text-white px-5">
        <main className="min-h-screen ">{children}</main>
        <AdminFooter />
      </div>
    </SidebarProvider>
  );
}
