import React from "react";
import Image from "next/image";

import { socialLinks } from "@/constants";

const Contact = () => {
  return (
    <>
      <section className="max-width section-padding" id="contact">
        <div className="box text-center flex items-center flex-col gap-3">
          <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5">
            <Image src={"/icons/mail.svg"} alt="icon" width={35} height={35} />
          </div>
          <h2 className="text-grey-700">On reste en contact ?</h2>
        </div>
      </section>

      <section className="max-width section-padding flex max-tablet:flex-col gap-16">
        <div className="tablet:max-w-md w-full">
          <div className="space-y-4">
            <div className="box !p-6 ">
              <p className="text-grey-600">
                Vous pouvez me contacter directement par mail
              </p>
              <h6 className="tex-tgrey-700">
                <a href="mailto:cedric.bourquin1@icloud.com">
                  cedric.bourquin1@icloud.com
                </a>
              </h6>
            </div>
            <div className="box !p-6 ">
              <p className="text-grey-600">
                Vous pouvez me contacter par téléphone
              </p>
              <h6 className="text-grey-700">
                <a href="tel:+336 61 21 72 42">+336 61 21 72 42</a>
              </h6>
            </div>
            <div className="box !p-6 ">
              <h6 className="tex-tgrey-700">Auxerre, France</h6>
            </div>
            <h6 className="mt-10 mb-3 text-grey-700 max-tablet:text-center">
              Mes réseaux
            </h6>
            <div className="flex gap-3 box !p-6 w-max max-tablet:mx-auto">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  className="w-8 h-8 bg-purple text-peach flex items-center justify-center rounded"
                >
                  <Image src={link.icon} alt="icon" width={20} height={20} />
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
            <textarea
              placeholder="Message"
              className="min-h-[200px]"
            ></textarea>
            <button className="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
