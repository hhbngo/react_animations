import { Wave } from '@components/loaders';

export default {
  component: Wave,
  containerStyles: { height: 2, padding: '25px 0' },
  code: `import { useMemo } from 'react';
import c from './Wave.module.css';

/** 
 PROP-TYPES
  bars?: number; (optional)
**/

const Wave = ({ bars = 5 }) => {
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

ReactDOM.render(
  <Wave/>,
  document.getElementById('root')
);
`,
  css: `.container {
  display: flex;
  justify-content: space-between;
  width: 64px;
}

.dot {
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: rgb(212, 212, 212);
  transition: transform 0.5s;
  animation: pulse 1s linear infinite;
}

.delay_one {
  animation-delay: 0.2s;
}

.delay_two {
  animation-delay: 0.4s;
}

.delay_three {
  animation-delay: 0.6s;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0.42);
  }
  50% {
    transform: scale(1);
  }
}`,
};
