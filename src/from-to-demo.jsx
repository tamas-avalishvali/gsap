import { useRef } from "react";
import gsap from "gsap";

export function FromToDemo() {
  const boxRef = useRef(null);

  const runAnimation = () => {
    // Animate from one value to another
    gsap.fromTo(
      boxRef.current,
      { x: 100, scale: 1, rotation: 0 },
      { x: 400, scale: 1.8, rotation: 360, duration: 2 }
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={runAnimation}>Run FromTo Demo</button>
      <div
        ref={boxRef}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#f59e0b",
          marginTop: 20,
          borderRadius: 12,
        }}
      />
    </div>
  );
}
