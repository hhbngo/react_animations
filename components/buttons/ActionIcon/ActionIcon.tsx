import { FC, ReactNode } from 'react';
import c from './ActionIcon.module.css';
import { Checkmark } from '@components/icons';

interface Props {
  text: string;
  icon: ReactNode;
  onClick?: () => any;
}

const ActionIcon: FC<Props> = ({ text, icon, onClick }) => {
  return (
    <button className={c.btn} onClick={onClick ? onClick : () => {}}>
      <span className={c.btn_text}>Submit</span>
      <div className={c.btn_icon}>
        <Checkmark />
      </div>
    </button>
  );
};

export default ActionIcon;
