import Link from "next/link";

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col justify-start items-end py-12"
    >
      <div className="pr-[15%] border-b-4 border-black w-auto mb-12">
        <h2 className="text-4xl">Experiencia</h2>
      </div>
      <div className="container mx-auto px-5">
        <article className="mb-8">
          <h3 className="font-semibold text-xl mb-1">
            Iugo | Septiembre 2021 - actualidad
          </h3>
          <h4 className="font-semibold mb-1">FrontEnd Developer</h4>
          <p className="mb-2">
            Desarrollo y mantenimiento de módulos y funcionalidades para los
            sistemas internos de AstroPay, incluyendo el panel de merchants y el
            panel de resellers. Utilicé tecnologías como React.js, TypeScript,
            Material-UI y Styled-Components para crear interfaces intuitivas y
            optimizadas. Además, colaboré en diversos proyectos para la empresa
            Iugo, contribuyendo al desarrollo de soluciones innovadoras y
            eficientes.
          </p>
          <ul className="list-disc pl-8">
            <li>
              <Link className="text-blue-500" href="/work/resellers-panel">
                Panel de resellers
              </Link>
            </li>
            <li>
              <Link className="text-blue-500" href="/work/merchants-panel">
                Panel de merchants
              </Link>
            </li>
          </ul>
        </article>
        <article className="mb-8">
          <h3 className="font-semibold text-xl mb-1">
            Somnio Software | Enero 2021 - Julio 2022
          </h3>
          <h4 className="font-semibold mb-1">FrontEnd Developer</h4>
          <p className="mb-2">
            Colaboré en un equipo multidisciplinario desempeñando el rol de
            desarrollador Frontend para crear y optimizar el sitio web Somnio
            Software. Utilicé tecnologías como React.js, Next.js, Sass y
            Tailwind CSS para garantizar un diseño atractivo, funcional y
            responsivo.
          </p>
          <ul className="list-disc pl-8">
            <li>
              <Link className="text-blue-500" href="/work/somnio-software">
                Somnio Software landing page
              </Link>
            </li>
          </ul>
        </article>
        <article className="mb-8">
          <h3 className="font-semibold text-xl mb-1">
            SmartDream s.l | Mayo 2020 - Diciembre 2020
          </h3>
          <h4 className="font-semibold mb-1">FrontEnd Developer</h4>
          <p>
            Diseño y desarrollo de landing pages, dashboards administrativos y
            aplicaciones web, empleando tecnologías como Angular 9 y 10, Sass,
            CSS3 con Flexbox y Grid CSS, así como Firebase para la integración
            de backend y servicios en la nube.
          </p>
        </article>
        <article className="mb-8">
          <h3 className="font-semibold text-xl mb-1">
            Koyag | Diciembre 2019 - Septiembre 2020
          </h3>
          <h4 className="font-semibold mb-1">FullStack Developer</h4>
          <p className="mb-2">
            Como desarrollador Full Stack, participé en el desarrollo de
            diversos módulos para la plataforma digital Koyag, un CRM diseñado
            en Angular 9 y Laravel 6. Esta herramienta facilita y automatiza la
            planificación de actividades de networking y convenciones de
            negocios, ofreciendo soluciones eficientes y personalizadas para los
            usuarios.
          </p>
          <ul className="list-disc pl-8">
            <li>
              <Link className="text-blue-500" href="/work/koyag">
                Koyag
              </Link>
            </li>
          </ul>
        </article>
        <article>
          <h3 className="font-semibold text-xl mb-1">
            Freelance | 2017 - 2022
          </h3>
          <h4 className="font-semibold mb-1">Freelance Developer</h4>
          <p className="mb-2">
            Como freelance he trabajado en diversos proyectos, entre ellos
            están:
          </p>
          <ul className="list-disc pl-8">
            <li>
              <p>
                2017 - Desarrollo de features en{" "}
                <Link
                  className="text-blue-500"
                  href="/work/differenziamocolcoure"
                >
                  Differenziamo Col Coure
                </Link>{" "}
                (React.js, SemanticUI)
              </p>
            </li>
            <li>
              <p>
                2017 - Desarrollo de features en{" "}
                <Link
                  className="text-blue-500"
                  href="https://www.fised4good.com/"
                  target="_blank"
                >
                  https://www.fised4good.com/
                </Link>{" "}
                (React.js, Bootstrap)
              </p>
            </li>
            <li>
              <p>
                2017 - Desarrollo{" "}
                <Link className="text-blue-500" href="/work/redes-hidraulicas">
                  Sistema de administración y calculo de redes hidráulicas
                </Link>{" "}
                (Django)
              </p>
            </li>
            <li>
              <p>
                2021 - Desarrollo de{" "}
                <Link className="text-blue-500" href="/work/venapp">
                  VenApp landing page
                </Link>{" "}
                (React.js, Next.js).
              </p>
            </li>
            <li>
              <p>
                2022 - Desarrollo de{" "}
                <Link className="text-blue-500" href="/work/telemedicina24">
                  Telemedicina24 landing page
                </Link>{" "}
                (React.js, Next.js, Tailwind).
              </p>
            </li>
            <li>
              <p>
                2022 - Como desarrollador Backend, fui el encargado del
                desarrollo de la API de una app llamada Pleksus usando (Nest.js,
                MongoDB)
              </p>
              <Link
                className="text-blue-500"
                href="https://github.com/cristobaljms/Pleksus-Api/"
                target="_blank"
              >
                Repositorio en GitHub
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
