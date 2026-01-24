import { useRef } from "react";
import gsap from "gsap";

export function TimelineDemo() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  const tl = gsap.timeline({ paused: true });

  const runAnimation = () => {
    tl.to(box1.current, { x: 300, rotation: 360, scale: 1.5 })
      .to(box2.current, { y: 200, scale: 1.2 })
      .to(box3.current, { x: 400, rotation: 720 });
    tl.play();
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={runAnimation}>Run Timeline Demo</button>
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
