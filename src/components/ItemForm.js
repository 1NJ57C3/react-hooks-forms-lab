import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState ({ name: "", category: "Produce" })
  
  function handleChange(e){
    const key = e.target.name;
    const value = e.target.value;

    setFormData( { ...formData, [key]: value } );
  }

  function handleSubmit(e){
    e.preventDefault();
    const newItem = { id: uuid(), ...formData };
    onItemFormSubmit(newItem);
    setFormData({name: "", category: "Produce"})
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value={formData.category} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
