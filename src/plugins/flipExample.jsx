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
      <div
        style={{
          alignItems: "center",
          backgroundColor: "blue",
          display: "flex",
          height: "200px",
          justifyContent: "center",
          width: "200px",
        }}
      >
        Box 1
      </div>
      <div
        ref={box}
        style={{
          alignItems: "center",
          backgroundColor: "red",
          display: "flex",
          height: "200px",
          justifyContent: "center",
          width: "200px",
        }}
      >
        Box 2
      </div>
      <div
        style={{
          alignItems: "center",
          backgroundColor: "green",
          display: "flex",
          height: "200px",
          justifyContent: "center",
          width: "200px",
        }}
      >
        Box 3
      </div>
    </div>
  );
}

export default FlipExample;
