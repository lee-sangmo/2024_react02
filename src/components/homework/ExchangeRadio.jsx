import React from 'react';

function ExchangeRadio({ unit, onUnitChange }) {
  return (
    <div>
      <label>
        <input type='radio'
          value='dollar'
          checked={unit === 'dollar'}
          onChange={(e)=>onUnitChange(e.target.value)}
        />dollar
      </label>
      <label>
        <input type='radio'
          value='won'
          checked={unit === 'won'}
          onChange={(e)=>onUnitChange(e.target.value)}
        />won
      </label>
    </div>
  );
}

export default ExchangeRadio;