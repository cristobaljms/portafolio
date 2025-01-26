import Image from "next/image";
import TypescriptLogo from "@/assets/tech/typescript.png";
import ReactLogo from "@/assets/tech/react.svg";
import NextLogo from "@/assets/tech/nextjs.png";
import ReactNativeLogo from "@/assets/tech/react-native.png";
import ReduxLogo from "@/assets/tech/redux.svg";
import TailwindcssLogo from "@/assets/tech/tailwindcss.svg";
import MaterialUILogo from "@/assets/tech/material-ui.svg";
import CSSLogo from "@/assets/tech/css.webp";
import NodejsLogo from "@/assets/tech/node-js.svg";
import NestjsLogo from "@/assets/tech/nestjs.svg";
import PostgreSQLLogo from "@/assets/tech/postgresql.svg";
import MySQLLogo from "@/assets/tech/mysql.svg";

export default function Skills() {
  return (
    <section className="flex flex-col justify-start items-start py-12">
      <div className="pl-[15%] border-b-4 border-black w-auto mb-12">
        <h2 className="text-4xl">Habilidades</h2>
      </div>
      <div className="container mx-auto max-w-[600] px-5">
        <ul className="flex gap-12 justify-center flex-wrap">
          <li className="flex flex-col items-center justify-center">
            <Image src={TypescriptLogo} alt="typescript" width={50} height={50} />
            <h3 className="mt-1">Typescript</h3>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={ReactLogo} alt="typescript" width={50} height={50} />
            <h3 className="mt-1">React.js</h3>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={NextLogo} alt="typescript" width={50} height={50} />
            <h3 className="mt-1">Next.js</h3>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={ReactNativeLogo} alt="typescript" width={50} height={50} />
            <h3 className="mt-1">React Native</h3>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={ReduxLogo} alt="typescript" width={50} height={50} />
            <h3 className="mt-1">Redux</h3>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={TailwindcssLogo} alt="typescript" width={50} height={50} />
            <h3 className="mt-1">Tailwindcss</h3>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={MaterialUILogo} alt="typescript" width={50} height={50} />
            <h3 className="mt-1">Material UI</h3>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={CSSLogo} alt="typescript" width={50} height={50} />
            <h3 className="mt-1">CSS</h3>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={NodejsLogo} alt="typescript" width={50} height={50} />
            <h3 className="mt-1">Node.js</h3>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={NestjsLogo} alt="typescript" width={50} height={50} />
            <h3 className="mt-1">Nest.js</h3>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={PostgreSQLLogo} alt="typescript" width={50} height={50} />
            <h3 className="mt-1">PostgreSQL</h3>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={MySQLLogo} alt="typescript" width={50} height={50} />
            <h3 className="mt-1">MySQL</h3>
          </li>
        </ul>
      </div>
    </section>
  );
}
