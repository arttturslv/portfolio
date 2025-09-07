/** @format */

import gsap from "gsap";
import { useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";

function Cite() {
  gsap.registerPlugin(TextPlugin);

  const textRef = useRef<HTMLHeadingElement | null>(null);

  const originalText = "Legatum est sensus vitae";
  const decryptedText = "Legado é o sentido da vida";

  const handleMouseEnter = () => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration: 2,
        text: decryptedText,
        ease: "none",
      });
    }
  };

  const handleMouseLeave = () => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration: 2,
        text: originalText,
        ease: "none",
      });
    }
  };
  return (
    <section className="my-48 flex justify-center">
      <cite
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={textRef}
        className="sm:text-3xl text-2xl text-center "
      >
        Legatum est sensus vitae
      </cite>
    </section>
  );
}

export default Cite;
