import Navbar2 from "@/components/layout/navbar2";
import Image from "next/image";
import Poster from "@/assets/projects/diffenrenziamo/poster.webp";
import Image1 from "@/assets/projects/diffenrenziamo/1.webp";


export default function Page() {
  return (
    <main className="container mx-auto px-5">
      <Navbar2 />
      <ul className="mb-4">
        <li>Descripción: Aplicación web diseñada para la creación de concursos y la recaudación de fondos destinados a organizaciones benéficas, proporcionando una plataforma intuitiva y eficiente para apoyar causas sociales.</li>
        <li>Tecnologías: React.js, CSS, SemanticUI</li>
      </ul>
      <div>
        <Image src={Poster} alt="" />
        <Image src={Image1} alt="" />
      </div>
    </main>
  );
}
