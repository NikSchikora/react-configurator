import "./App.css";
import ConfigPanel from "./components/config/ConfigPanel";
import TopBar from "./components/ui/TopBar";

function App() {
  return (
    <div className="wrapper">
      <TopBar />
      <div class="container mt-5">
        <h1 class="is-size-1">Electric Car Configurator</h1>
      </div>
      <ConfigPanel />
    </div>
  );
}

export default App;
