import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SideIcons from "@/components/SideIcons";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <SideIcons />
    </>
  );
}
