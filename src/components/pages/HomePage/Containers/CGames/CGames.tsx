import React, { useState } from 'react';
import './CGames.scss';
import Container from '../../../../common/Container/Container';
import RowBox from '../../../../common/RowBox/RowBox';
import { IRowBoxContent } from '../../../../../models/RowBoxContent';

interface ICGamesProps {
  nameId: string;
}

const CGames: React.FC<ICGamesProps> = (props) => {

  const [bgSrc, setBgSrc] = useState('dz_head.jpg');


  function changeGame(name: string) {
    mods.find(function(str) {
      if (str.name === name)
      {
        setBgSrc('/games/' + str.bg);
        return true;
      }
      return false;
    });
  }

  const mods: Array<IRowBoxContent> = [{
    name: 'starcraft2',
    title: 'Starcraft II',
    bg: 'sc2.jpg',
  },
  {
    name: 'hl2',
    title: 'Half-Life 2',
    bg: 'hl2.jpg',
  },
  {
    name: 'bms',
    title: 'Black Mesa',
    bg: 'bms.jpg',
  },
  {
    name: 'menofwar',
    title: 'Men of War',
    bg: 'menofwar.jpg',
  },
  {
    name: 'aoe2',
    title: 'Age of Empires II',
    bg: 'aoe2.jpg',
  }]

  return (
    <Container nameId={props.nameId} bgColor='#001D38' bgImg={bgSrc}>
      <h1>When I'm not busy making websites</h1>
      <h2>I also tend to make games</h2>

      <RowBox games={mods} onChangeGame={changeGame} />
    </Container>
  );
}

export default CGames;
