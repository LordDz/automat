import React from 'react';
import styled from 'styled-components'
import './TopMenu.scss';
import { ILink } from '../../../models/Link';

interface ITopMenu {
  nameId: string;
  links: ILink[];
}

const TopMenu: React.FC<ITopMenu> = (props) => {

  const links = getLinks();

  const Label = styled.span`
  display: flex;
  margin-left: 1em;
  transition: color 0.3s;
  color: gray;
  &::after {
    content: '⯈';
    margin: 0 5px;
  }
`;

function getLinks() {
  const links = [];
  for (let i = 0; i < props.links.length; i++) {
    links.push(<li key={i}><a href={'#' + props.links[i].name}>{props.links[i].title}</a></li>);
  }
  return links;
}

  return (
    <div className='TopMenu'>
      <ul>
        <li><a href={'#' + props.nameId}><Label>David</Label></a></li>
        {links}
      </ul>
    </div>
  );
}

export default TopMenu;
