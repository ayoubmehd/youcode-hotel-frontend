import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import routes from "./routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <nav>
          <Link to="/">Home</Link>
          {' '}
          <Link to="/about">About</Link>
        </nav>
      </header>
      <div>
        <Routes>
          {
            routes
              .map(({ path, element }) => <Route path={path} element={element} />)
          }
        </Routes>
      </div>
    </div>
  );
}

export default App;
