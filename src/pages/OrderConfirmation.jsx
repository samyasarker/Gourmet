
import { Link } from 'react-router-dom';

export default function OrderConfirmation() {
  

  return (
    <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <div style={{ fontSize: '4rem', color: '#2ed573', marginBottom: '1rem' }}></div>
      <h2>Order Placed Successfully!</h2>
      <br />
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  );
}