function Student({
  id = null,
  name = "",
  city = "",
  work = "",
  mark = null,
}) {
  return (
    <>
      <div className="card">
        <div className="id">Student Id : {id}</div>
        <div className="name">Student Name :{name}</div>
        <div className="city">
          Student Native :{city || "City not avaiable"}
        </div>
        <div className="work">Occupation :{work}</div>
        <div className="mark">Mark :{mark}</div>
      </div>
    </>
  );
}
export default Student;
