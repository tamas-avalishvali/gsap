import gsap from "gsap";
import { useEffect, useRef } from "react";

function WordCircleHover() {
  const textRef = useRef(null);
  const circleRef = useRef(null);
  const tlRef = useRef(null);

  const handleMouseEnter = () => {
    // start pulse animation
    tlRef.current.play();
  };

  const handleMouseLeave = () => {
    // stop timeline and reset DOM to initial state
    tlRef.current.pause(0); // reset to progress 0
};

useEffect(() => {
    // create timeline for hover pulse
    gsap.set(circleRef.current, { scale: 1, backgroundColor: "GrayText" });
    gsap.set(textRef.current, { color: "GrayText" });
    tlRef.current = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
    tlRef.current
      .to(circleRef.current, {
        scale: 1.5,
        backgroundColor: "LightGray",
        duration: 0.3,
      })
      .to(textRef.current, {
        color: "LightGray",
        duration: 0.3,
      }, "<");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "center",
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={circleRef}
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
        }}
      />
      <h1
        ref={textRef}
        style={{
          margin: 0,
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        HOME
      </h1>
    </div>
  );
}

export default WordCircleHover;
