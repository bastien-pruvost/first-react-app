import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function CareScale({ careValue, careType }) {
  const range = [1, 2, 3];
  const careImg =
    careType === 'light' ? (
      <img src={Sun} alt='sun-icon' />
    ) : (
      <img src={Water} alt='water-icon' />
    );

  return (
    <div>
      {range.map((rangeElem) =>
        careValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{careImg}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
