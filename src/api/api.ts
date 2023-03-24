import axios from "axios";
import { Employee } from "../Types/constants";

export const getEmployees = async () => {
  const res = await axios.get("http://localhost:8080/employees");
  return res.data;
};

export const postEmployees = async (empData: Employee) => {
  const res = await axios.post("http://localhost:8080/employees", empData);
  return res.data;
};
