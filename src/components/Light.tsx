import { FunctionComponent } from "react";

export type LightType = {
  className?: string;
};

const Light: FunctionComponent<LightType> = ({ className = "" }) => {
  const gridPattern = [
    "11111100011101",  
    "10101100111111",  
    "11111100100110",  
    "11001001111111",  
    "11100110000000",  
    "11100010000000",  
    "11111111000000",  
    "10011111000000",  
    "11011011000000",  
    "11111111000000",  
    "11010011000000",  
    "11000111000000",  
  ];

  const lightGreenCells = [
    { row: 1, col: 5 }, 
    { row: 1, col: 6 }, 
    { row: 1, col: 12 }, 
    { row: 1, col: 13 }, 
    { row: 2, col: 1 }, 
    { row: 3, col: 9 }, 
    { row: 3, col: 10 },
    { row: 4, col: 3 }, 
    { row: 4, col: 5 }, 
    { row: 7, col: 6 }, 
    { row: 7, col: 7 },
  ];

  return (
    <div
      className={`!m-[0] absolute top-[-40px] left-[-4px] flex flex-row items-start justify-start z-[1] ${className}`}
    >
      <div className="grid grid-cols-[repeat(14,6px)] gap-[6px] mix-blend-normal">
        {gridPattern.map((row, rowIndex) =>
          row.split("").map((cell, cellIndex) => {
            const isLightGreen = lightGreenCells.some(
              (pos) => pos.row === rowIndex && pos.col === cellIndex
            );
            return (
              <div
                key={`${rowIndex}-${cellIndex}`}
                className={`h-[6px] w-[6px] ${
                  isLightGreen ? "animate-light-on-off bg-[#00FF00]" : cell === "1" ? "bg-[#171717]" : ""
                }`}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Light;
