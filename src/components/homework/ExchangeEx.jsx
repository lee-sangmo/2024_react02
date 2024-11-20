import React, { useState } from 'react';
import ExchangeInput from './ExchangeInput';
import ExchangeRadio from './ExchangeRadio';

function ExchangeEx(props) {
  const [unit, setUnit] = useState('dollar')
  const [exchange, setExchange] = useState('')
  const convertedExchange = unit === 'dollar' ? 
    (exchange * 1400).toFixed(0) : (exchange / 1400).toFixed(2);
  return (
    <div>
      <h2>Exchange Rate Converter</h2>
      <p>Converted: {exchange ? convertedExchange : "--" }
        {unit === 'won'? "$" : "₩"}
      </p>

      {/* 자식 state 들의 값을 변경하는 요소들이 모두 자식 컴포넌트에게 있음 */}
      <ExchangeInput 
        value={exchange}
        unit={unit}
        onChange={setExchange}
      />

      {/* setter 함수를 자식에게 넘기면
          자식 컴포넌트에 의해 setter 함수가 변경될 때 부모 컴포넌트의 state를 제어하게 된다 */}
      <ExchangeRadio 
      unit={unit}
        onUnitChange={setUnit}
      />
    </div>
  );
}

export default ExchangeEx;