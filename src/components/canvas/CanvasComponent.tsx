import React from "react";
import mapBackground from "@public/images/map_background.png";
import useCanvas from "@/hooks/useCanvas/useCanvas";

const WIDTH = 1000;
const HEIGHT = 700;

const CanvasComponent = () => {
  const canvasRef = useCanvas((canvas) => {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.background = `url(${mapBackground})`;
  });

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CanvasComponent;
