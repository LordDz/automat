import React from 'react';
import './CFrontend.scss';
import Container from '../../../../common/Container/Container';
import ColorButtonContainer from '../../../../common/ColorButtonContainer/ColorButtonContainer';

interface ICFrontendProps {
  nameId: string;
}

const CFrontend: React.FC<ICFrontendProps> = (props) => {

  return (
    <Container nameId={props.nameId} className='CFrontend' bgColor='#000000eb'>
      <div className='CFrontend__Center'>
        <h2>Who am I ?</h2>
        <p>I don't really know that myself, but here are some of the things I do</p>
      <ColorButtonContainer></ColorButtonContainer>
      </div>
    </Container>
  );
}

export default CFrontend;