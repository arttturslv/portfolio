/** @format */

import About from "./components/about";
import Cite from "./components/cite";
import Footer from "../../components/footer";
import Hero from "./components/hero";
import Navbar from "../../components/navbar";
import Projects from "./components/projects";

function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Navbar></Navbar>

      <div className="w-full max-w-[1400px] px-2 sm:px-12  ">
        <Hero />
        <About />

        <Projects></Projects>

        <Cite></Cite>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
