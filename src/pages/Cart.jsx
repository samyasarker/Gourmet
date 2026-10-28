import { Link } from 'react-router-dom';

export default function Cart({ cart, updateQuantity, removeFromCart }) {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const delivery = subtotal > 0 ? 60 : 0;
  const total = subtotal + delivery;

  if (cart.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Your Cart is Empty </h2>
        <br />
        <Link to="/menu" className="btn">Go to Menu</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <br />
      <div className="cart-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'white', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              <div>
                <h4>{item.name}</h4>
                <p>৳{item.price} x {item.quantity} = ৳{item.price * item.quantity}</p>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button className="btn" style={{ padding: '0.2rem 0.6rem' }} onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button className="btn" style={{ padding: '0.2rem 0.6rem' }} onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button className="btn" style={{ background: '#dcdeff', padding: '0.2rem 0.6rem' }} onClick={() => removeFromCart(item.id)}>❌</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary" style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', height: 'fit-content' }}>
          <h3>Order Summary</h3>
          <hr style={{ margin: '1rem 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span>Subtotal</span>
            <span>৳{subtotal}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span>Delivery Fee</span>
            <span>৳{delivery}</span>
          </div>
          <hr style={{ margin: '1rem 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 'bold' }}>
            <span>Total</span>
            <span>৳{total}</span>
          </div>
            <Link to="/checkout" className="btn" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Proceed to Checkout</Link>        </div>
      </div>
    </div>
  );
}