import Image from "next/image";
import ProfilePhoto from "@/assets/profile.png";
import "./styles.css";

export default function Profile() {
  return (
    <section className="root container mx-auto px-5">
      <div className="flex items-center mb-12 lg:mb-0">
        <Image
          src={ProfilePhoto}
          alt="profile"
          className="w-full min-w-[300] max-w-[500]"
        />
      </div>
      <div className="text-content">
        <h1 className="text-4xl mb-3">
          ¡Hola! Soy Cristóbal Muñoz. Bienvenido a mi portafolio.
        </h1>
        <h2 className="font-semibold text-2xl mb-3">Fullstack Developer</h2>
        <p className="text-xl">
          Soy un programador web con más de 7 años de experiencia. A lo largo de
          mi carrera, he tenido la oportunidad de trabajar con múltiples
          herramientas, como React.js, Next.js, Redux, React Native,
          Node.js, Nest.js, MongoDB, PostgreSQL y MySQL.
        </p>
      </div>
    </section>
  );
}
