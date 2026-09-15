import { Routes, Route } from "react-router-dom";

import ThemeBtn from "./ThemeBtn";
import ThemeChange from "./ThemeChange";
import WindowResize from "./WindowResize";
import Employee from "./Employee";
import EmployeeDetails from "./EmployeeDetails";
import Password from "./Password";
import LocalStorageLogin from "./LocalStorageLogin";
import Home from "./Home";

function PageRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LocalStorageLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/theme" element={<ThemeBtn />} />
        <Route path="/page" element={<ThemeChange />} />
        <Route path="/windowSize" element={<WindowResize />} />
        <Route path="/emp" element={<Employee />} />
        <Route path="/emp/:id" element={<EmployeeDetails />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </>
  );
}
export default PageRouter;
