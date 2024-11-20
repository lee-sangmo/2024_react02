import React from 'react';

function ExchangeInput({value, unit, onChange}) {
  return (
    <div>
      <input 
        type='number' 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        placeholder='input cash'
      /> &nbsp; &nbsp;
      <span>{unit}</span>
    </div>
  );
}

export default ExchangeInput;