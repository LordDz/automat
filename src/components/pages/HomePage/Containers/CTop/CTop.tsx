import React from 'react';
import './CTop.scss';
import Container from '../../../../common/Container/Container';

interface ICTopProps {
  nameId: string;
}

const CTop: React.FC<ICTopProps> = (props) => {

  return (
    <Container nameId={props.nameId} className='CTop' bgColor='#001D38' bgImg='dz_head.jpg'>



    </Container>
  );
}

export default CTop;
