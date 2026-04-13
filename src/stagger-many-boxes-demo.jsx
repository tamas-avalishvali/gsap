import { useRef, useState } from "react";
import gsap from "gsap";

function TitanicMusicGrid() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const tlRef = useRef(null);
  const containerRef = useRef(null);
  const audioRef = useRef(null);
  const BPM = 72;
  const beat = 60 / BPM;

  const START_OFFSET = 0.2;

  const sequence = [
    { note: "E", beats: 0.4 },
    { note: "F#", beats: 0.5 },
    { note: "G", beats: 2.2 },

    { note: "G#", beats: 0.6 },
    { note: "A", beats: 0.5 },
    { note: "G", beats: 1.8 },

    { note: "E", beats: 0.5 },
    { note: "D", beats: 0.8 },
    { note: "F#", beats: 2 },
    { note: "F", beats: 2 },

    { note: "G", beats: 0.6 },
    { note: "A", beats: 0.6 },
    { note: "G", beats: 2 },

    { note: "G#", beats: 1 },
    { note: "F#", beats: 1.8 },

    { note: "E", beats: 1 },
    { note: "D", beats: 1.3 },
    { note: "E", beats: 1.5 },
    { note: "F#", beats: 2.5 },
  ];

  const noteColors = {
    C: "#ef4444",
    D: "#f97316",
    E: "#fde047",
    F: "#4ade80",
    "F#": "#34d399",
    G: "#60a5fa",
    "G#": "#4293f6",
    A: "#a78bfa",
    B: "#f472b6",
  };

  const handlePlay = () => {
    if (!tlRef.current) {
      const boxes = containerRef.current.querySelectorAll(".box");

      const tl = gsap.timeline();
      tlRef.current = tl;

      let time = START_OFFSET;

      sequence.forEach((item, i) => {
        const duration = item.beats * beat;

        tl.to(
          boxes[i],
          {
            backgroundColor: noteColors[item.note],
            scale: 1.25,
            boxShadow: `0 0 25px ${noteColors[item.note]}`,
            duration: 0.12,
            ease: "power2.out",
            onStart: () => (boxes[i].innerText = item.note),
          },
          time,
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
          time + duration - 0.25,
        );

        time += duration;
      });

      // 🎧 audio
      const audio = new Audio("/titanic.mp3");
      audioRef.current = audio;
      audio.play().catch(() => {});

      setIsPlaying(true);
      setIsPaused(false);
      tl.play();
      return;
    }

    // 🔁 if timeline already exists → resume
    handleResume();
  };
  const handlePause = () => {
    tlRef.current?.pause();
    audioRef.current?.pause();

    setIsPaused(true);
    setIsPlaying(false);
  };
  const handleResume = () => {
    tlRef.current?.play();
    audioRef.current?.play();

    setIsPaused(false);
    setIsPlaying(true);
  };
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
      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <button
          onClick={() => {
            if (!tlRef.current) return handlePlay();
            if (isPlaying) return handlePause();
            handleResume();
          }}
          style={{
            position: "relative",
            width: 110,
            height: 110,
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            background: isPlaying
              ? "linear-gradient(145deg, #1f2937, #0f172a)"
              : "radial-gradient(circle at 30% 30%, #38bdf8, #6366f1, #0f172a)",
            color: "white",
            fontSize: 16,
            fontWeight: "600",
            letterSpacing: 1,
            boxShadow: isPlaying
              ? "0 0 0 rgba(0,0,0,0)"
              : "0 20px 60px rgba(56,189,248,0.35)",
            transition: "all 0.3s ease",
            transform: isPlaying ? "scale(0.95)" : "scale(1)",
            overflow: "hidden",
          }}
        >
          {/* rotating glow ring */}
          <span
            style={{
              position: "absolute",
              inset: -10,
              borderRadius: "50%",
              background:
                "conic-gradient(from 0deg, #38bdf8, #6366f1, #a78bfa, #38bdf8)",
              filter: "blur(12px)",
              animation: "spin 3s linear infinite",
            }}
          />

          {/* inner label */}
          <span style={{ position: "relative", zIndex: 2 }}>
            {!tlRef.current ? "Play" : isPlaying ? "Pause" : "Resume"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default TitanicMusicGrid;
