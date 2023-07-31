import React, { useState } from 'react';
import MensHome from './Bats';
import ItemBody from '../item/Body/body';

const Controller = ({pushToCart,component}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCheckout = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      {selectedItem ? (
        <ItemBody item={selectedItem} pushToCart={pushToCart}/>
      ) : (
        <MensHome handleCheckout={handleCheckout} component={component} />
      )}
    </div>
  );
};

export default Controller;
