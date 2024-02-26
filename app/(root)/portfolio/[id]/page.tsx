import React from "react";
import { projects } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RenderTechnologies from "@/components/DisplayDevIcon";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Import Lucide icons

export const metadata: Metadata = {
  title: "Mes projets - Cédric Bourquin",
};

export default function PortfolioDetails({ params }: any) {
  const { id } = params;
  const project = projects.find((project) => project.id === parseInt(id));

  const hasPreviousProject =
    projects.findIndex((p) => p.id === parseInt(id) - 1) !== -1;
  const hasNextProject =
    projects.findIndex((p) => p.id === parseInt(id) + 1) !== -1;

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

            <div className="flex max-tablet:flex-col mb-20">
              {project.pictures.map((picture, index) => (
                <div
                  key={index}
                  className={`relative h-80 w-full rounded-lg overflow-hidden group ${
                    index !== 0 ? "max-tablet:hidden" : "block"
                  }`}
                >
                  <Image
                    src={picture}
                    alt={project.header}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex w-full justify-between items-center gap-5">
              <div>
                {hasPreviousProject && (
                  <Link
                    href={`/portfolio/${
                      projects[
                        projects.findIndex((p) => p.id === parseInt(id) - 1)
                      ].id
                    }`}
                  >
                    <ArrowLeft size={20} className="hover:text-purple" />
                  </Link>
                )}
              </div>

              <div className="flex gap-5 justify-center items-center">
                <a href={project.link} className="btn btn-primary">
                  GitHub
                </a>
                {project.link2 && (
                  <a href={project.link2} className="btn btn-primary">
                    Voir le site
                  </a>
                )}
              </div>

              <div>
                {hasNextProject && (
                  <Link
                    href={`/portfolio/${
                      projects[
                        projects.findIndex((p) => p.id === parseInt(id) + 1)
                      ].id
                    }`}
                  >
                    <ArrowRight size={20} className="hover:text-purple" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
