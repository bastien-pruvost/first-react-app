import { plantList } from '../data/plantList';
import Categories from './Categories';
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css';
import { useState } from 'react';

const ShoppingList = ({ cart, updateCart }) => {
  const [selectedCategory, updateSelectedCategory] = useState([
    'classique',
    'extérieur',
    'plante grasse'
  ]);

  const addToCart = (name, price) => {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amout: currentPlantAdded.amount + 1 }
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  };

  return (
    <div className='lmj-shopping-list'>
      <Categories
        selectedCategory={selectedCategory}
        updateSelectedCategory={updateSelectedCategory}
      />
      <ul className='lmj-plant-list'>
        {plantList
          .filter((plant) => selectedCategory.includes(plant.category))
          .map(({ id, cover, name, water, light, price }) => (
            <div key={id}>
              <PlantItem
                name={name}
                cover={cover}
                light={light}
                water={water}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
