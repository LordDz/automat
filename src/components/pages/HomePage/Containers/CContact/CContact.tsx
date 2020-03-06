import React from 'react';
import './CContact.scss';
import Container from '../../../../common/Container/Container';

interface IContactProps {
  nameId: string;
}

const CContact: React.FC<IContactProps> = (props) => {

  return (
    <Container nameId={props.nameId} className='CContact' bgColor='black'>
      <div className='CContact__Center'>
        <h1><a href='mailto: david.zetterdahl@hiq.se'>Say hello?</a></h1>
      </div>
    </Container>
  );
}

export default CContact;
