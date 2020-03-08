import React from 'react';
import './CGamesHeader.scss';
import Container from '../../../../common/Container/Container';
import bgImg from '../../../../../img/bg/games/sc2.jpg';

interface ICGamesHeaderProps {
  nameId: string;
}

const CGamesHeader: React.FC<ICGamesHeaderProps> = (props) => {

  return (
    <Container nameId={props.nameId} bgColor='#001D38' bgImg={bgImg}>
      <div className='CGamesHeader'>
      <h1>When I'm not busy making websites</h1>
      </div>
    </Container>
  );
}

export default CGamesHeader;
