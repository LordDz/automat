import React from 'react';
import styled from 'styled-components'
import './Container.scss'
// import styles from './Container.module.styl';

export interface IContainerProps {
  nameId: string;
  className?: string;
  bgImg?: string;
  bgColor: string;
}

const Container: React.FC<IContainerProps> = (props) => {
  const className = props.className !== undefined && props.className !== null ? 'Container ' + props.className : 
  'Container';

  const Wrapper = props.bgImg !== undefined && props.bgImg !== null ?
  styled.section`
  background-image: url(${'/img/bg/' + props.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  ` :
  styled.section`
  background-color: blue;
  `;

  return (
  <Wrapper id={props.nameId} className={className}>
    <div className='Container__Inner'>
      {props.children}
    </div>
  </Wrapper>
  );
}

export default Container;
