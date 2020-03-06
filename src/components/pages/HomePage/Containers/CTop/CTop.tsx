import React from 'react';
import './CTop.scss';
import Container from '../../../../common/Container/Container';

interface ICTopProps {
  nameId: string;
}

const CTop: React.FC<ICTopProps> = (props) => {

  return (
    <Container nameId={props.nameId} className='CTop' bgColor='#cdcdcd' bgImg='ctop.jpg'>
      <div className='CTop__Center'>
        <h1>David Zetterdahl</h1>
        <h2>Frontend & UX & Level Designer & Game Hobbyist & ..</h2>

      </div>


    </Container>
  );
}

export default CTop;
