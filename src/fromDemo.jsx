import { useRef } from "react";
import gsap from "gsap";

export function FromDemo() {
  const boxRef = useRef(null);

  const runAnimation = () => {
    // Animate from these values to current
    gsap.from(boxRef.current, { x: 500, scale: 0.5, rotation: 180, opacity: 0, duration: 2 });
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={runAnimation}>Run From Demo</button>
      <div
        ref={boxRef}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#3b82f6",
          marginTop: 20,
          borderRadius: 12,
        }}
      />
    </div>
  );
}
