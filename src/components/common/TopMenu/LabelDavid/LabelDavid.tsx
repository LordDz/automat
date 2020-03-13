import React from 'react';
import styled from 'styled-components'
import './TopMenu.scss';

const Label = styled.span`
  display: flex;
  margin-left: 1em;
  transition: color 0.3s;
  color: gray;
  &::after {
    content: '⯈';
    margin: 0 5px;
  }
`;

export interface ILabelDavidProps {
  nameId: string;
  ref: any;
  onClick: () => void;
  tellDavidToFocus: () => void;
}


const LabelDavid: React.FC<ILabelDavidProps> = (props) => {

  function handleClick() {
    console.log('handle click!');
    props.onClick();
  }

  function tellDavidToFocus() {
    console.log('hi David');
  }



  return (
    <button ref={props.ref} className='LabelDavid' onClick={handleClick}><Label>David</Label></button>
  );
}

export default LabelDavid;
