import gsap from "gsap";
import { useEffect, useRef } from "react";

function PositionParameter() {
  const redBoxRef = useRef(null);
  const circleBoxRef = useRef(null);
  const purpleBoxRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    ////////////////////////////////
    // Create timeline once
    // paused: true gives full control over play, pause, reverse
    timelineRef.current = gsap.timeline({ paused: true });

    ////////////////////////////////
    // Step 1
    // First animation starts at the natural timeline position (time = 0)
    timelineRef.current.to(redBoxRef.current, {
      x: 120,
      duration: 0.6,
    });

    ////////////////////////////////
    // Step 2
    // "+=0.7" means:
    // start this animation 0.7s AFTER the previous animation ends
    timelineRef.current.to(
      circleBoxRef.current,
      {
        x: 120,
        duration: 0.6,
      },
      "+=0.7"
    );

    ////////////////////////////////
    // Step 3
    // "<0.1" means:
    // start 0.1s AFTER the START of the previous animation
    timelineRef.current.to(
      purpleBoxRef.current,
      {
        x: 120,
        duration: 0.6,
      },
      "<0.1"
    );
  }, []);

  ////////////////////////////////
  // Timeline controls
  const play = () => timelineRef.current.play();
  const pause = () => timelineRef.current.pause();
  const reverse = () => timelineRef.current.reverse();
  const restart = () => timelineRef.current.restart();

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reverse}>Reverse</button>
        <button onClick={restart}>Restart</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div
          ref={redBoxRef}
          style={{
            width: 100,
            height: 100,
            borderRadius: 12,
            backgroundColor: "#ff0000",
          }}
        />

        <div
          ref={circleBoxRef}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            backgroundColor: "#ffcc00",
          }}
        />

        <div
          ref={purpleBoxRef}
          style={{
            width: 100,
            height: 100,
            borderRadius: 12,
            backgroundColor: "purple",
          }}
        />
      </div>
    </div>
  );
}

export default PositionParameter;
