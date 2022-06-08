import CareScale from './CareScale';
import 'styles/PlantItem.css';

const PlantItem = ({ id, cover, name, water, light }) => {
  return (
    <li key={id} className='lmj-plant-item'>
      <img className='lmj-plant-item-cover' src={cover} alt={name} />
      {name}
      <div>
        <CareScale careType='water' careValue={water} />
        <CareScale careType='light' careValue={light} />
      </div>
    </li>
  );
};

export default PlantItem;
