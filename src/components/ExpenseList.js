import React from "react";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div>
      <h2>Expenses</h2>
      {expenses.map((e) => (
        <div key={e.id} className="card">
          <p>{e.title} - ₹{e.amount}</p>
          <p>{e.category} | {e.date}</p>
          <button onClick={() => deleteExpense(e.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;

