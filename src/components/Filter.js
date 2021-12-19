import React from "react";

function Filter({ onCategoryChange, selectedCategory, onSearchChange, search }) {
// function Filter({ onChange,  filterer }) {

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search} />
      {/* <input type="text" name="search" placeholder="Search..." onChange={onChange} value={filterer.search} /> */}
      <select name="filter" onChange={onCategoryChange} value={selectedCategory}>
      {/* <select name="filter" onChange={onChange} value={filterer.filter}> */}
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;