import { LeftToRight } from '@components/buttons';

export default {
  component: LeftToRight,
  camelName: 'LeftToRight',
  code: `import c from './LeftToRight.module.css';

/**
 PROP-TYPES
  children: ReactNode;
  onClick?: () => any; (optional)
**/

const LeftToRight = ({ children, onClick }) => {
  return (
    <button className={c.btn} onClick={onClick ? onClick : () => {}}>
      <span>{children}</span>
    </button>
  );
};

ReactDOM.render(
  <LeftToRight>Left To Right</LeftToRight>,
  document.getElementById('root')
);
  `,
  css: `.btn {
  position: relative;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
}
  
.btn span {
  position: relative;
  z-index: 2;
  color: rgb(56, 56, 56);
  font-size: 24px;
  transition: color 0.25s;
}

.btn::after {
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(59, 130, 246, 0.5);
  transition: transform 0.25s ease-in-out;
}

.btn:hover::after {
  transform: translateX(100%);
}

.btn:hover span {
  color: white;
}
`,
};
