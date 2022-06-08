import Sun from 'assets/sun.svg';
import Water from 'assets/water.svg';

function CareScale({ careValue, careType }) {
  const range = [1, 2, 3];
  const careImg =
    careType === 'light' ? (
      <img src={Sun} alt='sun-icon' />
    ) : (
      <img src={Water} alt='water-icon' />
    );

  const handleClick = (careValue, careType) => {
    const type = careType === 'light' ? 'de lumière' : "d'arrosage";
    const quantityLabel = {
      1: 'peu',
      2: 'modérement',
      3: 'beaucoup'
    };
    alert(`Cette plante requiert ${quantityLabel[careValue]} ${type}.`);
  };

  return (
    <div onClick={() => handleClick(careValue, careType)}>
      {range.map((rangeElem) =>
        careValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{careImg}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
