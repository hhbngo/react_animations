import { Dots } from '@components/loaders';

export default {
  component: Dots,
  code: `import c from './Dots.module.css';

function cls(...classes) {
  return classes.filter(Boolean).join(' ');
};

const Dots = () => {
  return (
    <div className={c.container}>
      <div className={cls(c.dot, c.delay_one)}></div>
      <div className={cls(c.dot, c.delay_two)}></div>
      <div className={cls(c.dot, c.delay_three)}></div>
    </div>
  );
};

ReactDOM.render(
  <Dots/>,
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
