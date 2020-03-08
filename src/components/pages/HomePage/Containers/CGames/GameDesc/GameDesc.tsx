import React from 'react';
import './GameDesc.scss';
import styled from 'styled-components';

interface IGameDescProps {
  title: string;
  text: string;
  videoUrl?: string;
}

const Video = styled.iframe`
  border: 1px solid black;`;

const GameDesc: React.FC<IGameDescProps> = (props) => {

  const videoExists = props.videoUrl !== undefined && props.videoUrl !== null && props.videoUrl.length > 0;
  const videoContent = videoExists ? <Video title='hey' width="560" height="315" src={'https://www.youtube.com/embed/' + props.videoUrl}
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></Video> : <div></div>


  return (
    <div className='GameDesc'>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      {videoContent}
    </div>
  );
}

export default GameDesc;
