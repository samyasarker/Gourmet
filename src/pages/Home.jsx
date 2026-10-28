import FoodCard from '../components/FoodCard';
import { foods } from '../data/foods';

export default function Home({ addToCart }) {
  return (
    <div>
      <header className="hero">
        <h1>Delicious Food</h1>
        <p>Fresh | Fast | Delicious</p>
      </header>

      <div className="container">
        <h2>Popular Foods</h2>
        <div className="food-grid">
          {foods.map(food => (
            <FoodCard key={food.id} food={food} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}