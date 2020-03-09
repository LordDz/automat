import React from 'react';
import './ColorButtonDesc.scss';

interface IColorButtonDescProps {
  text: string;
  enabled: boolean;
}


const ColorButtonDesc: React.FC<IColorButtonDescProps> = (props) => {

  const classEnabled = props.enabled ? 'ColorButtonDesc ColorButtonDesc__Visible': 'ColorButtonDesc';

  return (
    <div className={classEnabled}>
      <p>{props.text}</p>
    </div>
  );
}

export default ColorButtonDesc;
