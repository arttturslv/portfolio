/** @format */

export default function Footer() {
  return (
    <footer className="py-2">
      <section className="flex justify-between">
        <div className="w-60">
          <p>
            developer | designer frontend | tech passionated | curious | trying
            things
          </p>
        </div>
        <div>
          <span>Socials</span>
          <div className="w-full  gap-2 flex justify-center">
            <a
              href="https://github.com/arttturslv"
              className="hover:underline transition-all duration-200"
            >
              github
            </a>

            <a
              href="https://www.linkedin.com/in/arttturslv/"
              className="hover:underline transition-all duration-200"
            >
              linkedin
            </a>

            <a
              href="https://www.instagram.com/artur.pine"
              className="hover:underline transition-all duration-200"
            >
              instagram
            </a>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <span>all rights belong to creator @ 2025</span>{" "}
      </section>
    </footer>
  );
}
