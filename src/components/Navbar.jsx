import { NavLink, useNavigate } from 'react-router-dom';
import routes from '../RoutePath';

const Navbar = () => {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem('auth')) || { isLoggedIn: false, role: null };

  const visibleRoutes = routes.filter(route => {
    if (!route.showInNav) return false;
    if (!route.isPrivate) return true;
    return auth.isLoggedIn && route.role === auth.role;
  });

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <ul>
        {visibleRoutes.map(route => (
          <li key={route.path}>
            <NavLink to={route.path} className={({ isActive }) => isActive ? 'active' : ''}>
              {route.label}
            </NavLink>
          </li>
        ))}

        {auth.isLoggedIn ? (
          <li>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
