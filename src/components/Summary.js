import React from "react";

const Summary = ({ expenses }) => {
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  const categoryData = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + Number(e.amount);
    return acc;
  }, {});

  return (
    <div>
      <h2>Total: ₹{total}</h2>
      {Object.keys(categoryData).map((cat) => (
        <p key={cat}>{cat}: ₹{categoryData[cat]}</p>
      ))}
    </div>
  );
};

export default Summary;