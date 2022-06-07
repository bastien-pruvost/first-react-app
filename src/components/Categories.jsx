import { plantList } from '../data/plantList.js';

const Categories = ({ selectedCategory, updateSelectedCategory }) => {
  const categoriesArray = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  const updateCategory = (category) => {
    if (category === 'all') {
      updateSelectedCategory(['classique', 'extérieur', 'plante grasse']);
    } else {
      updateSelectedCategory([category]);
    }
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
