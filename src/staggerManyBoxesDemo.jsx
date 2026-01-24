import { useRef } from "react";
import gsap from "gsap";

function StaggerManyBoxesDemo() {
  const containerRef = useRef(null);

  const runAnimation = () => {
    const boxes = containerRef.current.querySelectorAll(".box");

    gsap.fromTo(
      boxes,
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  };

  return (
    <div style={{ padding: 40 }}>
      <button onClick={runAnimation}>Run Stagger</button>

      <div
        ref={containerRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 60px)",
          gap: 12,
          marginTop: 20,
        }}
      >
        {Array.from({ length: 100 }).map((_, index) => (
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

export default StaggerManyBoxesDemo;
