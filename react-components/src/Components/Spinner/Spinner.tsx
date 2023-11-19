import { FC } from 'react';
import './spinner.css';

const Spinner: FC<{ classname: string }> = (props) => {
  return <div className={props.classname}></div>;
};

export default Spinner;
