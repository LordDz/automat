import React from 'react';
import './CFrontend.scss';
import Container from '../../../../common/Container/Container';

interface ICFrontendProps {
  nameId: string;
}

const CFrontend: React.FC<ICFrontendProps> = (props) => {

  return (
    <Container nameId={props.nameId} className='CFrontend' bgColor='black'>
      <div className='CFrontend__Center'>
        <h1>Web magics!</h1>

      </div>


    </Container>
  );
}

export default CFrontend;
