import { Progress } from '@components/Misc';

export default {
  component: Progress,
  containerStyles: { width: '80%', maxWidth: 450 },
  code: `import c from './Progress.module.css';

/** 
 PROP-TYPES
  percentage: number;
**/

const Progress = ({ percentage = 0 }) => {
  const getPercent = () => {
    let p = percentage;
    if (percentage > 100) p = 100;
    else if (percentage < 0) p = 0;
    return p + '%';
  }

  return (
    <div className={c.container}>
      <div 
        className={c.inner} 
        style={{ width: getPercent() }}
      ></div>
    </div>
  );
};

ReactDOM.render(
  <Progress percentage={20} />,
  document.getElementById('root')
);
`,
  css: `.container {
  width: 100%;
  height: 10px;
  border-radius: 12px;
  background-color: rgb(236, 236, 236);
}

.inner {
  height: 100%;
  border-radius: 12px;
  background-color: rgb(110, 231, 183);
  transition: width 0.4s ease-out;
}`,
};
