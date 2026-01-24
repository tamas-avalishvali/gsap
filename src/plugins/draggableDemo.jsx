import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useEffect, useRef } from "react";

function DraggableDemo() {
  // Reference to the container that bounds the draggable area
  const containerRef = useRef(null);

  // Reference to the draggable box
  const boxRef = useRef(null);

  // Store the Draggable instance for later control (enable/disable/kill)
  const draggableInstance = useRef(null);

  // Register the Draggable plugin with GSAP
  gsap.registerPlugin(Draggable);

  useEffect(() => {
    // Create the draggable instance after the DOM has mounted
    // Draggable.create always returns an array even for a single element
    draggableInstance.current = Draggable.create(boxRef.current, {
      type: "x,y",            // Drag along both X and Y axes
      bounds: containerRef.current, // Limit movement inside container
      inertia: true,           // Add momentum when released
      edgeResistance: 0.65,    // How strongly the edges resist dragging (0–1)
      throwProps: true,        // Allow inertia/throw to work (deprecated in GSAP 3, replaced by inertia plugin)
      onDrag: () => {
        console.log("Dragging at:", boxRef.current.style.transform);
      },
      onRelease: () => {
        console.log("Drag released");
      },
    })[0]; // Get the first (and only) instance
  }, []);

  // Optional controls to demonstrate instance usage
  const disableDrag = () => draggableInstance.current.disable();
  const enableDrag = () => draggableInstance.current.enable();
  const resetPosition = () => {
    gsap.to(boxRef.current, { x: 0, y: 0, duration: 0.5 });
  };
  const killDraggable = () => draggableInstance.current.kill();

  return (
    <div style={{ padding: 20 }}>
      {/* Buttons to control draggable instance */}
      <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
        <button onClick={enableDrag}>Enable Drag</button>
        <button onClick={disableDrag}>Disable Drag</button>
        <button onClick={resetPosition}>Reset Position</button>
        <button onClick={killDraggable}>Kill Draggable</button>
      </div>

      {/* Container limits draggable area */}
      <div
        ref={containerRef}
        style={{
          width: 300,
          height: 300,
          border: "2px solid gray",
          position: "relative",
        }}
      >
        {/* Draggable box */}
        <div
          ref={boxRef}
          style={{
            width: 50,
            height: 50,
            backgroundColor: "red",
            borderRadius: 8,
            cursor: "grab",
            position: "absolute", // important for dragging inside bounds
          }}
        />
      </div>
    </div>
  );
}

export default DraggableDemo;
