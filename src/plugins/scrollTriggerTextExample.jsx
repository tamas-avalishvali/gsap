"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerTextExample() {
  const wrapperRef = useRef(null);
  const zoomRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current || !textRef.current || !zoomRef.current) return;

    const ctx = gsap.context(() => {
      const split = SplitText.create(textRef.current, {
        type: "chars, words",
      });
      // gsap.set(textRef.current, { paddingLeft: "300vw" });
      const scrollTween = gsap.fromTo(
        textRef.current,
        { x: "100%" },
        {
          x: () => `-${textRef.current.scrollWidth}px`,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            pin: true,
            scrub: true,
            end: () => `1400px`,
          },
        },
      );

      split.chars.forEach((char, index) => {
        gsap.from(char, {
          yPercent: () => gsap.utils.random(-200, 200),
          rotation: () => gsap.utils.random(-20, 20),
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: "left 100%",
            end: "left 40%",
            scrub: 1,
          },
        });

        if (index === split.chars.length - 1) {
          gsap.to(zoomRef.current, {
            scale: 4,
            backgroundColor: "#e0e0e0",
            transformOrigin: "center center",
            scrollTrigger: {
              trigger: char,
              containerAnimation: scrollTween,
              start: "left 80%",
              end: "+=100",
              scrub: 2,
            },
          });
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        overflow: "hidden",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1b1b1b",
      }}
    >
      <div
        ref={zoomRef}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          ref={textRef}
          style={{
            display: "flex",
            width: "max-content",
            whiteSpace: "nowrap",
            gap: "4vw",
            fontSize: "clamp(2rem, 10vw, 12rem)",
            fontWeight: 600,
            lineHeight: 1,
            color: "#e0e0e0",
          }}
        >
          Frontend developer creating interactive web animations with GSAP and
          ScrollTrigger.
        </p>
      </div>
    </div>
  );
}
