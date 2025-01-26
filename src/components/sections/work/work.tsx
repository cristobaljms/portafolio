import Image, { StaticImageData } from "next/image";
import DifferenziamoPoster from "@/assets/projects/diffenrenziamo/poster.webp";
import SomnioSoftwarePoster from "@/assets/projects/somnio-software/poster.webp";
import RedesHidraulicasPoster from "@/assets/projects/redes-hidraulicas/poster.webp";
import ResellersPanelPoster from "@/assets/projects/resellers-panel/poster.webp";
import VenappPoster from "@/assets/projects/venapp/poster.webp";
import Telemedicina24Poster from "@/assets/projects/telemedicina/poster.webp";
import Link from "next/link";

type Work = {
  title: string;
  img: StaticImageData;
  link: string;
};
export default function Work() {
  const works: Work[] = [
    {
      title: "Differenziamo col coure",
      img: DifferenziamoPoster,
      link: "/work/differenziamocolcoure",
    },
    {
      title: "Somnio Software Landing page",
      img: SomnioSoftwarePoster,
      link: "/work/somniosoftware",
    },
    {
      title: "Redes Hidraulicas",
      img: RedesHidraulicasPoster,
      link: "/work/redes-hidraulicas",
    },
    {
      title: "Panel de resellers",
      img: ResellersPanelPoster,
      link: "/work/resellers",
    },
    {
      title: "Venapp Landing page",
      img: VenappPoster,
      link: "/work/venapp",
    },
    {
      title: "Telemedicina24 Landing page",
      img: Telemedicina24Poster,
      link: "/work/telemedicina24",
    },
  ];

  return (
    <section
      id="work"
      className="flex flex-col justify-start items-start py-12"
    >
      <div className="pl-[15%] border-b-4 border-black w-auto mb-12">
        <h2 className="text-4xl">Trabajo</h2>
      </div>
      <div className="container mx-auto px-5">
        <div className="grid-container">
          {works.map((item, index) => (
            <div key={index} className="grid-item">
              <Link href={item.link}>
                <figure>
                  <Image src={item.img} alt="poster" width={350} height={300} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
