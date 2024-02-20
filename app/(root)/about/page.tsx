import React from "react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "A propos de moi - Cédric Bourquin",
};

function page() {
  return (
    <>
      <section className="max-width section-padding flex flex-col tablet:flex-row gap-20 items-center">
        <div className="relative w-full tablet:w-1/2 h-[calc(300px+20vw)] tablet:h-[600px]">
          <Image
            src={"/images/about.png"}
            fill
            alt="about img"
            className="object-cover"
          />
        </div>
        <div className="tablet:w-1/2">
          <div className="space-y-3 max-tablet:text-center flex flex-col">
            <p className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded tablet:w-max max-tablet:mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h1 className="text-grey-700">Je suis Cédric Bourquin</h1>
            <p className="text-grey-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              facere unde, autem esse, praesentium tempore exercitationem eos
              animi quis quaerat repudiandae amet similique, excepturi quam
              odio. Nisi doloribus in quasi! Et nihil enim mollitia architecto
              reprehenderit ad nobis facere eius expedita ullam blanditiis
              nulla, dolore voluptas autem reiciendis animi facilis doloribus
              maiores illo repellendus dolorem illum excepturi quaerat?
              Blanditiis, sapiente?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
