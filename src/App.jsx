import { Routes, Route } from 'react-router-dom';
import routes from './RoutePath';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          {routes.map((route) => {
            const { path, component: Component, isPrivate, role } = route;
            return (
              <Route
                key={path}
                path={path}
                element={
                  isPrivate ? (
                    <PrivateRoute role={role}>
                      <Component />
                    </PrivateRoute>
                  ) : (
                    <Component />
                  )
                }
              />
            );
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
