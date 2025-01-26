import Navbar2 from "@/components/layout/navbar2";
import Image from "next/image";
import Poster from "@/assets/projects/resellers-panel/poster.webp";
import Image1 from "@/assets/projects/resellers-panel/1.webp";
import Image2 from "@/assets/projects/resellers-panel/2.webp";
import Image3 from "@/assets/projects/resellers-panel/3.webp";
import Image4 from "@/assets/projects/resellers-panel/4.webp";
import Image5 from "@/assets/projects/resellers-panel/5.webp";
import Image6 from "@/assets/projects/resellers-panel/6.webp";
import Image7 from "@/assets/projects/resellers-panel/7.webp";

export default function Page() {
  return (
    <main className="container mx-auto">
      <Navbar2 />
      <ul className="mb-4">
        <li>
          <p>
            Colaboré con un equipo multidisciplinario en el desarrollo de un
            panel de gestión para resellers, diseñado para simplificar la compra
            de la moneda de la plataforma y su posterior reventa en diversos países.
            Este panel incorpora funcionalidades clave para optimizar las
            operaciones y garantizar una experiencia eficiente, adaptada a las
            necesidades de los usuarios.
          </p>
          <p>
            Desempeñé el rol de desarrollador Frontend y fui responsable del
            desarrollo de diversos módulos dentro de la plataforma, incluyendo
            el módulo de transferencias de dinero, el módulo de contactos, el
            módulo de notificaciones y el módulo de tellers, entre otros.
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
        <Image src={Image7} alt="" />
      </div>
    </main>
  );
}
