import React from 'react';
import './CGamesHeader.scss';
import Container from '../../../../common/Container/Container';

interface ICGamesHeaderProps {
  nameId: string;
  bgImg: string;
  text: string;
}

const CGamesHeader: React.FC<ICGamesHeaderProps> = (props) => {

  return (
    <Container nameId={props.nameId} bgColor='#001D38' bgImg={props.bgImg}>
      <div className='CGamesHeader'>
        <h1>{props.text}</h1>
      </div>
    </Container>
  );
}

export default CGamesHeader;
