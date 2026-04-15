import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [form, setForm] = useState({ title: "", amount: "", category: "Food", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(form);
    setForm({ title: "", amount: "", category: "Food", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      <input type="number" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} required />
      <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Others</option>
      </select>
      <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
      <button>Add</button>
    </form>
  );
};

export default ExpenseForm;
