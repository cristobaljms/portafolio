import Navbar2 from "@/components/layout/navbar2";
import Image from "next/image";
import Poster from "@/assets/projects/redes-hidraulicas/poster.webp";
import Image1 from "@/assets/projects/redes-hidraulicas/1.webp";
import Image2 from "@/assets/projects/redes-hidraulicas/2.webp";
import Image3 from "@/assets/projects/redes-hidraulicas/3.webp";
import Image4 from "@/assets/projects/redes-hidraulicas/4.webp";
import Image5 from "@/assets/projects/redes-hidraulicas/5.webp";
import Image6 from "@/assets/projects/redes-hidraulicas/6.webp";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container mx-auto">
      <Navbar2 />
      <ul className="mb-4">
        <li>
          Descripción: Desarrollo de un proyecto enfocado en el cálculo de
          métricas para redes hidráulicas, empleando el algoritmo genético y el
          método del gradiente para optimizar el análisis y la resolución de
          problemas complejos en sistemas de distribución de fluidos.
        </li>
        <li>
          Url:
          <Link
            href="https://github.com/cristobaljms/Red-Hidraulica"
            target="_blank"
          >
            https://github.com/cristobaljms/Red-Hidraulica
          </Link>
        </li>
        <li>Tecnologías: Django, Python, Numpy, Celery, Bootstrapp, JQuery</li>
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
