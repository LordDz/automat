import React from 'react';
import './CTop.scss';
import Container from '../../../../common/Container/Container';
import bgImg from '../../../../../img/bg/ctop.jpg';

interface ICTopProps {
  nameId: string;
}

const CTop: React.FC<ICTopProps> = (props) => {

  return (
    <Container nameId={props.nameId} className='CTop' bgColor='transparent'>
      <div className='CTop__Center'>
        <h1>David Zetterdahl</h1>
        <h2>Frontend & UX & Level Designer & Game Hobbyist & ..</h2>
      </div>


    </Container>
  );
}

export default CTop;
