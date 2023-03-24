import React, { useState } from "react";
import { Employee } from "../Types/constants";
import { postEmployees } from "../api/api";

interface NewEmployeeProps {
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewEmployee = ({ setUpdate }: NewEmployeeProps) => {
  const [emp, setEmp] = useState<Employee>({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: "27.174.245.206",
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setEmp((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await postEmployees(emp);
    setEmp({
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      ip_address: "27.174.245.206",
    });
    setUpdate((prev) => !prev);
  };
  console.log(emp);
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Add New Employee</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleOnChange}
          type='text'
          placeholder='first name'
          name='first_name'
          value={emp.first_name}
        />
        <input
          onChange={handleOnChange}
          type='text'
          placeholder='last name'
          name='last_name'
          value={emp.last_name}
        />
        <input
          onChange={handleOnChange}
          type='email'
          placeholder='email'
          name='email'
          value={emp.email}
        />
        <input
          type='text'
          placeholder='Gender'
          name='gender'
          value={emp.gender}
          onChange={handleOnChange}
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default NewEmployee;
