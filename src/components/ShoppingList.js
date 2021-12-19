import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchBar, setSearchBar] = useState("");
  // const [filterer, setFilterer] = useState( { filter: "All", search: "" } );
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function handleSearch(event) {
    setSearchBar(event.target.value);
  }

  // function handleChange(event) {
  //   const key = (event.target.name);
  //   let value = (event.target.value);

  //   setFilterer( {...filterer, [key]: value} );
  // }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" &&
      item.name.toLowerCase().includes(searchBar.toLowerCase())
    // if (filterer.filter === "All"  &&  item.name.toLowerCase().includes(filterer.search.toLowerCase())
    ) return true; /* Personal Note: "One-liner" if statements don't appear to require braces? */

    return item.category === selectedCategory;
    // return item.category === filterer.filter;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} onSearchChange={handleSearch} search={searchBar} />
      {/* <Filter onChange={handleChange} filterer={filterer} /> */}
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
