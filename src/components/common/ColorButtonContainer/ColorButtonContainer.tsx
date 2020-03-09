import React, { useState } from 'react';
import './ColorButtonContainer.scss';
import ColorButton from '../ColorButton/ColorButton';
import ColorButtonDesc from '../ColorButtonDesc/ColorButtonDesc';

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
      <div className='ColorButtonContainer__Grid'>
        <ColorButton idNr={1} text='Web Design' bgColorActive={'red'} onClick={buttonPressed} enabled={btnEnabled1}></ColorButton>
        <ColorButton idNr={2} text='UX Design' bgColorActive={'green'} onClick={buttonPressed} enabled={btnEnabled2}></ColorButton>
        <ColorButton idNr={3} text='Games' bgColorActive={'#0095ff'} onClick={buttonPressed} enabled={btnEnabled3}></ColorButton>
      </div>

      <div className='ColorButtonContainer__Desc'>
        <ColorButtonDesc text="So many frameworks, so little time.. " enabled={btnEnabled1}></ColorButtonDesc>
        <ColorButtonDesc text="Looking forward to gain more experience and level up." enabled={btnEnabled2}></ColorButtonDesc>
        <ColorButtonDesc text="Retrospelsmässan JAM happening soon, see you there? :)" enabled={btnEnabled3}></ColorButtonDesc>
      </div>
    </div>
  )
};

export default ColorButtonContainer;
