import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";

// register plugin once
gsap.registerPlugin(ScrollToPlugin);

function ScrollToPluginDemo() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    // create timeline
    tlRef.current = gsap.timeline({ paused: true });

    tlRef.current
      .to(window, {
        duration: 1,
        scrollTo: section2Ref.current,
        ease: "power2.out",
      })
      .to(window, {
        duration: 1,
        scrollTo: section3Ref.current,
        ease: "power2.out",
      });
  }, []);

  const scrollNext = () => {
    tlRef.current.restart();
  };

  return (
    <div>
      <div style={{ position: "fixed", top: 16, left: 16, zIndex: 10 }}>
        <button onClick={scrollNext}>Scroll Down</button>
      </div>

      <section
        ref={section1Ref}
        style={{ height: "100vh", backgroundColor: "#0f172a", color: "white" }}
      >
        <h1 style={{ padding: 40 }}>Section One</h1>
      </section>

      <section
        ref={section2Ref}
        style={{ height: "100vh", backgroundColor: "#1e293b", color: "white" }}
      >
        <h1 style={{ padding: 40 }}>Section Two</h1>
      </section>

      <section
        ref={section3Ref}
        style={{ height: "100vh", backgroundColor: "#334155", color: "white" }}
      >
        <h1 style={{ padding: 40 }}>Section Three</h1>
      </section>
    </div>
  );
}

export default ScrollToPluginDemo;
