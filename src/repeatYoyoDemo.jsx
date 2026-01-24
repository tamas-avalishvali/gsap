import { useRef } from "react";
import gsap from "gsap";

export function RepeatYoyoDemo() {
  const boxRef = useRef(null);

  const runAnimation = () => {
    gsap.to(boxRef.current, {
      x: 300,
      rotation: 360,
      scale: 1.5,
      repeat: -1, // infinite repeat
      yoyo: true, // back and forth
      duration: 1.5,
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={runAnimation}>Run Repeat/Yoyo Demo</button>
      <div
        ref={boxRef}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#8b5cf6",
          marginTop: 20,
          borderRadius: 12,
        }}
      />
    </div>
  );
}
