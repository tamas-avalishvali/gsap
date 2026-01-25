"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollPortfolioSection() {
  const bBoxRef = useRef(null);
  const gBoxRef = useRef(null);
  const pBoxRef = useRef(null);
  const rBoxRef = useRef(null);
  const yBoxRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        start: "top top",
        pinSpacer: false,
        end: "+=3000",
        scrub: 3,
        markers: true,
      },
    });

    tl.to(gBoxRef.current, { x: -300 })
      .to(rBoxRef.current, { x: 300 }, "-=0.5")
      .to(bBoxRef.current, { y: 300 }, "-=0.5")
      .to(pBoxRef.current, { y: -300 }, "-=0.5");
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div style={{ height: "100vh", background: "#111" }} />
      <div
        ref={wrapperRef}
        className="container"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: 30,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0b0b0b",
        }}
      >
        <div
          ref={gBoxRef}
          style={{
            backgroundColor: "#22c55e",
            borderRadius: 12,
            height: 50,
            width: 50,
          }}
        >
          green
        </div>
        <div
          ref={rBoxRef}
          style={{
            backgroundColor: "#c54522",
            borderRadius: 12,
            height: 50,
            width: 50,
          }}
        />
        <div
          ref={bBoxRef}
          style={{
            backgroundColor: "#229ac5",
            borderRadius: 12,
            height: 50,
            width: 50,
          }}
        />
        <div
          ref={pBoxRef}
          style={{
            backgroundColor: "#c522b2",
            borderRadius: 12,
            height: 50,
            width: 50,
          }}
        />
        <div
          ref={yBoxRef}
          style={{
            backgroundColor: "#c5bd22",
            borderRadius: 12,
            height: 50,
            width: 50,
          }}
        />
      </div>
      <div style={{ height: "100vh", background: "#111" }} />
    </>
  );
}
