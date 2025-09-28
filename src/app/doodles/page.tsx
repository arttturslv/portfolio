/** @format */
import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import GalleryList from "./components/galleryList";

export default function DoodlesPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light">
      <Navbar />

      <div className="w-full max-w-[1400px] px-2 sm:px-12">
        <section className="text-center my-36">
          <h1 className="text-6xl sm:text-8xl font-bold font-khan fade-element">
            Gallery
          </h1>
          <p className="max-w-[60%] text-lg sm:text-xl font-light mx-auto fade-element">
            Semi-confidential space. A collection of my solified thoughts
          </p>
        </section>

        {/* Client-side Gallery */}
        <GalleryList />
      </div>

      <Footer />
    </div>
  );
}
