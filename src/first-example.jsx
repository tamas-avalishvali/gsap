import gsap from "gsap";
import { useRef, useEffect } from "react";

function FirstExample() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const boxes = containerRef.current.querySelectorAll(".box");
    gsap.set(boxes, { y: 100, opacity: 0 });
    gsap.set(titleRef.current, { opacity: 0 });

    timelineRef.current = gsap.timeline({ paused: true });
    timelineRef.current.to(titleRef.current, { opacity: 1, duration: 0.6 }).to(
      boxes,
      {
        y: 0,
        opacity: 1,
        stagger: 0.06,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2",
    );
  }, []);

  const play = () => timelineRef.current.play();
  const pause = () => timelineRef.current.pause();
  const reverse = () => timelineRef.current.reverse();
  const restart = () => timelineRef.current.restart();

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reverse}>Reverse</button>
        <button onClick={restart}>Restart</button>
      </div>

      <h1 ref={titleRef} style={{ textAlign: "center", marginTop: 20 }}>
        Hello World
      </h1>

      <div
        ref={containerRef}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 6,
          marginTop: 20,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="box"
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#3b82f6",
              borderRadius: 8,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default FirstExample;
