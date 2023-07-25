import "./App.css";
import * as d3 from "d3";
import DynamicChart from "./components/DynamicChart";
import SmileFace from "./components/SmileFace";
import ColorChart from "./components/ColorChart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <DynamicChart /> */}
        {/* <SmileFace /> */}
        <ColorChart />
      </header>
    </div>
  );
}

export default App;
