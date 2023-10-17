import React, { useContext } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import MealContext from './store/meal-context';

function App() {
  const { cartOpenStatus } = useContext(MealContext);

  return (
    <React.Fragment>
      {cartOpenStatus ? <Cart /> : ''}
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
