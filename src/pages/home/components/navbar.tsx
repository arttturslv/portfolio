/** @format */

function Navbar() {
  return (
    <header className="w-full flex h-10 px-4 items-center">
      <div className="w-12 h-8 bg-black"></div>

      <div className="w-full  gap-12 flex justify-center">
        <a href="https://github.com/arttturslv" className="underline ">
          home
        </a>

        <a href="https://www.linkedin.com/in/arttturslv/">projects</a>

        <a href="https://www.instagram.com/artur.pine">blog</a>
      </div>

      <div>
        <p>lightmode</p>
      </div>
    </header>
  );
}

export default Navbar;
