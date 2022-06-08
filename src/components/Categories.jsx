import { plantList } from 'data/plantList.js';
import 'styles/Categories.css';

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
    <div className='lmj-categories'>
      <select
        className='lmj-categories-select'
        onChange={(event) => updateCategory(event.target.value)}
      >
        <option value='all'>Toutes</option>
        {categoriesArray.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
