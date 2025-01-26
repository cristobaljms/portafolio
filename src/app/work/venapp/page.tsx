import Navbar2 from "@/components/layout/navbar2";
import Image from "next/image";
import Poster from "@/assets/projects/venapp/poster.webp";
import Image1 from "@/assets/projects/venapp/1.webp";
import Image2 from "@/assets/projects/venapp/2.webp";
import Image3 from "@/assets/projects/venapp/3.webp";
import Image4 from "@/assets/projects/venapp/4.webp";
import Image5 from "@/assets/projects/venapp/5.webp";
import Image6 from "@/assets/projects/venapp/6.webp";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container mx-auto px-5">
      <Navbar2 />
      <ul className="mb-4">
        <li>Descripción: Landing page para la aplicación de VenApp</li>
        <li>
          Url:{" "}
          <Link href="https://venapp-landing.vercel.app/" target="_blank">
            https://venapp-landing.vercel.app/
          </Link>
        </li>
        <li>Tecnologías: Next.js, Tailwindcss, GSAP</li>
      </ul>
      <div>
        <Image src={Poster} alt="" />
        <Image src={Image1} alt="" />
        <Image src={Image2} alt="" />
        <Image src={Image3} alt="" />
        <Image src={Image4} alt="" />
        <Image src={Image5} alt="" />
        <Image src={Image6} alt="" />
      </div>
    </main>
  );
}
