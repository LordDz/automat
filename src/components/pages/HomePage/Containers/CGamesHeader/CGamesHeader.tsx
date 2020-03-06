import React from 'react';
import './CGamesHeader.scss';
import Container from '../../../../common/Container/Container';

interface ICGamesHeaderProps {
  nameId: string;
}

const CGamesHeader: React.FC<ICGamesHeaderProps> = (props) => {


  return (
    <Container nameId={props.nameId} bgColor='#001D38' bgImg='/games/sc2.jpg'>
      <div className='CGamesHeader'>
      <h1>When I'm not busy making websites</h1>
      {/* <h2>I also tend to make mods</h2> */}
      </div>
    </Container>
  );
}

export default CGamesHeader;
