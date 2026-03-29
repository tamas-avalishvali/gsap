import { useEffect, useRef } from "react";
import gsap from "gsap";

function TitanicMusicGrid() {
  const containerRef = useRef(null);
  const audioRef = useRef(null);
  const BPM = 72;
  const beat = 60 / BPM;

  const START_OFFSET = 0.3;

  const sequence = [
    { note: "E", beats: 0.9 },
    { note: "F#", beats: 0.9 },
    { note: "G", beats: 1.8 },

    { note: "A", beats: 0.9 },
    { note: "G", beats: 0.9 },
    { note: "F#", beats: 1.8 },

    { note: "E", beats: 0.9 },
    { note: "D", beats: 0.9 },
    { note: "E", beats: 1.8 },

    { note: "F#", beats: 0.9 },
    { note: "G", beats: 0.9 },
    { note: "A", beats: 2.5 },

    { note: "G", beats: 1 },
    { note: "F#", beats: 1.8 },

    { note: "E", beats: 1 },
    { note: "D", beats: 1 },
    { note: "E", beats: 2.5 },
  ];

  const noteColors = {
    C: "#ef4444",
    D: "#f97316",
    E: "#fde047",
    F: "#4ade80",
    "F#": "#34d399",
    G: "#60a5fa",
    A: "#a78bfa",
    B: "#f472b6",
  };

  useEffect(() => {
    const boxes = containerRef.current.querySelectorAll(".box");

    const tl = gsap.timeline({ paused: true });

    let time = START_OFFSET;

    sequence.forEach((item, i) => {
      const duration = item.beats * beat;

      // ✨ glow + pop
      tl.to(
        boxes[i],
        {
          backgroundColor: noteColors[item.note],
          scale: 1.25,
          boxShadow: `0 0 20px ${noteColors[item.note]}`,
          duration: 0.12,
          ease: "power2.out",
          onStart: () => {
            boxes[i].innerText = item.note;
          },
        },
        time
      );

      tl.to(
        boxes[i],
        {
          backgroundColor: "#0f172a",
          scale: 1,
          boxShadow: "0 0 0px transparent",
          duration: 0.25,
          ease: "power2.inOut",
        },
        time + duration - 0.25
      );

      time += duration;
    });

   // 🎧 audio (muted autoplay allowed)
    const audio = new Audio("/titanic.mp3");
    audio.muted = true;
    audio.play().catch(() => {});
    audioRef.current = audio;

    tl.play();

    const enableSound = () => {
      audio.muted = false;
      audio.play();
      window.removeEventListener("click", enableSound);
    };

    window.addEventListener("click", enableSound);

  }, []);

  return (
    <div
      style={{
        padding: 40,
        background: "radial-gradient(circle at center, #020617, #000)",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: 30,
          fontSize: 28,
          letterSpacing: 1,
        }}
      >
        Titanic Theme Visualizer 🎻
      </h2>

      <div
        ref={containerRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 70px)",
          gap: 14,
          justifyContent: "center",
        }}
      >
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className="box"
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#0f172a",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.05)",
              transition: "all 0.2s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default TitanicMusicGrid;