/** @format */

import About from "./components/about";
import Cite from "./components/cite";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1400px] px-12  ">
        <Navbar></Navbar>

        <Hero />
        <About />

        <Projects></Projects>

        <Cite></Cite>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
