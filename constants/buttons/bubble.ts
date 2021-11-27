import { Bubble } from '@components/buttons';

export default {
  component: Bubble,
  code: `import { useState } from 'react';
 import c from './Bubble.module.css';

const Bubble = ({ children, onClick }) => {
  const [{ x, y }, setCoords] = useState({ x: 0, y: 0 });

  const handleHover = (e) => {
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

ReactDOM.render(
  <Bubble>Bubble</Bubble>,
  document.getElementById('root')
);
  `,
  css: `.btn {
  position: relative;
  padding: 12px 32px;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
}

.btn span {
  position: relative;
  z-index: 2;
  color: rgb(56, 56, 56);
  font-size: 24px;
  transition: color 0.2s;
}

.btn .bg {
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: rgba(249, 168, 212, 1);
  transform: scale(0);
  transition: transform 0.25s ease-in-out;
}

.btn:hover .bg {
  transform: scale(35); /*Scale as needed to fill up button*/
}

.btn:hover span {
  color: white;
}

`,
};
