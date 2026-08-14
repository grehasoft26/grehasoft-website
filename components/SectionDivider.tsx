"use client";

type DividerType =
  | "wave"
  | "waveReverse"
  | "diagonal"
  | "diagonalReverse"
  | "curve";

interface SectionDividerProps {
  type?: DividerType;
  color?: string;
  height?: number;
  className?: string;
}

export default function SectionDivider({
  type = "wave",
  color = "#ffffff",
  height = 80,
  className = "",
}: SectionDividerProps) {
  const getPath = () => {
    switch (type) {
      case "wave":
        return (
          <path
            d="M0,30 C180,90 360,0 540,35 C720,70 900,20 1080,40 C1260,60 1440,10 1600,35 L1600,100 L0,100 Z"
            fill={color}
          />
        );

      case "waveReverse":
        return (
          <path
            d="M0,70 C180,10 360,100 540,65 C720,30 900,80 1080,60 C1260,40 1440,90 1600,65 L1600,0 L0,0 Z"
            fill={color}
          />
        );

      case "diagonal":
        return (
          <path
            d="M0,100 L1600,0 L1600,100 L0,100 Z"
            fill={color}
          />
        );

      case "diagonalReverse":
        return (
          <path
            d="M0,0 L1600,100 L1600,100 L0,100 Z"
            fill={color}
          />
        );

      case "curve":
        return (
          <path
            d="M0,70 Q800,-20 1600,70 L1600,100 L0,100 Z"
            fill={color}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`absolute bottom-0 left-0 w-full overflow-hidden leading-[0] ${className}`}
      style={{ height }}
    >
      <svg
        className="absolute bottom-0 left-0 block w-full"
        viewBox="0 0 1600 100"
        preserveAspectRatio="none"
        style={{ height: "100%" }}
      >
        {getPath()}
      </svg>
    </div>
  );
}