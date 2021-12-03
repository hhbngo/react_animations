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
  gap: 10px;
}

.bar {
  width: 20px;
  height: 20px;
  background-color: #9b59b6;
  border-radius: 5px;
  animation: wave 1.5s ease-in-out infinite;
}

@keyframes wave {
  0% {
    height: 20px;
    transform: translateY(0px);
    background-color: #9b59b6;
  }
  25% {
    height: 90px;
    transform: translateY(-40px);
    background-color: #3498db;
  }
  50% {
    height: 20px;
    transform: translateY(0px);
    background-color: #9b59b6;
  }
  100% {
    height: 20px;
    transform: translateY(0px);
    background-color: #9b59b6;
  }
}`,
};
