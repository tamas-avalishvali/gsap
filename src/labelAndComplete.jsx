import gsap from "gsap";
import { useEffect, useRef } from "react";

function LabelAndCompleteDemo() {
  const titleRef = useRef(null);
  const boxesWrapperRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const boxes = boxesWrapperRef.current.querySelectorAll(".box");

    // Create timeline once
    timelineRef.current = gsap.timeline({
      paused: true,
      onComplete: () => {
        console.log("Timeline completed");
      },
    });

    // Initial states
    gsap.set(titleRef.current, { opacity: 0, y: -20 });
    gsap.set(boxes, { opacity: 0, y: 60, scale: 0.9 });

    // ---- TIMELINE STRUCTURE ----

    timelineRef.current.addLabel("intro");

    timelineRef.current.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    timelineRef.current.addLabel("boxesIn");

    timelineRef.current.to(
      boxes,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      },
      "boxesIn+=0.1"
    );

    timelineRef.current.addLabel("highlight");

    timelineRef.current.to(
      boxes[boxes.length - 1],
      {
        scale: 1.25,
        duration: 0.4,
        ease: "back.out(1.7)",
      },
      "highlight"
    );

    timelineRef.current.addLabel("end");
  }, []);

  // Jump to a label and continue playing
  const playFromLabel = (label) => {
    timelineRef.current.seek(label).play();
  };

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button onClick={() => playFromLabel("intro")}>
          Play from Intro
        </button>

        <button onClick={() => playFromLabel("boxesIn")}>
          Play from Boxes
        </button>

        <button onClick={() => playFromLabel("highlight")}>
          Play from Highlight
        </button>

        <button onClick={() => playFromLabel("end")}>
          Jump to End
        </button>
      </div>

      <h2 ref={titleRef}>Timeline Labels Demo</h2>

      <div
        ref={boxesWrapperRef}
        style={{ display: "flex", gap: 12, marginTop: 20 }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="box"
            style={{
              width: 70,
              height: 70,
              borderRadius: 10,
              backgroundColor: "#3b82f6",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default LabelAndCompleteDemo;
