"use client"
import { useRouter } from "next/navigation";

export default function Navbar2() {
  const navigation = useRouter();

  return (
    <nav className="w-full">
      <ul className="container mx-auto flex justify-center items-center gap-6 py-5 px-5">
        <li
          className="font-medium text-lg lg:text-xl p-1 hover:cursor-pointer"
          onClick={() => navigation.back()}
        >
          Volver
        </li>
      </ul>
    </nav>
  );
}
