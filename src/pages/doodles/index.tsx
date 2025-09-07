/** @format */

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import BentoItem from "./components/bentoItem";

function Doodles() {
  const data = Array.from({ length: 10 }, (_, i) => ({
    date: "20/08/2005",
    srcImage: "/assets/doodles/test.png",
  }));

  function toChunks<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }
  const chunks = toChunks(data, 4);
  return (
    <div className="w-full flex justify-center bg-zinc-100">
      <div className="w-full  px-4  ">
        <Navbar></Navbar>

        <section className="w-full gap-3 text-center flex flex-col items-center my-36">
          <h1 className="text-8xl font-bold font-khan ">Gallery</h1>
          <p className="max-w-[60%] text-xl">
            Semi-confidential doodles. Not all mine, some of them are from my
            great friends, can you spot the them?
          </p>
        </section>

        <section className={`my-32 space-y-8 `}>
          {chunks.map((group, gi) => (
            <div
              key={gi}
              className={
                // grid 4x2 no desktop; alturas automáticas com auto-rows
                "grid grid-flow-dense gap-4 sm:grid-cols-2  lg:grid-cols-4 auto-rows-[12rem] lg:auto-rows-[18rem]"
              }
            >
              {/* L A R G E (ocupa 2 col x 2 rows) */}
              {group[0] && (
                <div className="lg:col-span-2 lg:row-span-2">
                  <BentoItem
                    size="large"
                    srcImage={group[0].srcImage}
                    date={group[0].date}
                    fluid
                  />
                </div>
              )}

              {/* S M A L L 1 (topo, col 3) */}
              {group[1] && (
                <div className="lg:col-start-3 lg:row-start-1">
                  <BentoItem
                    size="small"
                    srcImage={group[1].srcImage}
                    date={group[1].date}
                    fluid
                  />
                </div>
              )}

              {/* S M A L L 2 (topo, col 4) */}
              {group[2] && (
                <div className="lg:col-start-4 lg:row-start-1">
                  <BentoItem
                    size="small"
                    srcImage={group[2].srcImage}
                    date={group[2].date}
                    fluid
                  />
                </div>
              )}

              {/* M E D I U M (embaixo, col 3-4) */}
              {group[3] && (
                <div className="lg:col-start-3 lg:col-span-2 lg:row-start-2">
                  <BentoItem
                    size="medium"
                    srcImage={group[3].srcImage}
                    date={group[3].date}
                    fluid
                  />
                </div>
              )}
            </div>
          ))}
        </section>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default Doodles;
