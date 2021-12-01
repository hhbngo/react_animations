import { CSSProperties, FC } from 'react';
import c from './Spinner.module.css';

interface Props {
  size: 'sm' | 'md' | 'lg';
  thickness?: 'thin' | 'normal' | 'thick';
  color?: string;
}

const S_PRESETS: { [key: string]: { width: number; height: number } } = {
  sm: { width: 34, height: 34 },
  md: { width: 42, height: 42 },
  lg: { width: 50, height: 50 },
};

const T_PRESETS: { [key: string]: { borderWidth: number } } = {
  thin: { borderWidth: 2 },
  normal: { borderWidth: 4 },
  thick: { borderWidth: 6 },
};

const Spinner: FC<Props> = ({
  size = 'md',
  thickness = 'normal',
  color = 'black',
}) => {
  const spinnerStyles: CSSProperties = {
    ...S_PRESETS[size],
    ...T_PRESETS[thickness],
    borderStyle: 'solid',
    borderColor: 'rgb(241, 241, 241)',
    borderTopColor: color,
  };

  return <div className={c.spinner} style={spinnerStyles}></div>;
};

export default Spinner;
