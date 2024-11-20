import React from 'react';

function TempInput({value, unit, onChange}) {
  return (
    <div>
      <input 
        type='number' 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        placeholder='In ${unit}'
      /> &nbsp; &nbsp;
      <span>{unit}</span>
    </div>
  );
}

export default TempInput;