import { useRef } from "react";
import gsap from "gsap";

function Animation() {
  // Default duration for all animations
  gsap.defaults({ duration: 2 });

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  // Timeline reference to control play/pause/reverse/reset
  const tl = gsap.timeline({ paused: true }); // start paused

  // Initialize timeline animations (only once)
  const initTimeline = () => {
    tl.to(box1.current, { x: 300, rotation: 360, scale: 1.5, opacity: 0.7 })
      .to(box2.current, { y: 200, rotation: -180, scale: 1.2, opacity: 0.5 })
      .to(box3.current, { x: 400, rotation: 720, scale: 1.8, opacity: 0.9 });
  };

  const runAnimation = () => {
    ////////////////////////////////
    // SET - set properties immediately
    // gsap.set(box1.current, { x: 0, scale: 1, rotation: 0, opacity: 1 });

    ////////////////////////////////
    // TO - animate to a target value
    // gsap.to(box1.current, { x: 400, scale: 1.5, rotation: 360, opacity: 0.7 });

    ////////////////////////////////
    // FROM - animate from a value to the current position
    // gsap.from(box2.current, { x: 500, scale: 0.5, rotation: 180, opacity: 0 });

    ////////////////////////////////
    // FROMTO - animate from one value to another
    // gsap.fromTo(
    //   box3.current,
    //   { x: 200, scale: 1, rotation: 0 },
    //   { x: 400, scale: 1.8, rotation: 360 }
    // );

    ////////////////////////////////
    // REPEAT, YOYO, and DELAY
    // gsap.to(box1.current, { x: 400, rotation: 360, scale: 1.2, repeat: -1, yoyo: true, delay: 1 });

    ////////////////////////////////
    // EASE - different easing functions
    // gsap.to(box2.current, { x: 400, ease: "back(1.7)" });
    // gsap.to(box3.current, { x: 400, ease: "power2.out" });

    ////////////////////////////////
    // STAGGER - animate multiple elements with delay
    // gsap.to([box1.current, box2.current, box3.current], {
    //   x: 400,
    //   scale: 1.5,
    //   rotation: 360,
    //   opacity: 0.7,
    //   duration: 1.5,
    //   ease: "power2.out",
    //   stagger: {
    //     each: 0.5,
    //     amount: 2,
    //     from: "start",
    //     axis: "x",
    //   },
    // });

    ////////////////////////////////
    // TIMELINE - sequence multiple animations
    initTimeline();
    tl.play(); // play immediately
  };

  // Control functions for timeline
  const playTimeline = () => tl.play();
  const pauseTimeline = () => tl.pause();
  const reverseTimeline = () => tl.reverse();
  const resetTimeline = () => tl.restart();

  return (
    <div style={{ padding: 40 }}>
      <button onClick={runAnimation}>Run Animation</button>
      <button onClick={playTimeline} style={{ marginLeft: 10 }}>Play</button>
      <button onClick={pauseTimeline} style={{ marginLeft: 10 }}>Pause</button>
      <button onClick={reverseTimeline} style={{ marginLeft: 10 }}>Reverse</button>
      <button onClick={resetTimeline} style={{ marginLeft: 10 }}>Reset</button>

      <div
        ref={box1}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#22c55e",
          marginTop: 20,
          borderRadius: 12,
        }}
      />
      <div
        ref={box2}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#ff0000",
          marginTop: 20,
          borderRadius: 12,
        }}
      />
      <div
        ref={box3}
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

export default Animation;
