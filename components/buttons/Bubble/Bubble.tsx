import { FC, useState } from 'react';
import c from './Bubble.module.css';

interface Props {
  onClick?: () => void;
}

const Slices: FC<Props> = ({ children, onClick }) => {
  const [{ x, y }, setCoords] = useState({ x: 0, y: 0 });

  const handleHover = (e: any) => {
    const offsetX = e.clientX - e.target.offsetLeft;
    const offsetY = e.clientY - e.target.offsetTop;
    setCoords({ x: offsetX, y: offsetY });
  };

  return (
    <button
      className={c.btn}
      onClick={onClick ? onClick : () => {}}
      onMouseEnter={handleHover}
    >
      <span>Bubble</span>
      <span className={c.bg} style={{ top: y, left: x }}></span>
    </button>
  );
};

export default Slices;
