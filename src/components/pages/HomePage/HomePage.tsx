import React from 'react';
import './HomePage.scss';
import { ILink } from '../../../models/Link';
import TopMenu from '../../common/TopMenu/TopMenu';
import CTop from './Containers/CTop/CTop';
// import CServices from './Containers/CServices/CServices';
import CGames from './Containers/CGames/CGames';
import CContact from './Containers/CContact/CContact';
import CFrontend from './Containers/CFrontend/CFrontend';
import CGamesHeader from './Containers/CGamesHeader/CGamesHeader';
import { IRowBoxContent } from '../../../models/RowBoxContent';

import bgImgMods from '../../../img/bg/games/menofwar.jpg';
import bgImgGames from '../../../img/bg/games/wunderling_a.jpg';

import gameSc2 from '../../../img/bg/games/sc2a.jpg';
import gameHl2 from '../../../img/bg/games/hl2.jpg';
import gameBms from '../../../img/bg/games/bms.jpg';
import gameAoe2 from '../../../img/bg/games/aoe2.jpg';

import gameWunderling from '../../../img/bg/games/wunderling.jpg';
import gameSteve from '../../../img/bg/games/steve.jpg';
import gameTortoise from '../../../img/bg/games/tortoiseisland.jpg';


const HomePage: React.FC = () => {

  // Todo: move this into own component
  const mods: Array<IRowBoxContent> = [{
    name: 'starcraft2',
    title: 'Starcraft II',
    bg: gameSc2,
    videoUrl: '4Ukiu_mSeF0'
  },
  {
    name: 'hl2',
    title: 'Half-Life 2',
    bg: gameHl2,
    videoUrl: 'OZtB0Hu1Pqs'
  },
  {
    name: 'bms',
    title: 'Black Mesa',
    bg: gameBms,
    videoUrl: 'GpIisyPb2Ls'
  },
  {
    name: 'menofwar',
    title: 'Men of War',
    bg: bgImgMods,
    videoUrl: 'O7w376qiQX4'
  },
  {
    name: 'aoe2',
    title: 'Age of Empires II',
    bg: gameAoe2,
  }]

  const games: Array<IRowBoxContent> = [{
    name: 'wunderling',
    title: 'Wunderling',
    bg: gameWunderling,
    videoUrl: 'YkKnbkvFhDI'
  },
  {
    name: 'steve',
    title: 'Super Evil Corps',
    bg: gameSteve,
    videoUrl: 'RY1sqcm8dqY'
  },
  {
    name: 'tortoise',
    title: 'Tortoise Island',
    bg: gameTortoise,
    videoUrl: 'H0dEB0ADw2Y'
  }];

  const content = <div className='HomePage__Content'>
    <CTop nameId='top' />
    <CFrontend nameId='frontend' />
    <CGamesHeader nameId='gamesHeader' />
    <CGames nameId='mods' title='I tend to make mods' initialBg={bgImgMods} games={mods} />
    <CGames nameId='games' title='and a few games' initialBg={bgImgGames} games={games} />
    <CContact nameId='contact' />
  </div>;

  const links: ILink[] = [
  {
    title: 'Frontend',
    name: 'frontend',
  },
  {
    title: 'Mods',
    name: 'mods',
  },
  {
    title: 'Games',
    name: 'games',
  },
  {
    title: 'Contact',
    name: 'contact',
  }]

  return (
    <div className='HomePage'>
      <TopMenu links={links} nameId='top' />
      {content}
    </div>
  );
};

export default HomePage;