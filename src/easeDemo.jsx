import { useRef } from "react";
import gsap from "gsap";

export function EaseDemo() {
  const boxRef = useRef(null);

  const runAnimation = () => {
    // Different easing functions
    gsap.to(boxRef.current, { x: 300, rotation: 360, scale: 1.5, ease: "back(1.7)", duration: 2 });
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={runAnimation}>Run Ease Demo</button>
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
