import React, { useState } from 'react';
import './ColorButton.scss';
import styled from 'styled-components';

interface IColorButtonProps {
  idNr: number;
  text: string;
  bgColorActive: string;
  onClick: (idNr: number) => void;
}

const ColorButton: React.FC<IColorButtonProps> = (props) => {

  const [isActive, setIsActive] = useState(false);

  const Button = isActive ?
  styled.button `background-color: ${props.bgColorActive};` :
  styled.button `background-color: gray`;

  const Label = styled.label `color: ${props.bgColorActive}`;

  function handleClick() {
    activate(true);
    props.onClick(props.idNr);
  }

  function activate(val: boolean) {
    setIsActive(val);
  }
  
  return (
  <Button className='ColorButton' onClick={handleClick}><Label>{props.text}</Label>
  </Button>);
};

export default ColorButton;
