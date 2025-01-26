import Navbar from "@/components/layout/navbar";
import Academy from "@/components/sections/academy/academy";
import Contact from "@/components/sections/contact/contact";
import Experience from "@/components/sections/experience/experience";
import Profile from "@/components/sections/profile/profile";
import Skills from "@/components/sections/skills/skills";
import Work from "@/components/sections/work/work";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Profile />
      <Skills />
      <Experience />
      <Work />
      <Academy />
      <Contact />
    </main>
  );
}
