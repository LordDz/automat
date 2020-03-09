import React from 'react';
import './CFrontend.scss';
import Container from '../../../../common/Container/Container';
import ColorButtonContainer from '../../../../common/ColorButtonContainer/ColorButtonContainer';

interface ICFrontendProps {
  nameId: string;
}

const CFrontend: React.FC<ICFrontendProps> = (props) => {

  return (
    <Container nameId={props.nameId} className='CFrontend' bgColor='black'>
      <div className='CFrontend__Center'>
        <h2>Frontend</h2>
        <p>Below are three buttons that you can interact with, try them! :)</p>
      </div>
      <ColorButtonContainer></ColorButtonContainer>

    </Container>
  );
}

export default CFrontend;
