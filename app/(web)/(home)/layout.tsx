import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import TopBanner from "@/components/global/top-banner";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <TopBanner /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
