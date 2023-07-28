import {
  select,
  line,
  curveCardinal,
  axisBottom,
  scaleLinear,
  axisRight,
  scaleBand,
} from "d3";
import { useEffect, useRef, useState } from "react";

function BarChart() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleBand().domain([0, 150]).range([150, 0]);
    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    // svg
    //   .selectAll("circle")
    //   .data(data)
    //   .join("circle")
    //   .attr("r", (value) => value)
    //   .attr("cx", (value) => value)
    //   .attr("cy", (value) => value)
    //   .attr("stroke", "red");

    const xAxis = axisBottom(xScale).ticks(data.length);
    const yAxis = axisRight(yScale);

    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (value, index) => xScale(index))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", 50);
  }, [data]);
  return (
    <>
      <svg ref={svgRef} overflow="visible">
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.map((value) => value < 35))}>
        Filter data
      </button>
    </>
  );
}

export default BarChart;
