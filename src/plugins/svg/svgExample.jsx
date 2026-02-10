"use client";

/**
 * SVG MASTER REFERENCE
 *
 * This file is a complete SVG learning playground.
 * Each section demonstrates a core SVG concept with
 * inline English explanations for future reference.
 */

export default function SvgExample() {
  return (
    <svg
      width={1000}
      height={1200}
      viewBox="0 0 1000 1200"
      preserveAspectRatio="xMidYMid meet"
      style={{
        border: "1px solid black",
        backgroundColor: "transparent",
      }}
    >
      {/* ======================================================
          DEFINITIONS (defs)
          Used to define reusable elements like gradients,
          patterns, masks, clipPaths, symbols, etc.
         ====================================================== */}
      <defs>
        {/* Linear Gradient – transitions colors in a straight line */}
        <linearGradient id="linearGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="blue" />
        </linearGradient>

        {/* Radial Gradient – colors radiate from a center point */}
        <radialGradient id="radialGrad">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="purple" />
        </radialGradient>

        {/* Pattern – repeats a shape as a fill */}
        <pattern
          id="dotPattern"
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={10} cy={10} r={3} fill="black" />
        </pattern>

        {/* ClipPath – limits visible area (acts like a mask shape) */}
        <clipPath id="circleClip">
          <circle cx={150} cy={550} r={60} />
        </clipPath>

        {/* Mask – controls visibility using luminance */}
        <mask id="fadeMask">
          <rect width="100%" height="100%" fill="white" />
          <circle cx={400} cy={550} r={80} fill="black" />
        </mask>

        {/* Path for textPath */}
        <path id="textCurve" d="M 100 900 C 300 750, 700 1050, 900 900" />
      </defs>

      {/* ======================================================
          BASIC SHAPES
         ====================================================== */}

      {/* Rectangle filled with linear gradient */}
      {/* <rect
        x={50}
        y={50}
        width={300}
        height={120}
        fill="url(#linearGrad)"
      /> */}

      {/* Circle filled with radial gradient */}
      {/* <circle
        cx={500}
        cy={110}
        r={60}
        fill="url(#radialGrad)"
      /> */}

      {/* Ellipse using pattern fill */}
      {/* <ellipse
        cx={800}
        cy={110}
        rx={90}
        ry={50}
        fill="url(#dotPattern)"
      /> */}

      {/* ======================================================
          GROUPING & TRANSFORMS
         ====================================================== */}

      {/* Group – allows transforming multiple elements together */}
      {/* <g transform="translate(100, 250) rotate(10)">
        <rect width={120} height={120} fill="orange" />
        <circle cx={60} cy={60} r={40} fill="red" opacity={0.6} />
      </g> */}

      {/* ======================================================
          STROKE PROPERTIES
         ====================================================== */}

      <line
        x1={400}
        y1={250}
        x2={700}
        y2={250}
        stroke="black"
        strokeWidth={12}
        strokeLinecap="round" /* butt | round | square */
        strokeLinejoin="round" /* miter | round | bevel */
        strokeDasharray="20 10" /* dashed stroke */
      />

      {/* ======================================================
          PATH – COMPLEX SHAPES
         ====================================================== */}

      {/* <path
        d="
          M 100 400
          L 200 400
          L 200 500
          H 350
          V 600
          C 350 750, 50 750, 50 600
          Z
        "
        fill="none"
        stroke="red"
        strokeWidth={3}
        vectorEffect="non-scaling-stroke"
      /> */}

      {/* ======================================================
          CLIP PATH
         ====================================================== */}

      {/* <image
        href="https://via.placeholder.com/300"
        x={50}
        y={500}
        width={300}
        height={200}
        clipPath="url(#circleClip)"
      /> */}

      {/* ======================================================
          MASK
         ====================================================== */}

      {/* <rect
        x={350}
        y={500}
        width={300}
        height={200}
        fill="blue"
        mask="url(#fadeMask)"
      /> */}

      {/* ======================================================
          TEXT
         ====================================================== */}

      {/* Simple SVG text */}
      <text x={50} y={800} fontSize={32} fill="black">
        SVG Text Basics
      </text>

      {/* Text following a path */}
      <text fontSize={28} fill="darkblue">
        <textPath href="#textCurve">
          Text can follow any path using textPath
        </textPath>
      </text>
    </svg>
  );
}
