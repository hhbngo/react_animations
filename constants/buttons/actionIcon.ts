import { ActionIcon } from '@components/buttons';

export default {
  component: ActionIcon,
  code: `import c from './ActionIcon.module.css';

/** 
 PROP-TYPES
  text: string;
  icon: ReactNode;
  onClick?: () => any; (optional)
**/

const ActionIcon = ({ text, icon, onClick }) => {
  return (
    <button className={c.btn} onClick={onClick ? onClick : () => {}}>
      <span className={c.btn_text}>{text}</span>
      <div className={c.btn_icon}>{icon}</div>
    </button>
  );
};

ReactDOM.render(
  <ActionIcon text="Submit" icon={<Check/>} />,
  document.getElementById('root')
);

`,
  css: `.btn {
  position: relative;
  padding: 12px 24px;
  border-radius: 12px;
  background-color: rgba(110, 231, 183);
  cursor: pointer;
  overflow: hidden;
}

.btn_icon {
  position: absolute;
  left: 0;
  bottom: -100%;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: transform 0.35s, opacity 0.25s;
}

.btn_text {
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  opacity: 1;
  transition: transform 0.35s, opacity 0.25s;
}

.btn:hover .btn_text {
  transform: translateY(-150%);
  opacity: 0;
}

.btn:hover .btn_icon {
  transform: translateY(-100%);
  opacity: 1;
}
`,
};
