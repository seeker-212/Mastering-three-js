import { useRef } from "react";
import { performanceImages, performanceImgPositions } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Performance = () => {
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(
    () => {
      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );

      if (isMobile) return;

      const tl = gsap.timeline({
        defaults: { ease: "power1.inOut", duration: 2, overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach((pos) => {
        if (pos.id === "p5") return;

        const toVars = {};
        if (pos.left !== undefined) toVars.left = `${pos.left}%`;
        if (pos.right !== undefined) toVars.right = `${pos.right}%`;
        if (pos.bottom !== undefined) toVars.bottom = `${pos.bottom}%`;
        if (pos.transform !== undefined) toVars.transform = pos.transform;

        tl.to(`.${pos.id}`, toVars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] },
  );
  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game On</h2>
      <div className="wrapper">
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.id || `Performance Image #${index + 1}`}
            className={item.id}
          />
        ))}
      </div>
      <div className="content">
        <p>
          Run graphics-intensive workflow with a responsiveness that keeps up
          with your imagination. the M4 family of chips features a GPU with
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            gaming feel more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching fast on-chip memory to dramatically increase
          average GPU utilization -- driving a huge performance boost for the
          most demanding pro apps and games
        </p>
      </div>
    </section>
  );
};

export default Performance;
