import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/constants";
import PortfolioSection from "@/components/PortfolioSection";
import PortfolioDetailsSection from "@/components/PortfolioDetailsSection";

export const metadata: Metadata = {
  title: "Mes réalisations - Cédric Bourquin",
};

const page = () => {
  return (
    <>
      <section className="max-width section-padding">
        <div className="box text-center flex items-center flex-col gap-3">
          <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5">
            <Image src={"/icons/folder.svg"} alt="icon" width={35} height={35} />
          </div>
          <h2 className="text-grey-700">Mes réalisations</h2>
          <p className="text-grey-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>

      <PortfolioSection data={projects} title="Projets Openclassrooms" />
      <PortfolioDetailsSection />
    </>
  );
};

export default page;
