import { useRef } from "react";
import gsap from "gsap";

function TransformOriginDemo() {
  const boxRef = useRef(null);
  const tlRef = useRef(null); // Timeline reference to persist between renders

  const runAnimation = () => {
    // Create timeline only once
    if (!tlRef.current) {
      tlRef.current = gsap.timeline({ paused: true });

      // Example 1: default transform origin (center)
      // tlRef.current.to(boxRef.current, { x: 200, rotation: 360, scale: 1.5, duration: 2 });

      // Example 2: custom transform origin (top left)
      tlRef.current.to(boxRef.current, {
        x: 200,
        rotation: 360,
        scale: 1.5,
        duration: 2,
        transformOrigin: "top left",
      });

      // Example 3: another transform origin (optional)
      // tlRef.current.to(boxRef.current, {
      //   x: 0,
      //   rotation: 0,
      //   scale: 1,
      //   duration: 2,
      //   transformOrigin: "50% 100%",
      // });
    }

    tlRef.current.play(); // Play timeline
  };

  const repeatAnimation = () => {
    if (tlRef.current) {
      tlRef.current.repeat(-1); // Infinite repeat
      tlRef.current.play();
    }
  };

  const resetAnimation = () => {
    if (tlRef.current) tlRef.current.restart(); // Restart timeline
  };

  return (
    <div style={{ padding: 40 }}>
      <button onClick={runAnimation}>Run TransformOrigin Demo</button>
      <button onClick={repeatAnimation} style={{ marginLeft: 10 }}>Repeat</button>
      <button onClick={resetAnimation} style={{ marginLeft: 10 }}>Reset</button>

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

export default TransformOriginDemo;
