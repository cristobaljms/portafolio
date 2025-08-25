import Image from "next/image";
import Link from "next/link";
import PhoneIcon from "@/assets/phone.svg";
import MailIcon from "@/assets/mail.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import GithubIcon from "@/assets/github.svg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-start items-start py-20"
    >
      <div className="pl-[15%] border-b-4 border-black w-auto mb-12">
        <h2 className="text-4xl">Contacto</h2>
      </div>
      <div className="container mx-auto mb-14 px-5">
        <ul className="flex flex-col justify-between lg:items-center lg:flex-row gap-4">
          <li className="flex items-center gap-5">
            <Image src={PhoneIcon} alt="phone" width={30} height={30} />
            <Link
              className="text-blue-500"
              target="_blank"
              href="https://wa.me/+584249698437"
            >
              +584249698437
            </Link>
          </li>
          <li className="flex items-center gap-5">
            <Image src={MailIcon} alt="phone" width={30} height={30} />
            <Link
              className="text-blue-500"
              target="_blank"
              href="mailto:cmunoz21x@gmail.com"
            >
              cmunoz21x@gmail.com
            </Link>
          </li>
          <li className="flex items-center gap-5">
            <Image src={LinkedinIcon} alt="phone" width={30} height={30} />
            <Link
              className="text-blue-500"
              target="_blank"
              href="https://www.linkedin.com/in/cristobaljms/"
            >
              cristobaljms
            </Link>
          </li>
          <li className="flex items-center gap-5">
            <Image src={GithubIcon} alt="phone" width={30} height={30} />
            <Link
              className="text-blue-500"
              target="_blank"
              href="https://www.github.com/cristobaljms/"
            >
              cristobaljms
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
