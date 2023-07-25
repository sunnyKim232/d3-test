import { useEffect, useState, useRef } from "react";
import * as d3 from "d3";

function DynamicChart() {
  const initialData = [
    {
      name: "Car",
      value: 10,
    },
    {
      name: "Food",
      value: 3,
    },
    {
      name: "Telephone",
      value: 9,
    },
    {
      name: "Electricity",
      value: 7,
    },
    {
      name: "Cinema",
      value: 7,
    },
  ];

  const height = 150;
  const width = 500;
  const padding = 20;
  const maxValue = 20;

  const newData = () =>
    initialData.map((d) => {
      d.value = Math.floor(Math.random() * (maxValue + 1));
      return d;
    });
  const [chartData, setChartData] = useState(initialData);
  const svgRef = useRef();

  useEffect(() => {
    // X scale
    const xScale = d3
      .scalePoint()
      .domain(initialData.map(({ name }) => name))
      .range([0 + padding, width - padding]);

    // Y scale

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(chartData, function (d) {
          return d.value;
        }),
      ])
      .range([height - padding, 0 + padding]);

    // draw lines

    const line = d3
      .line()
      .x((d) => xScale(d.name))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX);

    d3.select(svgRef.current)
      .select("path")
      .attr("d", (value) => line(chartData))
      .attr("fill", "none")
      .attr("stroke", "white");

    // setup x, y axis
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // and draw x, y axis

    d3.select("#xaxis").remove();
    d3.select(svgRef.current)
      .append("g")
      .attr("transform", `translate(0,${height - padding})`)
      .attr("id", "xaxis")
      .call(xAxis);

    d3.select("#yaxis").remove();
    d3.select(svgRef.current)
      .append("g")
      .attr("transform", `translate(${padding},0)`)
      .attr("id", "yaxis")
      .call(yAxis);
  }, [chartData]);
  return (
    <>
      <svg id="chart" ref={svgRef} viewBox="0 0 500 150">
        <path d="" fill="none" stroke="white" strokeWidth="5" />
      </svg>
      <p>
        <button type="button" onClick={() => setChartData(newData())}>
          Chart Data --> {JSON.stringify(chartData)}
        </button>
      </p>
    </>
  );
}

export default DynamicChart;
