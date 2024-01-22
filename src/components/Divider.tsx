import React from "react";

interface DividerProps {
  direction:
    | "outer-right-to-inner-left"
    | "outer-left-to-inner-right"
    | "inner-right-to-middle"
    | "inner-left-to-middle"
    | "middle-to-inner-right"
    | "middle-to-inner-left"
    | "middle";
  color: string;
  thickness: string;
  height: "small" | "middle" | "large" | "extraLarge";
  dividerStyle: string;
}

const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};

const Divider: React.FC<DividerProps> = ({
  direction,
  color,
  thickness,
  height,
  dividerStyle,
}) => {
  const borderStyle = {
    borderColor: `var(--${color})`,
    borderStyle: `${dividerStyle}`,
  };

  const heightStyle = heightStyles[height];
  const directionStyle = directionStyles[direction];
  const spaceStyle = spaceStyles[direction];
  const widthStyle = widthStyles[direction];

  return (
    <div style={directionStyle} className="relative">
      <div
        className="flex justify-end mb-10 "
        style={{ height: heightStyle?.heights[0], ...spaceStyle }}
      >
        <div
          className="h-full"
          style={{
            ...borderStyle,
            borderRightWidth: thickness,
            borderBottomWidth: thickness,
            width: widthStyle?.widths[0],
          }}
        ></div>
      </div>
      <div
        className="flex justify-end -mt-10"
        style={{ height: heightStyle?.heights[1] }}
      >
        <div
          className="h-full"
          style={{
            ...borderStyle,
            borderLeftWidth: thickness,
            width: widthStyle?.widths[1],
          }}
        ></div>
      </div>
    </div>
  );
};

export default Divider;
