import React from "react";
import Link from "next/link";
import Image from "next/image";

// components
import SectionHeading from "@/components/SectionHeading";
import PortfolioItem from "@/components/PortfolioItem";
import { ArrowRight } from "lucide-react";
import { portfolios, skills } from "@/constants";

const page = () => {
  return (
    <>
      {/* // hero section */}
      <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
        {/* left side */}
        <div className="tablet:w-2/3 mt-10 tablet:mt-0">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded">
              Développeur Web
            </p>
            <h1 className="text-grey">GinxDev.</h1>
            <p className="text-grey-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              facilis, atque, tenetur optio culpa non distinctio amet corporis
              voluptatem iste illo facere dolorum? Quos, sequi? Numquam tempore
              sapiente qui sed?
            </p>
          </div>
          <div className="flex gap-5 mt-10 justify-center tablet:justify-start">
            <Link href={"/contact"} className="btn btn-primary">
              Contactez-moi
            </Link>
            <Link href={"/portfolio"} className="btn">
              Mon portfolio
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden">
          <Image
            src="/images/hero.png"
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* //skills section */}
      <section className="max-width section-padding">
        <SectionHeading
          title="Mes compétences"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptates cupiditate ut?"
        />

        {/* skills */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="box flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={35}
                  height={35}
                />
              </div>
              <div className="text-center">
                <h4 className="text-grey-700 mb-2">{skill.name}</h4>
                <p className="text-grey-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* //projects section */}
      <section className="section-padding max-width">
        <SectionHeading
          title="Mes projets"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptates cupiditate ut?"
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {portfolios.slice(0, 3).map((portfolio, index) => (
            <PortfolioItem key={index} portfolio={portfolio} />
          ))}
        </div>

        <Link href={"/portfolio"} className="btn btn-primary mt-10 mx-auto w-max">
          Voir tous les projets
        </Link>
      </section>
    </>
  );
};

export default page;
