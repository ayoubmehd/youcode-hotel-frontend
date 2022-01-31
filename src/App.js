import Sidebar from "./Components/Sidebar";
import "./App.css";

import Routes from "./routes";

function App() {
  return (
    <div className="">
      <header className="App-header"></header>
      <div className="flex">
        <Sidebar />
        <main className="flex w-full p-8">
          <Routes />
        </main>
      </div>
    </div>
  );
}

export default App;
