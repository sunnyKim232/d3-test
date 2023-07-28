import "./App.css";
import * as d3 from "d3";
import DynamicChart from "./components/DynamicChart";
import SmileFace from "./components/SmileFace";
import CurvedChart from "./components/CurvedChart";
import BarChart from "./components/BarChart";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <header>
        {/* <DynamicChart /> */}
        {/* <SmileFace /> */}
        {/* <CurvedChart /> */}
        <BarChart />
      </header>
    </div>
  );
}

export default App;
