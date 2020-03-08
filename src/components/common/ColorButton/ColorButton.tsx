import React, { useState, useRef } from 'react';
import './ColorButton.scss';
import styled from 'styled-components';

export interface IColorButtonProps {
  idNr: number;
  text: string;
  bgColorActive: string;
  onClick: (idNr: number) => void;
}

interface IButton {
  bgColor: string;
}

interface ILabel {
  color: string;
}

const Button = styled.button<IButton> `background-color: ${props => props.bgColor};`
const Label = styled.label<ILabel> `
color: ${props => props.color};
font-size: 16px;
font-weight: bold;`;

const ColorButton: React.FC<IColorButtonProps> = (props) => {

  const [isActive, setIsActive] = useState(false);
  const bgColor = isActive ? props.bgColorActive : 'gray';
  const textColor = isActive ? 'white' : props.bgColorActive;

  function handleClick() {
    activate(true);
    props.onClick(props.idNr);
  }

  function activate(val: boolean) {
    setIsActive(val);
  }
  
  return (
  <Button bgColor={bgColor} className='ColorButton' onClick={handleClick}><Label color={textColor}>{props.text}</Label>
  </Button>);
};

export default ColorButton;
