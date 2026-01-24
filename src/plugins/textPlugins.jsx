import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useRef } from "react";

function TextPlugins() {
  const textRef = useRef(null);
  gsap.registerPlugin(TextPlugin);

  const handleRun = () => {
    gsap.to(textRef.current, {
      duration: 3,
      text: "GSAP TextPlugin is awesome!",
      ease: "power1.inOut",
      color: "#ff0000",
    });
  };
  return (
    <div>
      <button onClick={handleRun}>Run</button>
      <p ref={textRef} />
    </div>
  );
}

export default TextPlugins;
