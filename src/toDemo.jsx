import { useRef } from "react";
import gsap from "gsap";

export function ToDemo() {
  const boxRef = useRef(null);

  const runAnimation = () => {
    // Animate to target values
    gsap.to(boxRef.current, { x: 300, scale: 1.8, rotation: 360, opacity: 0.7, duration: 2 });
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={runAnimation}>Run To Demo</button>
      <div
        ref={boxRef}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#ff0000",
          marginTop: 20,
          borderRadius: 12,
        }}
      />
    </div>
  );
}
