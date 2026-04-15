import React from "react";

const Filter = ({ setFilters }) => {
  return (
    <div className="filter">
      <input placeholder="Search" onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))} />
      <select onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}>
        <option value="">All</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Others</option>
      </select>
      <input type="date" onChange={(e) => setFilters((prev) => ({ ...prev, date: e.target.value }))} />
    </div>
  );
};

export default Filter;
