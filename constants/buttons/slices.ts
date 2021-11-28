import { Slices } from '@components/buttons';

export default {
  component: Slices,
  code: `import c from './Slices.module.css';

/**
 PROP-TYPES
  children: ReactNode;
  onClick?: () => any; (optional)
**/

const Slices = ({ children, onClick }) => {
  return (
    <button className={c.btn} onClick={onClick ? onClick : () => {}}>
      <span>{children}</span>
    </button>
  );
};

ReactDOM.render(
  <Slices>Slices</Slices>,
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

.btn::before {
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  background-color: rgba(59, 130, 246, 0.5);
  transition: transform 0.25s ease-in-out;
}

.btn::after {
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  background-color: rgba(59, 130, 246, 0.5);
  transition: transform 0.25s ease-in-out;
}

.btn:hover::before {
  transform: translateX(100%);
}

.btn:hover::after {
  transform: translateX(-100%);
}

.btn:hover span {
  color: white;
}
`,
};
