"use client";

import React, { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import { socialLinks } from "@/constants";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !emailRef.current ||
      !nameRef.current ||
      !surnameRef.current ||
      !messageRef.current
    ) {
      return;
    }

    const templateParams = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    emailjs
      .send(
        "service_icloud", // service ID
        "template_n1a27lm", // template ID
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY // public KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitting(false);
          setIsEmailSent(true);
          if (formRef.current) {
            formRef.current.reset();
          }

          setTimeout(() => {
            setIsEmailSent(false);
          }, 3000);
        },

        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

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
              <p className="text-grey-700 font-bold">
                <a href="mailto:cedric.bourquin1@icloud.com">
                  cedric.bourquin1@icloud.com
                </a>
              </p>
            </div>
            <div className="box !p-6 ">
              <p className="text-grey-600">
                Vous pouvez me contacter par téléphone
              </p>
              <p className="text-grey-700 font-bold">
                <a href="tel:+336 61 21 72 42">+336 61 21 72 42</a>
              </p>
            </div>
            <div className="box !p-6 ">
              <p className="text-grey-700">Auxerre, France</p>
            </div>
            <p className="mt-10 mb-3 text-grey-700 max-tablet:text-center">
              Mes réseaux
            </p>
            <div className="flex gap-3 box !p-6 w-max max-tablet:mx-auto">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center rounded"
                >
                  <Image
                    src={link.icon}
                    alt="icone LinkedIn"
                    width={25}
                    height={25}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="box w-full">
          <form onSubmit={sendEmail} ref={formRef} className="space-y-5">
            <div className="flex gap-5 max-tablet:flex-col">
              <input
                type="text"
                placeholder="Nom"
                name="user_name"
                ref={nameRef}
                aria-label="Nom"
                required
              />
              <input
                type="text"
                placeholder="Prenom"
                name="user_surname"
                ref={surnameRef}
                aria-label="Prenom"
              />
            </div>
            <div className="flex gap-5 max-tablet:flex-col">
              <input
                type="text"
                placeholder="Email"
                name="user_email"
                ref={emailRef}
                aria-label="Email"
                required
              />
            </div>
            <textarea
              placeholder="Message"
              className="min-h-[200px]"
              name="message"
              ref={messageRef}
              aria-label="Message"
              required
            ></textarea>

            <div className="flex gap-10 items-center">
              <button type="submit" className="btn btn-primary">
                Envoyer
              </button>

              {isSubmitting && (
                <p className="text-purple font-bold">Envoi en cours...</p>
              )}
              {isEmailSent && (
                <p className="text-purple font-bold">
                  Votre message a bien été envoyé !
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
