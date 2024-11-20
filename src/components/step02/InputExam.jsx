import React from 'react';
import './InputExam.css';
import { TextField } from '@mui/material';

function InputExam(props) {
  return (
    <div className='center'>
      <input onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')} /><br /><br />

      {/* onChange 해당 입력 요소의 값이 바뀔 때 발생, target 이벤트가 발생한 요소를 가리킨다 */}
      <TextField id="outlined-basic" label="Outlined" variant="outlined"
        onChange={(e) => console.log(e.target.value)}
      /><br /><br />

      <TextField id="standard-basic" label="Search" variant="standard" 
        onKeyUp={(e) => console.log(e.key, 'UP')}
      />
    </div>
  );
}

export default InputExam;