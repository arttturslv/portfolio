/** @format */
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

interface AboutProps {
  openContact: () => void;
}
export default function About({ openContact }: AboutProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const tl = React.useRef<gsap.core.Timeline>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const eu = containerRef.current.querySelector(
      "img.main"
    ) as HTMLImageElement;
    const hiddenImgs =
      containerRef.current.querySelectorAll<HTMLImageElement>(".hidden-img");

    if (!eu) return;

    // pega posição central da imagem principal
    const euBox = eu.getBoundingClientRect();
    const euCenterX = euBox.left + euBox.width / 2;
    const euCenterY = euBox.top + euBox.height / 2;

    tl.current = gsap.timeline({ paused: true });

    hiddenImgs.forEach((img, i) => {
      const imgBox = img.getBoundingClientRect();
      const imgCenterX = imgBox.left + imgBox.width / 2;
      const imgCenterY = imgBox.top + imgBox.height / 2;

      const fromX = euCenterX - imgCenterX;
      const fromY = euCenterY - imgCenterY;

      // cada imagem "nasce" do centro da eu.png
      tl.current?.fromTo(
        img,
        { opacity: 0, x: fromX, y: fromY, scale: 0.5 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        i * 0.2 // stagger manual
      );
    });

    hiddenImgs.forEach((img) => {
      // Hover in
      img.addEventListener("mouseenter", () => {
        gsap.to(img, {
          scale: 1.2, // aumenta o scale
          duration: 0.3,
          ease: "power1.out",
        });
      });

      // Hover out
      img.addEventListener("mouseleave", () => {
        gsap.to(img, {
          scale: 1, // volta ao tamanho normal
          duration: 0.3,
          ease: "power1.out",
        });
      });
    });
  }, []);
  return (
    <section className=" space-y-12">
      <div className=" flex md:gap-12 gap-6 flex-col  justify-center">
        <div
          ref={containerRef}
          onMouseEnter={() => tl.current?.play()}
          onMouseLeave={() => tl.current?.reverse()}
          className="w-full  group flex items-center justify-center  fade-element "
        >
          <div className="relative group w-72">
            <Image
              height={393}
              width={392}
              loading="lazy"
              src="/assets/images/interests/eu.png"
              className="w-full main group-hover:shadow-xl duration-400 transition-all"
              alt="artur"
            />
            <div className="absolute top-0 bg-gradient-to-t w-full h-42 from-transparent dark:to-primary-dark/80 to-primary-light/30"></div>

            <Image
              width={165}
              height={123}
              loading="lazy"
              src="/assets/images/interests/moto.webp"
              className="hidden-img w-28 absolute left-48 bottom-64"
              alt="moto"
            />
            <Image
              width={125}
              height={130}
              loading="lazy"
              src="/assets/images/interests/torta.webp"
              className="hidden-img w-20 absolute right-58 bottom-58"
              alt="torta de frutas vermelhas"
            />
            <Image
              width={192}
              height={186}
              loading="lazy"
              src="/assets/images/interests/sapo.webp"
              className="hidden-img w-42 absolute sm:left-64 left-54 bottom-0"
              alt="sapo"
            />
            <Image
              width={110}
              height={191}
              loading="lazy"
              src="/assets/images/interests/puc.webp"
              className="hidden-img w-20 absolute sm:right-80 right-65  sm:bottom-22 bottom-18"
              alt="artur formando"
            />
          </div>
        </div>

        <div className="space-y-3 fade-element ">
          <p className="lg:text-4xl md:text-3xl text-2xl font-light">
            I’m a developer based in Belo Horizonte, working at{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/facss-io/"
              className=" hover:underline transition-all duration-200 font-medium text-green-950 hover:text-orange-800"
            >
              @FACSS
            </Link>
            , dedicated to crafting digital experiences, putting ideas into
            code. I believe in using my skills to make the world a better place.
            <br></br>
            Beyond the screen, I'm fascinated by things like nature, food, art,
            technology & the potential of our species.
          </p>

          <button
            onClick={openContact}
            className="underline cursor-pointer p-0 m-0 bg-transparent border-none transition-all duration-200 hover:text-orange-800"
          >
            talk to me
          </button>
        </div>
      </div>
    </section>
  );
}
