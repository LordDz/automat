import React from 'react';
import './CTransparent.scss';
import Container from '../../../../common/Container/Container';
import styled from 'styled-components';

interface ICTopProps {
  nameId: string;
  height: string;
}

interface IWrapper {
  height: string;
}

const Wrapper = styled.div<IWrapper>`height: ${props => props.height};`

const CTransparent: React.FC<ICTopProps> = (props) => {

  // height: 300px;
  //   min-height: 300px;

  return (

    <Wrapper height={props.height}>
      <Container nameId={props.nameId} bgColor='transparent'></Container>
    </Wrapper>
    
  );
}

export default CTransparent;
