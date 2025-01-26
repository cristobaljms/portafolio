import Navbar2 from "@/components/layout/navbar2";
import Image from "next/image";
import Poster from "@/assets/projects/telemedicina/poster.webp";
import Image1 from "@/assets/projects/telemedicina/1.webp";
import Image2 from "@/assets/projects/telemedicina/2.webp";
import Image3 from "@/assets/projects/telemedicina/3.webp";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container mx-auto">
      <Navbar2 />
      <ul className="mb-4">
        <li>Descripción: Landing page para la aplicación de Telemedicina24</li>
        <li>
          Url:
          <Link href="https://telemedicina-puce.vercel.app/" target="_blank">
            https://telemedicina-puce.vercel.app/
          </Link>
        </li>
        <li>Tecnologías: Next.js, Tailwindcss</li>
      </ul>
      <div>
        <Image src={Poster} alt="" />
        <Image src={Image1} alt="" />
        <Image src={Image2} alt="" />
        <Image src={Image3} alt="" />
      </div>
    </main>
  );
}
