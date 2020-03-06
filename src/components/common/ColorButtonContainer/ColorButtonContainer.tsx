import React, { useState, useRef } from 'react';
import './ColorButtonContainer.scss';
import ColorButton from '../ColorButton/ColorButton';

interface IColorButtonContainerProps {
  
}

const ColorButtonContainer: React.FC<IColorButtonContainerProps> = (props) => {

  const child1 = useRef<IColorButtonContainerProps>();
  const child2 = useRef<IColorButtonContainerProps>();
  const child3 = useRef<IColorButtonContainerProps>();
  const child4 = useRef<IColorButtonContainerProps>();
  const child5 = useRef<IColorButtonContainerProps>();;
  const child6 = useRef<IColorButtonContainerProps>();
  // const colorButtons = 

  function buttonPressed(idNr: number) {
    console.log("buttonPRessed: ", idNr);
    // child1.current.setActive(false);
  }
  
  
  return (
    <div className='ColorButtonContainer'>
      <ColorButton idNr={1} text='Red' bgColorActive={'red'} onClick={buttonPressed}></ColorButton>
      <ColorButton idNr={2} text='Green' bgColorActive={'green'} onClick={buttonPressed}></ColorButton>
      <ColorButton idNr={3} text='Blue' bgColorActive={'blue'} onClick={buttonPressed}></ColorButton>
      <ColorButton idNr={4} text='Yellow' bgColorActive={'yellow'} onClick={buttonPressed}></ColorButton>
      <ColorButton idNr={5} text='Orange' bgColorActive={'orange'} onClick={buttonPressed}></ColorButton>
      <ColorButton idNr={6} text='Pink' bgColorActive={'pink'} onClick={buttonPressed}></ColorButton>
    </div>
  )
  
};

export default ColorButtonContainer;
