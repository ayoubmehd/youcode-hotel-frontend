import { Routes, Route} from "react-router-dom";
import Login from "./Views/Login";
import './App.css';

import AppLayout from "./Components/AppLayout";

import routes from "./routes";


function App() {


  return (
    <>
      <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/" element={<AppLayout />}>
            {
              routes
                .map(({ path, element }) => <Route path={path} element={element} key={path} />) // nested routes
            }

         </Route>
      </Routes>
    </>
  );
}

export default App;
