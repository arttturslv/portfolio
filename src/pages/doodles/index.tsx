/** @format */

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import BentoItem from "./components/bentoItem";
import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeContext } from "../../routes/routes";
import WaveformPlayer from "../../components/Wave";

gsap.registerPlugin(ScrollTrigger);
function Doodles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // anima apenas elementos internos, não o container inteiro
      gsap.from(".fade-element", {
        autoAlpha: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const data = [
    {
      date: "2020-04-19",
      type: "image",
      src: "/assets/doodles/connection.jpeg",
      name: "Long distance connection",
    },
    {
      date: "2023-04-01",
      type: "image",
      src: "/assets/doodles/puc.jpg",
      name: "Last one of his kind",
    },
    {
      date: "2020-04-19",
      type: "image",
      src: "/assets/doodles/little-babies.jpg",
      name: "Little babies",
    },
    {
      date: "2023-04-01",
      type: "image",
      src: "/assets/doodles/red-moon.jpg",
      name: "無限月読",
    },

    {
      date: "2023-04-01",
      type: "image",
      src: "/assets/doodles/frog.jpg",
      name: "Frog",
    },
    {
      date: "2022-05-12",
      type: "audio",
      src: "/assets/sounds/derupdoop.wav",
      name: "derupdoop.wav",
    },
    {
      date: "2020-04-19",
      type: "image",
      src: "/assets/doodles/window.jpg",
      name: "Window",
    },
    {
      date: "2023-04-01",
      type: "image",
      src: "/assets/doodles/yesterday-me.jpg",
      name: "Yesterday me",
    },
  ];

  function toChunks<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }
  const chunks = toChunks(data, 4);

  const { isDark } = useContext(ThemeContext);

  function renderItem(item: any, size: "large" | "medium" | "small") {
    if (item.type === "audio") {
      return (
        <div className="bg-white relative group rounded-xl hover:rounded-4xl transition-all duration-500 ease-in-out flex items-center justify-center overflow-hidden w-full h-full">
          <span className="absolute z-50 top-3 mix-blend-difference text-white flex justify-between w-[90%] left-4 text-sm font-light">
            <label>{item.date}</label>
            <label>{item.name}</label>
          </span>
          <div className="w-full flex justify-center items-center h-full">
            <WaveformPlayer audioUrl={item.src} />
          </div>
        </div>
      );
    }

    return (
      <BentoItem
        size={size}
        srcImage={item.src}
        date={item.date}
        title={item.name}
        fluid
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`${
        isDark ? "dark" : "light"
      } bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light w-full flex flex-col items-center justify-center`}
    >
      <Navbar></Navbar>

      <div className="w-full max-w-[1400px] px-2 sm:px-12  ">
        <section className="fade-element  w-full gap-3 text-center flex flex-col items-center my-36">
          <h1 className="text-6xl sm:text-8xl font-bold font-khan ">Gallery</h1>
          <p className="max-w-[60%] text-lg sm:text-xl font-light">
            Semi-confidential space. A collection of my solified thoughts
          </p>
        </section>

        <section className={`my-32 space-y-8 `}>
          {chunks.map((group, gi) => (
            <div
              key={gi}
              className="grid grid-flow-dense gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[12rem] lg:auto-rows-[18rem]"
            >
              {gi % 2 === 0 ? (
                <>
                  {group[0] && (
                    <div className="lg:col-span-2 lg:row-span-2">
                      {renderItem(group[0], "large")}
                    </div>
                  )}
                  {group[1] && (
                    <div className="lg:col-start-3 lg:row-start-1">
                      {renderItem(group[1], "small")}
                    </div>
                  )}
                  {group[2] && (
                    <div className="lg:col-start-4 lg:row-start-1">
                      {renderItem(group[2], "small")}
                    </div>
                  )}
                  {group[3] && (
                    <div className="lg:col-start-3 lg:col-span-2 lg:row-start-2">
                      {renderItem(group[3], "medium")}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {group[0] && (
                    <div className="lg:col-start-3 lg:col-span-2 lg:row-span-2">
                      {renderItem(group[0], "large")}
                    </div>
                  )}
                  {group[1] && (
                    <div className="lg:col-start-1 lg:row-start-1">
                      {renderItem(group[1], "small")}
                    </div>
                  )}
                  {group[2] && (
                    <div className="lg:col-start-2 lg:row-start-1">
                      {renderItem(group[2], "small")}
                    </div>
                  )}
                  {group[3] && (
                    <div className="lg:col-start-1 lg:col-span-2 lg:row-start-2">
                      {renderItem(group[3], "medium")}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Doodles;
