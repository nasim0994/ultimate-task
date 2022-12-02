import { useQuery } from "@tanstack/react-query";
import React from "react";
import logo from "../../Images/logo.png";

const Attendance = () => {
  const { data: employeesData } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch("https://test.nexisltd.com/test", {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
  });

  const demoEmployeesData = [
    {
      date: "01/12/2022",
      name: "Md Nasim Uddin",
      Status: "Present",
    },
    {
      date: "01/12/2022",
      name: "Md Shakib",
      Status: "Absent",
    },
    {
      date: "01/12/2022",
      name: "Md Maruf",
      Status: "Absent",
    },
    {
      date: "01/12/2022",
      name: "Md Rohman",
      Status: "Present",
    },
  ];

  return (
    <div className="pl-14 pt-12">
      <header>
        <img src={logo} alt="" />
      </header>

      <div className="pt-3">
        <h2 className="bg-[#1678CB] w-[440px] h-[72px] mx-auto flex items-center justify-center text-white text-3xl font-semibold rounded-md">
          Attendance information
        </h2>

        <div className="overflow-x-auto w-[80%] mx-auto mt-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Employee Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {demoEmployeesData.map((employee, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{employee.date}</td>
                  <td>{employee.name}</td>
                  <td>{employee.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
