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

const HomePage: React.FC = () => {

  // Todo: move this into own component
  const mods: Array<IRowBoxContent> = [{
    name: 'starcraft2',
    title: 'Starcraft II',
    bg: 'sc2a.jpg',
    videoUrl: '4Ukiu_mSeF0'
  },
  {
    name: 'hl2',
    title: 'Half-Life 2',
    bg: 'hl2.jpg',
    videoUrl: 'OZtB0Hu1Pqs'
  },
  {
    name: 'bms',
    title: 'Black Mesa',
    bg: 'bms.jpg',
    videoUrl: 'GpIisyPb2Ls'
  },
  {
    name: 'menofwar',
    title: 'Men of War',
    bg: 'menofwar.jpg',
    videoUrl: 'O7w376qiQX4'
  },
  {
    name: 'aoe2',
    title: 'Age of Empires II',
    bg: 'aoe2.jpg',
  }]

  const games: Array<IRowBoxContent> = [{
    name: 'wunderling',
    title: 'Wunderling',
    bg: 'wunderling.jpg',
    videoUrl: 'YkKnbkvFhDI'
  },
  {
    name: 'steve',
    title: 'Super Evil Corps',
    bg: 'hl2.jpg',
    videoUrl: 'RY1sqcm8dqY'
  },
  {
    name: 'tortoise',
    title: 'Tortoise Island',
    bg: 'bms.jpg',
    videoUrl: 'H0dEB0ADw2Y'
  }];

  const content = <div className='HomePage__Content'>
    <CTop nameId='top' />
    <CFrontend nameId='frontend' />
    <CGamesHeader nameId='gamesHeader' />
    <CGames nameId='mods' title='I tend to make mods' initialBg='menofwar.jpg' games={mods} />
    <CGames nameId='games' title='and a few games' initialBg='wunderling_a.jpg' games={games} />
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