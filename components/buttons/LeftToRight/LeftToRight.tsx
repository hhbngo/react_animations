import { FC } from 'react';
import c from './LeftToRight.module.css';

interface Props {
  onClick?: () => void;
}

const LeftToRight: FC<Props> = ({ children, onClick }) => {
  return (
    <button className={c.btn} onClick={onClick ? onClick : () => {}}>
      <span>Left To Right</span>
    </button>
  );
};

export default LeftToRight;
