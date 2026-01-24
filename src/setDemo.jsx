import { useRef } from "react";
import gsap from "gsap";

export function SetDemo() {
  const boxRef = useRef(null);

  const runAnimation = () => {
    // Set properties immediately
    gsap.set(boxRef.current, { x: 200, scale: 1.5, rotation: 45, opacity: 0.5 });
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={runAnimation}>Run Set Demo</button>
      <div
        ref={boxRef}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#22c55e",
          marginTop: 20,
          borderRadius: 12,
        }}
      />
    </div>
  );
}
