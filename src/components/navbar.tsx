/** @format */

function Navbar() {
  return (
    <header className="w-full  flex justify-center ">
      <div className="max-w-[1400px] items-center w-full flex h-10 px-4  ">
        <div className="w-12 h-8 bg-black"></div>

        <div className="w-full  gap-12 flex justify-center">
          <a href="/" className="underline ">
            home
          </a>

          <a href="/projects">projects</a>

          <a href="/doodles">doodles</a>
        </div>

        <div>
          <p>lightmode</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
