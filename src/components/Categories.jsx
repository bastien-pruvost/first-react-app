import { plantList } from '../data/plantList.js';

const Categories = ({ setSelectedCategory }) => {
  const categoriesArray = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  const updateCategory = (category) => {
    if (category === 'all')
      setSelectedCategory(['classique', 'extérieur', 'plante grasse']);
    else setSelectedCategory([category]);
  };

  return (
    <select onChange={(event) => updateCategory(event.target.value)}>
      <option value='all'>Toutes</option>
      {categoriesArray.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Categories;
