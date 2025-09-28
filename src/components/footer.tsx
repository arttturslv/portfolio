/** @format */

import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" w-full flex justify-center">
      <div className="max-w-[1400px] w-full px-4 sm:px-12 space-y-4 py-2 max-sm:space-y-6    ">
        <section className="flex justify-between sm:flex-row flex-col max-sm:space-y-4">
          <div className=" w-full sm:w-60">
            <p className="max-sm:text-center ">
              developer |{" "}
              <Link
                href="/doodles"
                className="hover:underline transition-all duration-200 hover:text-orange-800"
              >
                self-proclaimed artist
              </Link>{" "}
              | tech passionated | curious | trying things
            </p>
          </div>
          <div>
            <span className="max-sm:hidden">Socials</span>
            <div className="w-full max-sm:hidden gap-2 flex justify-center">
              <a
                href="https://github.com/arttturslv"
                target="_blank"
                className="hover:underline transition-all duration-200 hover:text-orange-800"
              >
                github
              </a>

              <a
                href="https://www.linkedin.com/in/arttturslv/"
                target="_blank"
                className="hover:underline transition-all duration-200 hover:text-orange-800"
              >
                linkedin
              </a>

              <a
                href="https://www.instagram.com/artur.pine"
                target="_blank"
                className="hover:underline transition-all duration-200 hover:text-orange-800"
              >
                instagram
              </a>
            </div>
          </div>
        </section>
        <section className="flex justify-center">
          <span className="max-sm:text-sm">
            all rights belong to creator @ 2025
          </span>{" "}
        </section>
      </div>
    </footer>
  );
}
