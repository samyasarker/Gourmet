export default function FoodCard({ food, addToCart }) {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <div className="food-card-body">
        <h3>{food.name}</h3>
        <p> Rating: {food.rating} / 5</p>
        <div className="price-row">
          <span>Tk: {food.price}</span>
          <button 
            className="btn" 
            style={{ margin: 0, padding: '0.4rem 0.8rem' }}
            onClick={() => addToCart(food)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}