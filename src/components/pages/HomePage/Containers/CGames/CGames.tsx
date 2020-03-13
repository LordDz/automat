import React, { useState } from 'react';
import './CGames.scss';
import Container from '../../../../common/Container/Container';
import RowBox from '../../../../common/RowBox/RowBox';
import { IRowBoxContent } from '../../../../../models/RowBoxContent';
import GameDesc from './GameDesc/GameDesc';

interface ICGamesProps {
  nameId: string;
  textTitle: string;
  title: string;
  initialBg: string;
  games: IRowBoxContent[];
}

const CGames: React.FC<ICGamesProps> = (props) => {

  const [bgSrc, setBgSrc] = useState(props.initialBg);
  const [gameTitle, setGameTitle] = useState(props.title);
  const [gameText, setGameText] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ');
  const [gameVideoUrl, setGameVideoUrl] = useState('');

  function changeGame(name: string) {
    props.games.find(function(str) {
      if (str.name === name)
      {
        const videoUrl = str.videoUrl ? str.videoUrl : '';
        setGameTitle(str.title);
        setGameText('Todo insert text here some time in the future.');
        setGameVideoUrl(videoUrl);
        setBgSrc(str.bg);
        return true;
      }
      return false;
    });
  }

  return (
    <Container className='CGames' nameId={props.nameId} bgColor='#001D38' bgImg={bgSrc}>
      <h1>{props.textTitle}</h1>
      <div className='CGames__Container'>
        <div className='CGames__Group'>
          <GameDesc title={gameTitle} text={gameText} videoUrl={gameVideoUrl} />
          <RowBox games={props.games} onChangeGame={changeGame} />
        </div>
      </div>
    </Container>
  );
}

export default CGames;
