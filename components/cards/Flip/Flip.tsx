import { FC, ReactNode } from 'react';
import c from './Flip.module.css';
import { PlayingCard } from '@components/Misc';

interface Props {
  front: ReactNode;
  back: ReactNode;
}

const Flip: FC<Props> = ({ front, back }) => {
  return (
    <div className={c.container}>
      <div className={c.wrapper}>
        <div className={c.front}>
          <PlayingCard symbol="♥" value="2" />
        </div>
        <div className={c.back}>
          <PlayingCard symbol="♠" value="3" />
        </div>
      </div>
    </div>
  );
};

export default Flip;
