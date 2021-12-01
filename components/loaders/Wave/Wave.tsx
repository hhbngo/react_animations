import { FC, useMemo } from 'react';
import c from './Wave.module.css';

interface Props {
  bars?: number;
}

const Wave: FC<Props> = ({ bars = 5 }) => {
  const setOfBars = useMemo(() => {
    const b: JSX.Element[] = [];
    for (let i = 0; i < bars; i++) {
      b.push(
        <div
          className={c.bar}
          style={{
            animationDelay: 0.2 * (i + 1) + 's',
            animationDuration: 0.3 * bars + 's',
          }}
          key={'bar' + (i + 1)}
        ></div>
      );
    }
    return b;
  }, [bars]);

  return <div className={c.container}>{setOfBars}</div>;
};

export default Wave;
