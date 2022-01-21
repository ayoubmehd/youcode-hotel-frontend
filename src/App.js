import { Routes, Route, Link } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import logo from './logo.svg';
import './App.css';

import routes from "./routes";

function App() {
  return (
    <div className="">
      <header className="App-header">

      </header>
      <div className="flex">
        <Sidebar />
        <main className="flex w-full">
          <Routes>
            {
              routes
                .map(({ path, element }) => <Route path={path} element={element} key={path} />)
            }
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
