import React from 'react';
import './ColorButton.scss';
import styled from 'styled-components';

export interface IColorButtonProps {
  idNr: number;
  text: string;
  bgColorActive: string;
  enabled: boolean;
  onClick: (idNr: number) => void;
}

interface IButton {
  bgColor: string;
}

interface ILabel {
  color: string;
}

const Button = styled.button<IButton> `background-color: ${props => props.bgColor};
border-radius: 2px;`

const Label = styled.label<ILabel> `
color: ${props => props.color};
font-size: 16px;
font-weight: bold;
text-shadow: 1px 1px black;`;

const ColorButton: React.FC<IColorButtonProps> = (props) => {

  const bgColor = props.enabled ? props.bgColorActive : 'gray';
  const textColor = props.enabled ? 'white' : props.bgColorActive;

  function handleClick() {
    props.onClick(props.idNr);
  }
  
  return (
  <Button bgColor={bgColor} className='ColorButton' onClick={handleClick}><Label color={textColor}>{props.text}</Label>
  </Button>);
};

export default ColorButton;
