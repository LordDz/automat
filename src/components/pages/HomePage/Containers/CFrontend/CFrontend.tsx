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
        <h1>Web magics!</h1>
      </div>
      <ColorButtonContainer></ColorButtonContainer>

    </Container>
  );
}

export default CFrontend;
