import "./App.css";
import Login from "./pages/Login/Login";
import WelCome from "./components/WelCome";
import { Routes, Route } from "react-router-dom";
import EmployeList from "./pages/EmployeeList/EmployeList";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import Protectd from "./pages/Protected/Protectd";
import EditEmployee from "./pages/EditEmploye/EditEmployee";
import { useState, useEffect } from "react";
import AppContext from "./components/AppCoontext";
import { getEmployeeList } from "./api/api";

function App() {
  const[editEmployee, setEditEmployee]=useState({});
  const [employee, setEmployee] = useState([]);
  const jwtToken = localStorage.getItem("token");

  useEffect(() => {
    if (jwtToken) {
      getEmployeList();
    }
  }, []);

  const getEmployeList = () => {
    getEmployeeList().then((res) => {
      console.log(employee,res)
      setEmployee(res.data.data);
    });
  };
  
  return (
    <div className="relative w-[100%] h-[96vh] font-Roboto">
      <AppContext.Provider  value={{employee,editEmployee,setEditEmployee}}>
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
        <Route
          path="/edit-employee"
          element={<Protectd Component={EditEmployee} />}
        />
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
