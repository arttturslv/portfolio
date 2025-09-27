/** @format */

export default function Hero() {
  return (
    <main className="h-screen  flex justify-center space-y-2 flex-col items-center">
      <div className="flex flex-col gap-2 items-center justify-center fade-element ">
        <p className=" text-3xl max-sm:text-2xl">Olá, meu nome é</p>

        <span className="flex group ">
          <h1 className="font-khan font-extrabold text-9xl max-sm:text-8xl">
            Art
          </h1>
          <h1 className="font-khan font-extrabold text-9xl max-sm:text-8xl overflow-hidden max-w-0 group-hover:max-w-[5.4rem] transition-all duration-200 ease-out">
            {" "}
            tt
          </h1>
          <h1 className="font-khan font-extrabold text-9xl max-sm:text-8xl">
            ur
          </h1>
        </span>

        <div className="w-full gap-12 flex justify-center">
          <a
            href="https://github.com/arttturslv"
            target="_blank"
            className="hover:underline transition-all cursor-pointer flex group duration-200 py-1 px-2 "
          >
            <label className="cursor-pointer">github</label>
            <label className="overflow-hidden cursor-pointer max-w-0 group-hover:max-w-[5.4rem] transition-all duration-400 ease-out">
              {" "}
              /arttturslv
            </label>
          </a>

          <a
            href="https://www.linkedin.com/in/arttturslv/"
            target="_blank"
            className="hover:underline cursor-pointer transition-all flex group duration-200 py-1 px-2 "
          >
            <label className="cursor-pointer">linkedin</label>
            <label className="overflow-hidden cursor-pointer max-w-0 group-hover:max-w-[5.8rem] transition-all duration-400 ease-out">
              {" "}
              /in/arttturslv
            </label>
          </a>

          <a
            href="https://www.instagram.com/artur.pine"
            target="_blank"
            className="hover:underline transition-all cursor-pointer flex group duration-200 py-1 px-2 "
          >
            <label className="cursor-pointer">instagram</label>
            <label className="overflow-hidden cursor-pointer max-w-0 group-hover:max-w-[5.4rem] transition-all duration-400 ease-out">
              {" "}
              /artur.pine
            </label>
          </a>
        </div>
      </div>
    </main>
  );
}
