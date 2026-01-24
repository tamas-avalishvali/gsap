import gsap from "gsap";
import { useRef } from "react";

function FixGlitch() {
  const boxRef = useRef(null);

  const runAnimation = () => {
    /////////////////////////////
    // Option 1: from
    // Animate FROM scale 2 to current scale (avoids glitch)
    // gsap.from(boxRef.current, {
    //   scale: 2,
    //   duration: 2,
    // });

    /////////////////////////////
    // Option 2: fromTo
    // Animate FROM a specific value TO a specific value
    // Using fromTo can cause glitch if the element was already scaled
    gsap.fromTo(
      boxRef.current,
      {
        scale: 2, // start value
      },
      {
        scale: 1, // end value
        duration: 2,
      },
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <div
        onMouseEnter={runAnimation}
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

export default FixGlitch;
