import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SideIcons from "@/components/SideIcons";
import Whyme from "@/components/Whyme";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <SideIcons />
      <Whyme />
      <Contact />
    </>
  );
}
