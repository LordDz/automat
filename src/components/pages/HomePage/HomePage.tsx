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

import bgImg from '../../../img/bg/ctop.jpg';
import bgImgMods from '../../../img/bg/games/menofwar.jpg';
import bgImgGames from '../../../img/bg/games/wunderling_a.jpg';

import bgHeaderTop from '../../../img/bg/games/hl2.jpg';
import bgHeaderSc2 from '../../../img/bg/games/menofwar.jpg';


import gameSc2 from '../../../img/bg/games/sc2a.jpg';
import gameHl2 from '../../../img/bg/games/hl2.jpg';
import gameBms from '../../../img/bg/games/bms.jpg';
import gameAoe2 from '../../../img/bg/games/aoe2.jpg';

import gameWunderling from '../../../img/bg/games/wunderling.jpg';
import gameSteve from '../../../img/bg/games/steve.jpg';
import gameTortoise from '../../../img/bg/games/tortoiseisland.jpg';
import CTransparent from './Containers/CTransparent/CTransparent';
import styled from 'styled-components';


interface IHomeDiv {
  bgImg: string;
}

const HomeDiv = styled.div<IHomeDiv> `background-image: ${props => 'url(' + props.bgImg + ');'} 
background-size: cover;
background-repeat: no-repeat;
background-position: 50% 50%;
background-attachment: fixed;`


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
    <CFrontend nameId='frontend'/>
    {/* <CTransparent nameId='CTransparent1'  height='150px'/> */}
    {/* <CGamesHeader nameId='gamesHeader' bgImg={bgHeaderSc2} text="When I'm not busy making websites" /> */}
    <CGames nameId='mods' initialBg={bgImgMods} games={mods} textTitle="When I'm not busy making websites" title='I tend to make mods' />
    <CGames nameId='games' initialBg={bgImgGames} games={games} textTitle="aswell as some" title='Games' />
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
    <HomeDiv className='HomePage' bgImg={bgImg}>
      <TopMenu links={links} nameId='top' />
      {content}
    </HomeDiv>
  );
};

export default HomePage;