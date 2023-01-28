import './App.css';
import { Counter } from "./components/Counter-UseState";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Práctica 02 - React</h1>
        <Counter className="Boton" initialValue={0} />
        {/* <Counter initialValue={100} /> */}
      </header>
    </div>
  );
}

export default App;
