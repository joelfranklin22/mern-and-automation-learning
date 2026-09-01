import { useContext } from "react";
import { PassProps } from "./PageContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EmployeeDetails() {
  const { data } = useContext(PassProps);
  const { id } = useParams();

  const employee = data.find((emp) => emp.id === Number(id));
  if (!employee) return <h2>Employee not Found</h2>;

  return (
    <>

      <div className="container">
        {
          <div className="card">
            <h1>name:{employee.name}</h1>
            <p>Role:{employee.role}</p>
            <p>Salary:{employee.salary}</p>
          </div>
        }
        <Link to="/password" className="btn btn-danger">
          Sample test
        </Link>
      </div>
    </>
  );
}
export default EmployeeDetails;
