import { Button } from '@mui/material';
import React from 'react';

function NumberCounter(props) {
  function handleClick() {
    console.log('Event1');
  }
  return (
    <div>
      <br />
      <Button variant="contained" onClick={handleClick}>Button1</Button><br /><br />
      <Button variant="outlined" onClick={() => {console.log('Event2')}}>Button2</Button><br /><br />
    </div>
  );
}

export default NumberCounter;