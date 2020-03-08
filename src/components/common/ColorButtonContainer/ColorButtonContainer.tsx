import React, { useState, useRef } from 'react';
import './ColorButtonContainer.scss';
import ColorButton, { IColorButtonProps } from '../ColorButton/ColorButton';

interface IColorButtonContainerProps {
  
}

const ColorButtonContainer: React.FC<IColorButtonContainerProps> = (props) => {

  const child1 = useRef<IColorButtonProps>();
  const child2 = useRef<IColorButtonProps>();
  const child3 = useRef<IColorButtonProps>();
  const child4 = useRef<IColorButtonProps>();
  const child5 = useRef<IColorButtonProps>();;
  const child6 = useRef<IColorButtonProps>();

  // const colorButton1 = React.forwardRef((props: any, ref: any) => 
  // <ColorButton parentRef={ref}  idNr={1} text='Red' bgColorActive={'red'} onClick={buttonPressed}></ColorButton>);

  // const colorButtons = 

  function buttonPressed(idNr: number) {
    console.log("buttonPRessed: ", idNr);
    // if (child1 !== undefined && child1 !== null) {
    //   child1.current?.activate(false);
    // }
  }
  
  
  return (
    <div className='ColorButtonContainer'>
      <ColorButton idNr={2} text='Red' bgColorActive={'red'} onClick={buttonPressed}></ColorButton>
      <ColorButton idNr={2} text='Green' bgColorActive={'green'} onClick={buttonPressed}></ColorButton>
      <ColorButton idNr={3} text='Blue' bgColorActive={'blue'} onClick={buttonPressed}></ColorButton>

      {/* {colorButton1} */}
      {/* <ColorButton idNr={1} text='Red' bgColorActive={'red'} onClick={buttonPressed}></ColorButton>
      <ColorButton idNr={3} text='Blue' bgColorActive={'blue'} onClick={buttonPressed}></ColorButton>
      <ColorButton idNr={4} text='Yellow' bgColorActive={'yellow'} onClick={buttonPressed}></ColorButton>
      <ColorButton idNr={5} text='Orange' bgColorActive={'orange'} onClick={buttonPressed}></ColorButton>
      <ColorButton idNr={6} text='Pink' bgColorActive={'pink'} onClick={buttonPressed}></ColorButton> */}
    </div>
  )
  
};

export default ColorButtonContainer;
