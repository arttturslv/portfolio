/** @format */

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { gsap } from "gsap";
import { sendContactAction } from "../../../actions/contact-me";
import { toast } from "sonner";

interface ContactProps {
  closeContact: () => void;
  showContact: boolean;
}

interface InputValidation {
  regex: RegExp;
  message: string;
}

export const NAME_VALIDATION: InputValidation = {
  regex: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}$/,
  message: "Digite um nome válido*",
};

export const EMAIL_VALIDATION: InputValidation = {
  regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  message: "Digite um e-mail válido*",
};

export default function Contact({ closeContact, showContact }: ContactProps) {
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (showContact) {
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0, left: 700 },
        { opacity: 1, duration: 0.3, left: 0 },
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    validation: InputValidation,
    set: React.Dispatch<React.SetStateAction<string>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>,
  ) => {
    const value = e.currentTarget.value;
    set(value);

    if (value.length === 0) {
      setError(null);
      return;
    }

    if (!validation.regex.test(value)) {
      setError(validation.message);
    } else {
      setError(null);
    }
  };

  const sendEmail = async () => {
    if (!name || !email || !subject) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      const { success } = await sendContactAction({
        senderEmail: email,
        senderName: name,
        subject,
      });

      if (success) {
        toast.success("E-mail enviado com sucesso!");
        handleClose();
      } else {
        toast.error("Erro desconhecido ao enviar e-mail.");
      }
      console.log(success);
    } catch (error) {
      toast.error("Erro ao enviar e-mail.");
    } finally {
      setLoading(false);
    }
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
          className="hover:underline transition-all duration-200 font-medium  hyperlink"
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
                value={name}
                maxLength={32}
                onChange={(e) =>
                  handleChange(e, NAME_VALIDATION, setName, setNameError)
                }
              />
              <p
                role="alert"
                className="h-1 text-sm text-red-500 font-medium text-end"
              >
                {nameError}
              </p>
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
                value={email}
                onChange={(e) =>
                  handleChange(e, EMAIL_VALIDATION, setEmail, setEmailError)
                }
              />
              <p
                role="alert"
                className="h-1 text-sm text-red-500 font-medium text-end"
              >
                {emailError}
              </p>
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
                value={subject}
                onChange={(e) => setSubject(e.currentTarget.value)}
              />
            </div>
          </div>

          <div className="w-full flex justify-end ">
            <button
              className={`px-12 sm:px-24 h-[42px] md:h-[52px] cursor-pointer font-extralight bg-black/80 text-xl md:text-3xl text-white ${loading ? "animate-pulse" : ""}`}
              type="button"
              onClick={sendEmail}
            >
              {!loading ? "Enviar" : "Enviando..."}
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
    document.getElementById("root") as HTMLElement,
  );
}
