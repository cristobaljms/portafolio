import Navbar2 from "@/components/layout/navbar2";
import Image from "next/image";
import Poster from "@/assets/projects/koyag/poster.webp";
import Image1 from "@/assets/projects/koyag/1.webp";
import Image2 from "@/assets/projects/koyag/2.webp";
import Image3 from "@/assets/projects/koyag/3.webp";
import Image4 from "@/assets/projects/koyag/4.webp";

export default function Page() {
  return (
    <main className="container mx-auto">
      <Navbar2 />
      <ul className="mb-4">
        <li>
          <p>
          Como desarrollador Full Stack, participé en el desarrollo de
            diversos módulos para la plataforma digital Koyag, un CRM diseñado
            en Angular 9 y Laravel 6. Esta herramienta facilita y automatiza la
            planificación de actividades de networking y convenciones de
            negocios, ofreciendo soluciones eficientes y personalizadas para los
            usuarios.
          </p>
        </li>
        <li>
          <b>Tecnologías:</b> Angular 9, Laravel, MaterialUI.
        </li>
      </ul>
      <div>
        <Image src={Poster} alt="" />
        <Image src={Image1} alt="" />
        <Image src={Image2} alt="" />
        <Image src={Image3} alt="" />
        <Image src={Image4} alt="" />
      </div>
    </main>
  );
}
