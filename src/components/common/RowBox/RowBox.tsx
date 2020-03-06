import React from 'react';
import './RowBox.scss';
import GameBox from '../GameBox/GameBox';
import { IRowBoxContent } from '../../../models/RowBoxContent';

interface IRowBoxProps {
  games: IRowBoxContent[];
  onChangeGame: (name: string) => void;
}

const RowBox: React.FC<IRowBoxProps> = (props) => {

  const games = props.games.map((val, index) => 
    <GameBox key={index} nr={index} name={val.name} bg={val.bg} title={val.title} onExpand={collapseAllOthers} />);

  function collapseAllOthers(nr: number, name: string) {
    props.onChangeGame(name);
  }
  
  return (
  <div className='RowBox'>
    {games}
  </div>);
};

export default RowBox;
