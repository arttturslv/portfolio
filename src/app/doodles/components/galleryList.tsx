/** @format */

"use client";
import React, { useEffect, useRef } from "react";
import BentoItem from "./bentoItem";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GalleryItem {
  _id: string;
  type: "image" | "audio";
  src: string;
  date: string;
  name: string;
}

export default function GalleryList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [galleryList, setGalleryList] = React.useState<GalleryItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("/api/gallery")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar galeria");
        return res.json();
      })
      .then((data: GalleryItem[]) => setGalleryList(data))
      .catch((err: unknown) => {
                 if (err instanceof Error) {

        setError(err.message)
        } else {
    setError("An unexpected error occurred");
  }
      })
      .finally(() => setLoading(false));
  }, []);

  // GSAP depois que os items aparecem no DOM
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-element",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.2, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [galleryList]);

  return (
    <div ref={containerRef} className="my-32 space-y-8 w-full ">
      {!Array.isArray(galleryList) ? (
        <div className="text-center w-full justify-center items-center ">
          <label htmlFor=""> Sorry, there is nothing here</label>
        </div>
      ) : (
        <>
          {" "}
          {loading ? (
            <p className="text-center">Loading projects...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="grid grid-flow-dense gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[12rem] lg:auto-rows-[18rem]">
              {galleryList.map((item, i) => (
                <BentoItem
                  key={item._id}
                  size={i === 0 ? "large" : i === 3 ? "medium" : "small"}
                  type={item.type}
                  src={item.src}
                  date={item.date}
                  title={item.name}
                  fluid
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
