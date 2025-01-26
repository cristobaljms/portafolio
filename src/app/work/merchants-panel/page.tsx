import Navbar2 from "@/components/layout/navbar2";
import Image from "next/image";
import Poster from "@/assets/projects/merchants-panel/poster.webp";
import Image1 from "@/assets/projects/merchants-panel/1.webp";
import Image2 from "@/assets/projects/merchants-panel/2.webp";
import Image3 from "@/assets/projects/merchants-panel/3.webp";
import Image4 from "@/assets/projects/merchants-panel/4.webp";
import Image5 from "@/assets/projects/merchants-panel/5.webp";
import Image6 from "@/assets/projects/merchants-panel/6.webp";

export default function Page() {
  return (
    <main className="container mx-auto">
      <Navbar2 />
      <ul className="mb-4">
        <li>
          <p>
            Colaboré con un equipo multidisciplinario en el desarrollo de un
            panel de gestión para merchants, diseñado para ofrecer múltiples
            servicios, como depósitos, retiros, transferencias, pagos a
            empleados, generación de links de pago, entre otros.
          </p>
          <p>
            Desempeñé el rol de desarrollador Frontend, asumiendo la
            responsabilidad del desarrollo de diversos módulos dentro de la
            plataforma. Además, participé activamente en la renovación del
            diseño y la optimización de la interfaz, mejorando tanto la
            experiencia del usuario como el rendimiento general del sistema.
          </p>
        </li>
        <li>
          <b>Tecnologías:</b> React.js, Redux, MaterialUI
        </li>
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
