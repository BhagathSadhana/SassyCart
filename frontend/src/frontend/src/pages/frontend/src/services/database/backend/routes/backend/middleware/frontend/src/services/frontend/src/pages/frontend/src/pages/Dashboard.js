import React from "react";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  const data = {
    labels: ["Skincare", "Makeup", "Haircare"],
    datasets: [
      { label: "Products Sold", data: [50, 70, 30], backgroundColor: "rgba(255,99,132,0.6)" }
    ]
  };

  return (
    <div>
      <h2>Sales Dashboard</h2>
      <Bar data={data} />
    </div>
  );
};

export default Dashboard;
