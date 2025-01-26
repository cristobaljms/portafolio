import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full">
      <ul className="container mx-auto flex justify-center items-center gap-6 py-5 px-5">
        <li className="font-medium text-lg lg:text-xl p-1">
          <Link href="#experience">Experiencia</Link>
        </li>
        <li className="font-medium text-lg lg:text-xl p-1">
          <Link href="#work">Trabajo</Link>
        </li>
        <li className="font-medium text-lg lg:text-xl p-1">
          <Link href="#contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
