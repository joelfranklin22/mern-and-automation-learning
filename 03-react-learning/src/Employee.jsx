<<<<<<< HEAD
import { useRef, useState } from "react";

function Employee() {
  const data = [
    {
      id: 1,
      name: "Joel",
      role: "Full Stack Developer",
      salary: 5000,
    },
    {
      id: 2,
      name: "Arun",
      role: "Frontend Developer",
      salary: 4500,
    },
    {
      id: 3,
      name: "Priya",
      role: "Backend Developer",
      salary: 5500,
    },
    {
      id: 4,
      name: "Karthik",
      role: "UI/UX Designer",
      salary: 4000,
    },
    {
      id: 5,
      name: "Sneha",
      role: "Data Analyst",
      salary: 6000,
    },
    {
      id: 6,
      name: "Vignesh",
      role: "DevOps Engineer",
      salary: 7000,
    },
    {
      id: 7,
      name: "Anitha",
      role: "QA Engineer",
      salary: 4200,
    },
    {
      id: 8,
      name: "Rahul",
      role: "Software Engineer",
      salary: 6500,
    },
    {
      id: 9,
      name: "Meena",
      role: "Mobile App Developer",
      salary: 5800,
    },
    {
      id: 10,
      name: "Suresh",
      role: "Cloud Engineer",
      salary: 8000,
    },
    {
      id: 11,
      name: "Divya",
      role: "Product Manager",
      salary: 9000,
    },
    {
      id: 12,
      name: "Harish",
      role: "Machine Learning Engineer",
      salary: 10000,
    },
    {
      id: 13,
      name: "Keerthana",
      role: "Business Analyst",
      salary: 6200,
    },
    {
      id: 14,
      name: "Ajith",
      role: "Cyber Security Analyst",
      salary: 8500,
    },
    {
      id: 15,
      name: "Nisha",
      role: "Database Administrator",
      salary: 7200,
    },
    {
      id: 16,
      name: "Praveen",
      role: "System Administrator",
      salary: 5300,
    },
    {
      id: 17,
      name: "Lakshmi",
      role: "Technical Writer",
      salary: 4800,
    },
    {
      id: 18,
      name: "Gokul",
      role: "React Developer",
      salary: 6700,
    },
    {
      id: 19,
      name: "Pooja",
      role: "Java Developer",
      salary: 7100,
    },
    {
      id: 20,
      name: "Ramesh",
      role: "AI Engineer",
      salary: 12000,
    },
  ];

  const reference = useRef();

  function call() {
    reference.current.focus();
  }
  const [searchQuery, setSearchQuery] = useState("");
  const [input, setInput] = useState("");
  const studentData = [...data];

  const filteredData = studentData.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <>
      <div className="search">
        <input
          type="text"
          name=""
          ref={reference}
          id=""
          className="p-2  m-3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            setSearchQuery(input);
            call();
          }}
        >
          Search
        </button>
      </div>
      <div className="container mt-4">
        <div className="row g-4">
          {filteredData.length > 0 &&
            filteredData.map((user) => (
              <div className="col-md-4 col-lg-3" key={user.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {user.role}
                    </h6>
                    <p className="card-text">Salary: ₹{user.salary}</p>
                    <button className="btn btn-primary">View Profile</button>
                  </div>
                </div>
              </div>
            ))}
          {filteredData.length < 1 && <h2>No user Found</h2>}
        </div>
=======
import { useContext } from "react";
import { PassProps } from "./PageContext";
import { Link } from "react-router-dom";

function Employee() {
  const { data } = useContext(PassProps);
  return (
    <>

      <h1>Employee details</h1>
      <div className="conatiner w-25">
        {data.map((emp) => (
          <div className="card p-4 m-3" key={emp.id}>
            <h1>{emp.name}</h1>
            <Link className="btn btn-primary" to={`/emp/${emp.id}`}>
              View
            </Link>
          </div>
        ))}
>>>>>>> 2392c35 (Cache save,remove,get with API fetch and localStorage)
      </div>
    </>
  );
}
export default Employee;
