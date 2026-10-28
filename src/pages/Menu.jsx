import { useState } from 'react';
import FoodCard from '../components/FoodCard';
import { foods } from '../data/foods';

export default function Menu({ addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Burger", "Pizza", "Chicken", "Pasta", "Drinks", "Nachos", "Meat Box"];

  
  const filteredFoods = foods.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || food.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h2>Explore Our Menu</h2>
      <br />
      
      <div className="filter-container">
        <input 
          type="text" 
          placeholder="Search your favorite food..." 
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <div className="category-buttons">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`cat-btn ${category === cat ? 'active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="food-grid">
        {filteredFoods.length > 0 ? (
          filteredFoods.map(food => (
            <FoodCard key={food.id} food={food} addToCart={addToCart} />
          ))
        ) : (
          <p>No foods found matching your search!</p>
        )}
      </div>
    </div>
  );
}