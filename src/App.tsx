import { useEffect, useState } from "react";
import NewEmployee from "./components/NewEmployee";
import { Employee } from "./Types/constants";
import { getEmployees } from "./api/api";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [update, setUpdate] = useState<boolean>(false);
  useEffect(() => {
    getEmployees()
      .then((res) => {
        setEmployees(res);
      })
      .catch((err) => alert(err));
  }, [update]);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid red" }}>
        <h1>Employees</h1>
        {employees &&
          employees.map((emp, ind) => (
            <div
              style={{
                display: "flex",
                gap: "10px",
                border: "1px solid black",
                flexDirection: "column",
              }}
            >
              <p>{`${emp.first_name} ${emp.last_name}`}</p>
              <p>{emp.email}</p>
              <p>{emp.gender}</p>
              <p>{emp.ip_address}</p>
            </div>
          ))}
      </div>
      <NewEmployee setUpdate={setUpdate} />
    </div>
  );
}

export default App;
