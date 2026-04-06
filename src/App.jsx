import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import CreateEmployee from "./components/CreateEmployee";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/createEmployee" element={<CreateEmployee/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
