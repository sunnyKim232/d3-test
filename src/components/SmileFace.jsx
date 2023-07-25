import { arc } from "d3";

function SmileFace() {
  const width = "960";
  const height = "500";

  const centerX = width / 2;
  const centerY = height / 2;

  const strokeWidth = 20;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 50;

  const mouthArc = arc()
    .innerRadius(80)
    .outerRadius(100)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        <circle
          r={centerY - strokeWidth / 2}
          fill="yellow"
          stroke="black"
          stroke-width={strokeWidth}
        />
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <path d={mouthArc()} />
      </g>
    </svg>
  );
}

export default SmileFace;
