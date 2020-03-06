import React, { useState } from 'react';
import './GameBox.scss';

export interface IGameBoxProps {
  nr: number;
  name: string;
  title: string;
  bg: string;
  onExpand: (nr: number, name: string) => void;
}

const GameBox: React.FC<IGameBoxProps> = (props) => {
  
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpandClick() {
    
    if (!isExpanded) {
      props.onExpand(props.nr, props.name);
    }
    setIsExpanded(!isExpanded);
  }

  return (
    <button className='GameBox' onClick={handleExpandClick}>
      <h3>{props.title}</h3>
      <img className='GameBox__CacheLoad' alt='' src={'img/bg/games/' + props.bg} />
    </button>
  );
};

export default GameBox;
