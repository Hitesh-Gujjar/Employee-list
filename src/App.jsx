import "./App.css";
import Login from "./pages/Login/Login";
import WelCome from "./components/WelCome";
import { Routes, Route } from "react-router-dom";
import EmployeList from "./pages/EmployeeList/EmployeList";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import Protectd from "./pages/Protected/Protectd";

function App() {
  return (
    <div className="relative w-[100%] h-[96vh] font-Roboto">
      <Routes>
        <Route path="/" element={<WelCome />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/employee"
          element={<Protectd Component={EmployeList} />}
        />
        <Route
          path="/add-employee"
          element={<Protectd Component={AddEmployee} />}
        />
      </Routes>
    </div>
  );
}

export default App;
