import React, { useRef } from 'react';
import styled from 'styled-components'
import './TopMenu.scss';
import { ILink } from '../../../models/Link';
import LabelDavid, { ILabelDavidProps } from './LabelDavid/LabelDavid';

interface ITopMenu {
  nameId: string;
  links: ILink[];
}

const TopMenu: React.FC<ITopMenu> = (props) => {

  const links = getLinks();
  const davidRef = useRef<ILabelDavidProps>(null);
  

  function getLinks() {
    const links = [];
    for (let i = 0; i < props.links.length; i++) {
      links.push(<li key={i}><a href={'#' + props.links[i].name}>{props.links[i].title}</a></li>);
    }
    return links;
  }

  function davidClickedOn() {
    if (davidRef && davidRef.current) {
      davidRef.current.tellDavidToFocus();
    }
  }

  return (
    <div className='TopMenu'>
      <ul>
        {/* <li><LabelDavid ref={davidRef} nameId={props.nameId} onClick={davidClickedOn} /></li> */}
        {links}
      </ul>
    </div>
  );
}

export default TopMenu;
