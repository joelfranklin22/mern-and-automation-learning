import { useState, useMemo, useCallback, memo } from "react";

function Callback() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "joel", role: "full stack", department: "IT" },
    { id: 2, name: "Nancy", role: "Software Developer", department: "IT" },
    { id: 3, name: "John", role: "Backend Developer", department: "Sales" },
    { id: 4, name: "April", role: "Backend Developer", department: "Sales" },
  ]);

  const [value, setValue] = useState("");
  const [department, setDepartment] = useState("All");

  const handleDelete = useCallback((id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  }, []);

  const filteredData = useMemo(() => {
    return employees
      .filter((emp) =>
        department === "All" ? true : emp.department === department,
      )
      .filter((emp) => emp.name.toLowerCase().includes(value.toLowerCase()));
  }, [employees, value, department]);

  return (
    <>
      <input
        type="text"
        className="w-25 card-control m-4"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <select
        onChange={(e) => setDepartment(e.target.value)}
        className="form-select w-25 m-4"
        value={department}
      >
        <option value="All">Select the Department</option>
        <option value="IT">IT</option>
        <option value="Sales">Sales</option>
      </select>

      <div className="container m-4 w-25">
        {filteredData.map((emp) => (
          <div className="card mb-4 text-center" key={emp.id}>
            <h2>{emp.name}</h2>
            <p>{emp.role}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(emp.id)}
            >
              Delete User
            </button>
          </div>
        ))}
      </div>
      <EmployeeCard emp={employees} onDelete={handleDelete} />
    </>
  );
}
const EmployeeCard = memo(({ emp, onDelete }) => {
  return (
    <>
      <div className="card">
        <h2>{emp.name}</h2>
        <p>{emp.role}</p>
        <button className="btn btn-danger" onClick={() => onDelete(emp.id)}>
          Delete
        </button>
      </div>
    </>
  );
});

export default Callback;
