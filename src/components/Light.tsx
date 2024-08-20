import { FunctionComponent } from "react";

export type LightType = {
  className?: string;
};

const Light: FunctionComponent<LightType> = ({ className = "" }) => {
  const gridPattern = [
    "11111100111101",  // First row: 6 lights, 2 gaps, 4 lights
    "10101100111111",  // Second row: alternating lights and gaps, ending with 4 lights
    "11111100100110",  // Third row: 6 lights, 2 gaps, 1 light, 2 gaps
    "11011111111111",  // Fourth row: 4 lights, 2 gaps, 4 lights
    "11111100001100",  // Fifth row: 6 lights, 4 gaps, 2 lights
    "11111100001100",  // Sixth row: 6 lights, 4 gaps, 2 lights
    "11111101100100",  // Seventh row: 6 lights, 2 gaps, 1 light, 2 gaps
    "11111100000000",  // Eighth row: 6 lights, 2 gaps, 4 lights
    "11111110000000",  // Ninth row: 6 lights, 2 gaps, 2 lights
    "11000110000000",  // Tenth row: 2 gaps, 4 lights, 4 gaps, 1 light
    "11111110000000",  // Eleventh row: 6 lights, 4 gaps, 2 lights
  ];

  return (
    <div
      className={`!m-[0] absolute top-[-48px] left-[-41px] flex flex-row items-start justify-start z-[1] ${className}`}
    >
      <div className="grid grid-cols-[repeat(14,6px)] gap-[6px] mix-blend-normal">
        {gridPattern.map((row, rowIndex) =>
          row.split("").map((cell, cellIndex) => (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className={`h-[6px] w-[6px] ${cell === "1" ? "bg-[#171717]" : ""}`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Light;
