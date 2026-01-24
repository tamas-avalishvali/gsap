import { useRef } from "react";
import gsap from "gsap";

export function PlayPauseReverseResetDemo() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  const tl = gsap.timeline({ paused: true });

  const initTimeline = () => {
    tl.to(box1.current, { x: 300, rotation: 360 })
      .to(box2.current, { y: 200, scale: 1.5 })
      .to(box3.current, { x: 400, rotation: 720 });
  };

  const playTimeline = () => tl.play();
  const pauseTimeline = () => tl.pause();
  const reverseTimeline = () => tl.reverse();
  const resetTimeline = () => tl.restart();

  return (
    <div style={{ padding: 20 }}>
      <button onClick={initTimeline}>Init Timeline</button>
      <button onClick={playTimeline} style={{ marginLeft: 5 }}>Play</button>
      <button onClick={pauseTimeline} style={{ marginLeft: 5 }}>Pause</button>
      <button onClick={reverseTimeline} style={{ marginLeft: 5 }}>Reverse</button>
      <button onClick={resetTimeline} style={{ marginLeft: 5 }}>Reset</button>

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
