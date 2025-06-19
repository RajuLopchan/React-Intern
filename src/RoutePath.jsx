import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';

const routes = [
  // Public routes
  {
    path: '/',
    component: Home,
    label: 'Home',
    isPrivate: false,
    role: null,
    showInNav: true,
  },
  {
    path: '/about',
    component: About,
    label: 'About Us',
    isPrivate: false,
    role: null,
    showInNav: true,
  },
  {
    path: '/contact',
    component: Contact,
    label: 'Contact',
    isPrivate: false,
    role: null,
    showInNav: true,
  },
  {
    path: '/login',
    component: Login,
    label: 'Login',
    isPrivate: false,
    role: null,
    showInNav: false,
  },

  // User-only route
  {
    path: '/user-profile',
    component: UserProfile,
    label: 'User Profile',
    isPrivate: true,
    role: 'user',
    showInNav: true,
  },

  // Admin-only route
  {
    path: '/admin-dashboard',
    component: AdminDashboard,
    label: 'Admin Dashboard',
    isPrivate: true,
    role: 'admin',
    showInNav: true,
  },
];

export default routes;
