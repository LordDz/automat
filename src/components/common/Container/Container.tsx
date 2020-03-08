import React from 'react';
import styled from 'styled-components'
import './Container.scss'
// import styles from './Container.module.styl';

export interface IContainerProps {
  nameId: string;
  className?: string;
  bgColor: string;
  bgImg?: string;
}

interface IWrapper{
  bgColor: string;
  bgImage?: string;
}

const Wrapper = styled.section<IWrapper> `
  background-image: ${props => props.bgImage ? 'url(/img/bg/' + props.bgImage + ')' : ''};
  background-color: ${props => props.bgColor};
  background-repeat: no-repeat;
  background-size: cover;
  `

const Container: React.FC<IContainerProps> = (props) => {
  const className = props.className !== undefined && props.className !== null ? 'Container ' + props.className : 
  'Container';

  return (
  <Wrapper bgColor={props.bgColor} bgImage={props.bgImg} id={props.nameId} className={className}>
    <div className='Container__Inner'>
      {props.children}
    </div>
  </Wrapper>
  );
}

export default Container;
