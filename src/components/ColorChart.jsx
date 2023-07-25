import { csv } from "d3";
import { useEffect, useState } from "react";

function ColorChart() {
  const csvUrl =
    "https://gist.github.com/curran/b236990081a24761f7000567094914e0";

  const [data, setData] = useState(null);
  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  if (!data) {
    return <pre> "Loading.."</pre>;
  }

  console.log(data[0]);

  return (
    <pre>
      {data.map((d) => (
        <div style={{ backgroundColor: d.color }} />
      ))}
    </pre>
  );
}

export default ColorChart;
