
import React from 'react';
import { UserProvider } from './context/UserContext';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ComponentThree from './components/ComponentThree';

const App = () => {
  return (
    <UserProvider>
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
    </UserProvider>
  );
};

export default App;
