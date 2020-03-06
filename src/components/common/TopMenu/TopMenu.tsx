import React from 'react';
import styled from 'styled-components'
import './TopMenu.scss';
import { ILink } from '../../../models/Link';

interface ITopMenu {
  links: ILink[];
}

const TopMenu: React.FC<ITopMenu> = (props) => {

  const links = getLinks();

  const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;
  &::before {
    content: '◀';
    margin: 0 10px;
  }
`;

function getLinks(){
  const links = [];
  for (let i = 0; i < props.links.length; i++) {
    links.push(<li key={i}><a href={'#' + props.links[i].name}>{props.links[i].title}</a></li>);
  }
  return links;
}

  return (
    <div className='TopMenu'>
      <Label>Hey yoooou!</Label>
      <ul>
        {links}
      </ul>
    </div>
  );
}

export default TopMenu;
