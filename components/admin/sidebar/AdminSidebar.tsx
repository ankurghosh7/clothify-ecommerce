"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChevronRight,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  LayoutGrid,
  ShoppingBag,
  ChartPie,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { usePathname } from "next/navigation";
const data = {
  users: [
    {
      name: "All Users",
      url: "/admin/users",
    },
    {
      name: "Add New",
      url: "/admin/users/add",
    },
  ],

  products: [
    {
      name: "All Products",
      url: "/admin/products",
    },
    {
      name: "Popular",
      url: "/admin/products/popular",
    },
    {
      name: "Add New",
      url: "/admin/products/add",
    },
  ],
  orders: [
    {
      name: "All Orders",
      url: "/admin/orders",
    },
    {
      name: "Pending",
      url: "/admin/orders/pending",
    },
    {
      name: "Completed",
      url: "/admin/orders/completed",
    },
  ],
};
const AdminSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>Admin</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem key={"dashboard"}>
              <SidebarMenuButton
                asChild
                tooltip={"Dashboard"}
                isActive={pathname === "/admin"}
              >
                <Link href={"/admin"}>
                  <LayoutGrid className="size-5" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <Collapsible key={"products"} asChild className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={"Products"}
                    isActive={pathname.startsWith("/admin/products")}
                  >
                    <ShoppingBag />
                    <span>Products</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {data.products?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.name}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.name}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <Collapsible key={"orders"}>
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={"Settings"}
                    isActive={pathname.startsWith("/admin/orders")}
                  >
                    <Settings2 />
                    <span>Orders</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {data.orders?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.name}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.name}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <SidebarMenuItem key={"analytics"}>
              <SidebarMenuButton
                asChild
                tooltip={"Analytics"}
                isActive={pathname === "/admin/analytics"}
              >
                <Link href={"/admin/analytics"}>
                  <ChartPie className="size-5" />
                  <span>Analytics</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <Collapsible key={"users"}>
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={"Users"}
                    isActive={pathname.startsWith("/admin/users")}
                  >
                    <Settings2 />
                    <span>Users</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {data.users?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.name}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.name}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarTrigger className="absolute top-0 -right-5 [&>svg]:size-5" />
    </Sidebar>
  );
};

export default AdminSidebar;

// const AnimatedLink = ({
//   href,
//   children,
// }: {
//   children: React.ReactNode[];
//   href: string;
// }) => {
//   return (
//     <Link href={href} className="group flex items-center space-x-2">
//       {/* Animated Icon */}
//       <motion.div
//         className="icon"
//         variants={{
//           hover: { scale: 1.2, rotate: 15 },
//         }}
//         initial="rest"
//         whileHover="hover"
//         transition={{ type: "spring", stiffness: 300 }}
//       >
//         {children[0]} {/* Assuming the first child is the SVG Icon */}
//       </motion.div>

//       {/* Span Text */}
//       <span className="text-sm font-medium group-hover:text-blue-600 transition-colors">
//         {children[1]} {/* Assuming the second child is the Span */}
//       </span>
//     </Link>
//   );
// };
