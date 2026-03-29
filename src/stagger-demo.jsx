import { useRef } from "react";
import gsap from "gsap";

export function StaggerDemo() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  const runAnimation = () => {
    gsap.to([box1.current, box2.current, box3.current], {
      duration: 2,
      ease: "power2.out",
      opacity: 0.7,
      rotation: 360,
      // scale: 1.5,
      x: 300,
      stagger: {
        amount: 1,
        each: 0.3,
        from: "start",
        onComplete: function () {
          console.log("Complete", this.target);
        },
        onStart: function () {
          console.log("Start", this.target);
        },
      },
    });
  };
  const resetAnimation = () => {
    gsap.set([box1.current, box2.current, box3.current], {
      opacity: 1,
      rotation: 0,
      scale: 1,
      x: 0,
    });
  };

  return (
    <div className="bg-blue-600" style={{ padding: 20 }}>
      <button onClick={runAnimation}>Run Stagger Demo</button>
      <button onClick={resetAnimation}>Reset</button>
      <div
        ref={box1}
        style={{
          backgroundColor: "#22c55e",
          borderRadius: 12,
          height: 80,
          marginTop: 20,
          width: 80,
        }}
      />
      <div
        ref={box2}
        style={{
          backgroundColor: "#ff0000",
          borderRadius: 12,
          height: 80,
          marginTop: 20,
          width: 80,
        }}
      />
      <div
        ref={box3}
        style={{
          backgroundColor: "#3b82f6",
          borderRadius: 12,
          height: 80,
          marginTop: 20,
          width: 80,
        }}
      />
    </div>
  );
}
