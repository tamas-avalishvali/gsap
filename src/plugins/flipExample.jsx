
import { Flip } from "gsap/Flip";
import gsap from "gsap";
import { useEffect, useRef } from "react";

gsap.registerPlugin(Flip);

function FlipExample() {
  const box = useRef(null);

  useEffect(() => {
    const state = Flip.getState(box.current);

    box.current.style.width = "300px";
    box.current.style.height = "300px";

    Flip.from(state, {
      duration: 1,
      absolute: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="container bg-amber-200 w-full h-screen">
      <div style={{ width: 200, height: 200 }} className="bg-blue-700" />
      <div
        ref={box}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Box 1
      </div>
      <div style={{ width: 400, height: 200, backgroundColor: "green" }} />
    </div>
  );
}

export default FlipExample;
