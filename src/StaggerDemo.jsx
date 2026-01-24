import { useRef } from "react";
import gsap from "gsap";

export function StaggerDemo() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  const runAnimation = () => {
    gsap.to([box1.current, box2.current, box3.current], {
      x: 300,
      scale: 1.5,
      rotation: 360,
      opacity: 0.7,
      duration: 1.5,
      ease: "power2.out",
      stagger: {
        each: 0.5,
        amount: 1.5,
        from: "start",
        onStart: function () { console.log("Start", this.target); },
        onComplete: function () { console.log("Complete", this.target); },
      },
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={runAnimation}>Run Stagger Demo</button>
      <div
        ref={box1}
        style={{ width: 80, height: 80, backgroundColor: "#22c55e", marginTop: 20, borderRadius: 12 }}
      />
      <div
        ref={box2}
        style={{ width: 80, height: 80, backgroundColor: "#ff0000", marginTop: 20, borderRadius: 12 }}
      />
      <div
        ref={box3}
        style={{ width: 80, height: 80, backgroundColor: "#3b82f6", marginTop: 20, borderRadius: 12 }}
      />
    </div>
  );
}
