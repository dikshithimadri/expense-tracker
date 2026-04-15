import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// 🎨 Colors for pie slices
const COLORS = [
  "#ff6b6b",
  "#4ecdc4",
  "#ffe66d",
  "#5f27cd",
  "#1dd1a1",
  "#ff9f43",
  "#54a0ff",
  "#00d2d3",
];

const ChartView = ({ expenses }) => {

  // 🔄 Convert expenses into chart data
  const data = Object.values(
    expenses.reduce((acc, e) => {
      acc[e.category] = acc[e.category] || {
        name: e.category,
        value: 0,
      };
      acc[e.category].value += Number(e.amount);
      return acc;
    }, {})
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>📊 Expense Chart</h2>

      <PieChart width={350} height={350}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={120}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]} // 🎨 Color logic
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ChartView;