import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout({ clearCart }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in all required fields!");
      return;
    }
    clearCart(); 
    navigate('/order-success');
  };

  return (
    <div className="container">
      <form className="checkout-form" onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <h2>Checkout (Cash on Delivery)</h2>
        <br />
        <div className="form-group" style={{ marginBottom: '1.2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '5px' }}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '1.2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone Number</label>
          <input 
            type="text" 
            placeholder="Enter phone number" 
            style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '5px' }}
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '1.2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Delivery Address</label>
          <textarea 
            placeholder="House, Road, Area" 
            style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '5px' }}
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '1.2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>City</label>
          <input 
            type="text" 
            placeholder="Dhaka" 
            style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '5px' }}
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '1.2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Payment Method</label>
          <input type="text" value="Cash on Delivery" disabled style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '5px', background: '#f1f1f1' }} />
        </div>
        <button type="submit" className="btn" style={{ width: '100%' }}>Place Order</button>
      </form>
    </div>
  );
}