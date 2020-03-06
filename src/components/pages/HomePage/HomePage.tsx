import React from 'react';
import './HomePage.scss';
import TopMenu from '../../common/TopMenu/TopMenu';
import CTop from './Containers/CTop/CTop';
import CServices from './Containers/CServices/CServices';
import CGames from './Containers/CGames/CGames';
import { ILink } from '../../../models/Link';

const HomePage: React.FC = () => {

  const content = <div>
    <CTop nameId='top' />
    <CServices nameId='services' />
    <CGames nameId='games' />
  </div>;

  const links: ILink[] = [{
    title: 'Top',
    name: 'top',
  },
  {
    title: 'Services',
    name: 'services',
  },
  {
    title: 'Games',
    name: 'games',
  }]

  return (
    <div className='HomePage'>
      <TopMenu links={links} />
      {content}
    </div>
  );
};

export default HomePage;
