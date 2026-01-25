"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerTextExample() {
  const textRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!textRef.current || !wrapperRef.current) return;

    const split = SplitText.create(textRef.current, { type: "chars, words" });

    const scrollTween = gsap.fromTo(
      textRef.current,
      { x: "100vw" },
      {
        x: () => `-${textRef.current.scrollWidth + 100}px`,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          end: "+=5000px",
          scrub: true,
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
        gsap.to(wrapperRef.current, {
          backgroundColor: "#e0e0e0",
          scale: 20,
          transformOrigin: "center center",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "+=1000px",
            scrub: 2,
          },
        });
      }
    });

    return () => {
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
    };
  }, []);

  return (
    <>
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
        <p
          ref={textRef}
          style={{
            display: "flex",
            width: "max-content",
            whiteSpace: "nowrap",
            gap: "4vw",
            paddingLeft: "100vw",
            fontSize: "clamp(2rem, 10vw, 12rem)",
            fontWeight: 600,
            lineHeight: 1,
            textAlign: "center",
            color: "#e0e0e0",
          }}
        >
          Frontend developer creating interactive web animations with GSAP and
          ScrollTrigger.
        </p>
      </div>
    </>
  );
}
