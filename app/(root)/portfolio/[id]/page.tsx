import React from "react";
import { projects } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import RenderTechnologies from "@/components/DisplayDevIcon";

export const metadata: Metadata = {
  title: "Mes projets - Cédric Bourquin",
};

//Récupère l'id et affiche le projet correspondant
export default function PortfolioDetails({ params }: any) {
  const { id } = params;
  const project = projects.find((project) => project.id === parseInt(id));
  return (
    <div>
      {project && (
        <section className="max-width section-padding">
          <div className="box flex flex-col">
            <div className="gap-2 mb-10">
              <h1 className="uppercase text-3xl tracking-[4px] text-purple">
                {project.header}
              </h1>
              <h2 className="text-grey-700 text-xl">{project.body_title}</h2>
            </div>

            <p
              className="text-grey-600 mb-10 leading-5 w-full"
              style={{ whiteSpace: "pre-line" }}
            >
              {project.description}
            </p>

            <div className="flex max-tablet:flex-col max-tablet:items-center mb-10">
              <div className="mb-10 w-1/2 max-tablet:w-full max-tablet:flex max-tablet:flex-col max-tablet:items-center">
                <h3 className="text-purple text-lg uppercase tracking-[4px] mb-5">
                  Objectifs
                </h3>
                <ul className="text-sm">
                  {project.objectifs.map((objectif, index) => (
                    <li key={index}>{objectif}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-3 flex flex-col">
                <h3 className=" text-purple text-lg uppercase tracking-[4px] mb-5">
                  Technologies
                </h3>
                <RenderTechnologies
                  technologies={project.technologies}
                  size={40}
                  DevIconStyles="flex gap-10"
                />
              </div>
            </div>

            <div className="flex max-tablet:flex-col gap-3 mb-20">
              {project.pictures.map((picture, index) => (
                <div
                  key={index}
                  className="relative h-80 w-full rounded-lg overflow-hidden group"
                >
                  <Image
                    src={picture}
                    alt={project.header}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-5 justify-center">
              <a href={project.link} className="btn btn-primary">
                GitHub
              </a>
              {project.link2 && (
                <a href={project.link2} className="btn btn-primary">
                  Voir le site
                </a>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
