import React, { useState } from 'react';
import './ColorButtonContainer.scss';
import ColorButton from '../ColorButton/ColorButton';

const ColorButtonContainer: React.FC = () => {

  const [btnEnabled1, setbtnEnabled1] = useState(false);
  const [btnEnabled2, setbtnEnabled2] = useState(false);
  const [btnEnabled3, setbtnEnabled3] = useState(false);

  function buttonPressed(idNr: number) {

    switch(idNr) {
      case 1:
          setbtnEnabled1(true);
          setbtnEnabled2(false);
          setbtnEnabled3(false);
        break;
      case 2:
        setbtnEnabled1(false);
        setbtnEnabled2(true);
        setbtnEnabled3(false);
        break;
      case 3:
        setbtnEnabled1(false);
        setbtnEnabled2(false);
        setbtnEnabled3(true);
      break;
    }
  }
  
  return (
    <div className='ColorButtonContainer'>
      <ColorButton idNr={1} text='Red' bgColorActive={'red'} onClick={buttonPressed} enabled={btnEnabled1}></ColorButton>
      <ColorButton idNr={2} text='Green' bgColorActive={'green'} onClick={buttonPressed} enabled={btnEnabled2}></ColorButton>
      <ColorButton idNr={3} text='Blue' bgColorActive={'blue'} onClick={buttonPressed} enabled={btnEnabled3}></ColorButton>
    </div>
  )
};

export default ColorButtonContainer;
