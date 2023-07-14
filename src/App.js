import logo from "./logo.svg";
import "./App.css";
import Chart from "./chart";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Chart using only React.js and CSS3</h1>
      </header>
      <Chart />
      <p className="border">name</p>
    </div>
  );
}

export default App;
