import React from "react";
import Link from "next/link";
import Image from "next/image";

// components
import SectionHeading from "@/components/SectionHeading";
import PortfolioItem from "@/components/PortfolioItem";
import ScrollToTop from "@/components/ScrollToTop";
import { ArrowRight } from "lucide-react";
import { projects, skills } from "@/constants";
import Contact from "@/components/Contact";

const page = () => {
  const shuffledProjects = projects.sort(() => 0.5 - Math.random());
  const randomProjects = shuffledProjects.slice(0, 3);

  return (
    <>
      {/* // hero section */}
      <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
        {/* left side */}
        <div className="tablet:w-2/3 mt-10 tablet:mt-0">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <div className="flex flex-col">
              <p className="text-sm uppercase font-semibold mb-2 text-purple tracking-[4px] w-max">
                Développeur Web Junior
              </p>
              <h1 className="text-grey">GinxDev.</h1>
            </div>
            <p className="text-grey-600">
              Bonjour, je suis Cédric Bourquin, développeur web junior.
              <br /> De la conception à la réalisation, mon objectif est de vous aider à
              donner vie à vos projets web pour créer une expérience utilisateur
              exceptionnelle.
              <br />
            </p>
            <div className="py-2">
              <p className="py-2 text-lg font-semibold text-purple">
                Design, develop & deploy
              </p>
              <p className="text-lg italic">"Keep moving forward"</p>
            </div>
          </div>
          <div className="flex gap-5 mt-10 justify-center tablet:justify-start">
            <a href={"#contact"} className="btn btn-primary">
              Contactez-moi
            </a>
            <Link href={"/portfolio"} className="btn">
              Mon portfolio
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className="relative w-full tablet:w-1/2 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden">
          <Image
            src="/images/logo4.svg"
            alt="hero"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* //skills section */}
      <section className="max-width section-padding">
        <SectionHeading
          title="Mes compétences"
          subtitle="Du portfolio au site vitrine, je donne vie à vos projets web"
        />

        {/* skills */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="box flex flex-col items-center  justify-between gap-3">
              <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={35}
                  height={35}
                  className="text-white"
                />
              </div>
              <div className="text-center">
                <h4 className="text-grey-700 mb-2">{skill.name}</h4>
                <p className="text-grey-600" style={{ whiteSpace: "pre-line" }}>
                  {skill.description}
                </p>
              </div>
              <div></div>
              <ul className="flex flex-wrap gap-2">
                {skill.tags.map((tag, id) => (
                  <li
                    key={id}
                    className="text-xs bg-purple text-white px-2 py-1 rounded"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* //projects section */}
      <section className="section-padding max-width">
        <SectionHeading
          title="Mes projets"
          subtitle="Voici quelques exemples de mes réalisations"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {randomProjects.map((projet, id) => (
            <PortfolioItem key={id} project={projet} />
          ))}
        </div>

        <Link
          href={"/portfolio"}
          className="btn btn-primary mt-10 mx-auto w-max"
        >
          Voir tous les projets
        </Link>
      </section>

      {/* //contact section */}
      <Contact />

      <ScrollToTop />
    </>
  );
};

export default page;
