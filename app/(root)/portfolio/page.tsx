import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { portfolios } from "@/constants";
import PortfolioSection from "@/components/PortfolioSection";

export const metadata: Metadata = {
  title: "Mes projets - Cédric Bourquin",
};

const page = () => {
  return (
    <>
      <section className="max-width section-padding">
        <div className="box text-center flex items-center flex-col gap-3">
          <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5">
            <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35} />
          </div>
          <h2 className="text-grey-700">Mes projets</h2>
          <p className="text-grey-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>

      <PortfolioSection data={portfolios} title="Projets récents" />
    </>
  );
};

export default page;
