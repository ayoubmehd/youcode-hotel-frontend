import { Route, Link } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import logo from "./logo.svg";
import "./App.css";

import Routes from "./routes";

function App() {
  return (
    <div className="">
      <header className="App-header"></header>
      <div className="flex">
        <Sidebar />
        <main className="flex w-full">
          <Routes />
        </main>
      </div>
    </div>
  );
}

export default App;
