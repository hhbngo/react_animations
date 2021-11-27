import { FC } from 'react';
import c from './Slices.module.css';

interface Props {
  onClick?: () => void;
}

const Slices: FC<Props> = ({ children, onClick }) => {
  return (
    <button className={c.btn} onClick={onClick ? onClick : () => {}}>
      <span>Slices</span>
    </button>
  );
};

export default Slices;
