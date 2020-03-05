import React from 'react';
import './CServices.scss';
import Container from '../../../../common/Container/Container';

interface ICTopProps {
  nameId: string;
}

const CServices: React.FC<ICTopProps> = (props) => {

  return (
    <Container nameId={props.nameId} bgColor='#turquoise'>
      <h1>Build brands campaigns & digital projects</h1>
    </Container>
  );
}

export default CServices;
