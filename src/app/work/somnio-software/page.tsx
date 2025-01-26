import Navbar2 from "@/components/layout/navbar2";
import Image from "next/image";
import Image1 from "@/assets/projects/somnio-software/1.webp";

export default function Page() {
  return (
    <main className="container mx-auto px-5">
      <Navbar2 />
      <ul className="mb-4">
        <li>
          Formé parte de un equipo multidisciplinario, desempeñando el rol de
          desarrollador Frontend, para crear la página principal de Somnio
          Software. Esta empresa se especializa en el desarrollo de aplicaciones
          móviles utilizando Flutter, y contribuí a garantizar un diseño web
          moderno, funcional y alineado con su identidad corporativa.
        </li>
        <li>
          <b>Tecnologías:</b> Next.js, Tailwindcss, Lottie, Sass
        </li>
      </ul>
      <div>
        <Image src={Image1} alt="" />
      </div>
    </main>
  );
}
