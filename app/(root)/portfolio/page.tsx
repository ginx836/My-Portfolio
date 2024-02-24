import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/constants";
import PortfolioSection from "@/components/PortfolioSection";

export const metadata: Metadata = {
  title: "Mes réalisations - Cédric Bourquin",
};

const page = ({ params }: any) => {

  const { id } = params;
   const project = projects.find((project) => project.id === parseInt(id));

  return (
    <>
      <section className="max-width section-padding">
        <div className="box text-center flex items-center flex-col gap-3">
          <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5">
            <Image src={"/icons/folder.svg"} alt="icon" width={35} height={35} />
          </div>
          <h2 className="text-grey-700">Mes réalisations</h2>
          <p className="text-grey-600">Vous trouverez ici l'ensemble de mes projets, y compris mes projets de formation.<br/>Venez découvrir mon univers au travers de mes réalisations personnelles.</p>
        </div>
      </section>

      <PortfolioSection data={projects} title="Projets Openclassrooms" />
     
    </>
  );
};

export default page;
