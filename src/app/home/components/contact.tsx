/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { gsap } from "gsap";
import Image from "next/image";

interface ContactProps {
  closeContact: () => void;
  showContact: boolean;
}
export default function Contact({ closeContact, showContact }: ContactProps) {
  const overlayRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (showContact) {
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0, left: 700 },
        { opacity: 1, duration: 0.3, left: 0 }
      );
    }
  }, [showContact]);

  if (!showContact) return null;

  const handleClose = () => {
    document.body.style.overflow = "auto";

    gsap.to(overlayRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power3.in",
      left: 700,
      onComplete: closeContact,
    });
  };

  return ReactDOM.createPortal(
    <div
      ref={overlayRef}
      className="fixed  w-screen z-90 space-y-24 bg-white px-8 md:px-32 min-h-screen overflow-hidden flex flex-col items-center justify-around  top-0 left-0"
    >
      <div className="w-full flex justify-end">
        <img
          alt="close"
          onClick={handleClose}
          className="hover:underline transition-all duration-200 font-medium  hover:text-orange-800"
          src="assets/icon/x.svg"
        />
      </div>

      <div className="flex flex-col gap-12 items-center justify-center max-w-[624px]">
        <img
          src="/assets/images/me.png"
          className="w-[150px] h-auto"
          alt="artur"
        />

        <form className="space-y-6" action="">
          <div className="space-y-3">
            <div>
              <label htmlFor="name" className="text-md md:text-md font-light  ">
                Como posso te chamar?
              </label>
              <input
                name="name"
                className="border-b-[2px] p-0 md:pt-2 focus:outline-0  placeholder:text-xl md:placeholder:text-4xl text-xl md:text-4xl border-gray-800 w-full"
                placeholder="{seu nome}"
                type="text"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-md md:text-md font-light  "
              >
                Qual seu correio eletrônico mais usado?
              </label>
              <input
                name="email"
                className="border-b-[2px] p-0 md:pt-2 focus:outline-0  placeholder:text-xl md:placeholder:text-4xl text-xl md:text-4xl border-gray-800 w-full"
                placeholder="{seu e-mail}"
                type="email"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="text-md md:text-md font-light  "
              >
                Qual assunto?
              </label>
              <input
                name="subject"
                className="border-b-[2px] p-0 md:pt-2 focus:outline-0  placeholder:text-xl md:placeholder:text-4xl text-xl md:text-4xl border-gray-800 w-full"
                placeholder="{seu assunto}"
                type="text"
              />
            </div>
          </div>

          <div className="w-full flex justify-end ">
            <button
              className="px-12 sm:px-24 h-[42px] md:h-[52px] cursor-pointer font-extralight bg-black/80 text-xl md:text-3xl text-white"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      <div className="w-full flex max-md:px-12 justify-between  max-w-[624px]">
        <div className="flex flex-col items-center justify-center gap-1">
          <img alt="mail" src="assets/icon/mail.svg" />
          <span className="hidden md:block">arttturslv@gmail.com</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <img alt="linkedin" src="assets/icon/linkedin.svg" />
          <span className="hidden md:block">linkedin/in/arttturslv</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <img alt="github" src="assets/icon/github.svg" />
          <span className="hidden md:block">github/arttturslv</span>
        </div>
      </div>
    </div>,
    document.getElementById("root") as HTMLElement
  );
}
