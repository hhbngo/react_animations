import { Spinner } from '@components/loaders';

export default {
  component: Spinner,
  code: `import c from './Spinner.module.css';

/** 
 PROP-TYPES
  size?: 'sm' | 'md' | 'lg'; (optional)
  thickness?: 'thin' | 'normal' | 'thick'; (optional)
  color?: string; (optional)
**/

const Spinner = ({
  size = 'md',
  thickness = 'normal',
  color = 'black'
}) => {
  const spinnerStyles = {
    ...S_PRESETS[size],
    ...T_PRESETS[thickness],
    borderStyle: 'solid',
    borderColor: 'rgb(241, 241, 241)',
    borderTopColor: color,
  };

  return <div className={c.spinner} style={spinnerStyles}></div>;
};

const S_PRESETS = {
  sm: { width: 34, height: 34 },
  md: { width: 42, height: 42 },
  lg: { width: 50, height: 50 },
};

const T_PRESETS = {
  thin: { borderWidth: 2 },
  normal: { borderWidth: 4 },
  thick: { borderWidth: 6 },
};

ReactDOM.render(
  <Spinner
    color: 'rgb(0, 0, 0)'
  />,
  document.getElementById('root')
);
`,
  css: `.spinner {
  width: 42px;
  height: 42px;
  border: 2px solid rgb(241, 241, 241);
  border-top: 2px solid black;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
    
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
`,
};
