import Navbar2 from "@/components/layout/navbar2";
import Image from "next/image";
import Poster from "@/assets/projects/telemedicina/poster.webp";
import Image1 from "@/assets/projects/telemedicina/1.webp";
import Image2 from "@/assets/projects/telemedicina/2.webp";
import Image3 from "@/assets/projects/telemedicina/3.webp";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container mx-auto px-5">
      <Navbar2 />
      <ul className="mb-4">
        <li>Landing page para la aplicación de Telemedicina24</li>
        <li>
          <b>Url:</b>
          <Link
            className="text-blue-500"
            href="https://telemedicina-puce.vercel.app/"
            target="_blank"
          >
            https://telemedicina-puce.vercel.app/
          </Link>
        </li>
        <li>
          <b>Tecnologías:</b> Next.js, Tailwindcss
        </li>
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
