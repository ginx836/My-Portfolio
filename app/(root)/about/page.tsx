import React from "react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "A propos de moi - Cédric Bourquin",
};

function page() {
  return (
    <>
      <section className="max-width section-padding flex flex-col tablet:flex-row gap-20 items-center justify-center">
        <div className="relative w-full tablet:w-1/3 h-[calc(300px+20vw)] tablet:h-[700px]">
          <Image
            src={"/images/Profil2.webp"}
            fill
            alt="Photo de profil"
            className="object-contain"
          />
        </div>
        <div className="tablet:w-1/2">
          <div className="space-y-3 max-tablet:text-center flex flex-col">
            <q className=" quote px-4 py-2 bg-peach-500 text-grey-600 font-bold italic w-max rounded tablet:w-max max-tablet:mx-auto">
              Keep moving forward
            </q>
            <h1 className="text-grey-700 pb-5 max-tablet:text-4xl">
              Je suis Cédric Bourquin
            </h1>
            <p className="text-grey-600 leading-7 pb-5">
              "Tech Enthusiast", né au début des années 80, j'ai grandi avec
              l'informatique et le numérique.
              <br /> Parce qu'il n'est jamais trop tard pour apprendre et se
              lancer, j'ai décidé d'asscoier ma passion et mon métier après 21
              ans de commerce au service de mes clients.
              <br />
              C'est pourquoi j'ai décidé de me former au développement web pour
              mêler création et digital.
              <br />
              Je mets donc mon expérience et ma passion au service de vos
              projets.
              <br />
              <br />
              D'un point de vue plus personnel, je suis un passionné de jeux
              vidéos et notamment de JRPG et de FPS.
              <br />
              On échappe au cliché n'est ce pas ? 😄
            </p>
            <p className="font-bold text-lg text-center">
              Continuer à apprendre, mettre mes compétences au service de vos
              projets, voilà ce qui m'anime au quotidien.
            </p>
          </div>
        </div>
      </section>
      <section className="max-width section-padding">
        <h2 className="text-purple text-center pb-5 max-tablet:text-xl">
          "La seule façon de faire du bon travail est d'aimer ce que vous
          faites" - Steve Jobs
        </h2>
      </section>
    </>
  );
}

export default page;
