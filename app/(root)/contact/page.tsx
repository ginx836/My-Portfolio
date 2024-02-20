import React from "react";
import { Metadata } from "next";
import Image from "next/image";

import { socialLinks } from "@/constants";

export const metadata: Metadata = {
  title: "Contact - Cédric Bourquin",
};

const page = () => {
  return (
    <>
      <section className="max-width section-padding">
        <div className="box text-center flex items-center flex-col gap-3">
          <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5">
            <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35} />
          </div>
          <h2 className="text-grey-700">On reste en contact ?</h2>
          <p className="text-grey-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </section>

      <section className="max-width section-padding flex max-tablet:flex-col gap-16">
        <div className="tablet:max-w-md w-full">
          <div className="space-y-4">
            <div className="box !p-6 ">
              <p className="text-grey-600">
                Vous pouvez me contacter par mail ici
              </p>
              <h6 className="tex-tgrey-700">cedric.bourquin1@icloud.com</h6>
            </div>
            <div className="box !p-6 ">
              <p className="text-grey-600">
                Vous pouvez me contacter par téléphone
              </p>
              <h6 className="tex-tgrey-700">+33 661217242</h6>
            </div>
            <div className="box !p-6 ">
              <p className="text-grey-600">Adresse</p>
              <h6 className="tex-tgrey-700">Mon adresse</h6>
            </div>
            <h6 className="mt-10 mb-3 text-grey-700 max-tablet:text-center">
              Mes réseaux
            </h6>
            <div className="flex gap-3 box !p-6 w-max max-tablet:mx-auto">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="w-10 h-10 bg-purple text-peach flex items-center justify-center rounded"
                >
                  <link.icon strokeWidth={0} fill="currentColor" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="box w-full">
          <form action="" className="space-y-5">
            <div className="flex gap-5 max-tablet:flex-col">
              <input type="text" placeholder="Nom" />
              <input type="text" placeholder="Prenom" />
            </div>
            <div className="flex gap-5 max-tablet:flex-col">
              <input type="text" placeholder="Email" />
            </div>
            <textarea placeholder="Message" className="min-h-[200px]"></textarea>
            <button className="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </section>

      
    </>
  );
};

export default page;
