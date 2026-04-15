import React, { useState, useEffect } from "react";
import ExpenseList from "./components/ExpenseList";
import Filter from "./components/Filter";
import Summary from "./components/Summary";
import ChartView from "./components/ChartView";
import ExpenseForm from "./components/ExpenseForm";
import "./styles.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filters, setFilters] = useState({ search: "", category: "", date: "" });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const filteredExpenses = expenses.filter((e) => {
    return (
      e.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.category ? e.category === filters.category : true) &&
      (filters.date ? e.date === filters.date : true)
    );
  });

  return (
    <div className="container">
      <h1>Smart Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <Filter setFilters={setFilters} />
      <Summary expenses={filteredExpenses} />
      <ChartView expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;