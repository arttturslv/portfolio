/** @format */

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import BentoItem from "./components/bentoItem";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      srcImage: "/assets/doodles/connection.jpeg",
      name: "Long distance connection",
    },
  ];

  function toChunks<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }
  const chunks = toChunks(data, 4);
  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center justify-center"
    >
      <Navbar></Navbar>

      <div className="w-full max-w-[1400px] px-2 sm:px-12  ">
        <section className="fade-element  w-full gap-3 text-center flex flex-col items-center my-36">
          <h1 className="text-8xl font-bold font-khan ">Gallery</h1>
          <p className="max-w-[60%] text-xl font-light">
            Semi-confidential doodles. Not all mine, some of them are from my
            great friends, can you spot the them?
          </p>
        </section>

        <section className={`my-32 space-y-8 `}>
          {chunks.map((group, gi) => (
            <div
              key={gi}
              className={
                "grid grid-flow-dense gap-4 sm:grid-cols-2  lg:grid-cols-4 auto-rows-[12rem] lg:auto-rows-[18rem]"
              }
            >
              {group[0] && (
                <div className="lg:col-span-2 lg:row-span-2">
                  <BentoItem
                    size="large"
                    srcImage={group[0].srcImage}
                    date={group[0].date}
                    title={group[0].name}
                    fluid
                  />
                </div>
              )}

              {group[1] && (
                <div className="lg:col-start-3 lg:row-start-1">
                  <BentoItem
                    size="small"
                    srcImage={group[1].srcImage}
                    date={group[1].date}
                    title={group[0].name}
                    fluid
                  />
                </div>
              )}

              {group[2] && (
                <div className="lg:col-start-4 lg:row-start-1">
                  <BentoItem
                    size="small"
                    srcImage={group[2].srcImage}
                    date={group[2].date}
                    title={group[0].name}
                    fluid
                  />
                </div>
              )}

              {group[3] && (
                <div className="lg:col-start-3 lg:col-span-2 lg:row-start-2">
                  <BentoItem
                    size="medium"
                    srcImage={group[3].srcImage}
                    date={group[3].date}
                    title={group[0].name}
                    fluid
                  />
                </div>
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
