import { Link } from 'react-router-dom';

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo"> Foodism</Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/cart" >Cart ({cartCount})</Link></li>
      </ul>
    </nav>
  );
}