import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Route>
        <Routes />

        <Routes />
      </Route>
    </div>
  );
}

export default App;
