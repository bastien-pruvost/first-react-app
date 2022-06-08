import { useState } from 'react';
import { plantList } from 'data/plantList';
import Categories from 'components/Categories';
import PlantItem from 'components/PlantItem';
import 'styles/ShoppingList.css';

const ShoppingList = ({ cart, updateCart }) => {
  const [selectedCategory, setSelectedCategory] = useState([
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
        { name, price, amount: currentPlantAdded.amount + 1 }
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  };

  return (
    <div className='lmj-shopping-list'>
      <Categories setSelectedCategory={setSelectedCategory} />
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
