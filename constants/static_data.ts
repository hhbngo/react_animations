import { CSSProperties, FC } from 'react';
import { spinner } from './loaders';

interface Data {
  [key: string]: {
    [key: string]: {
      component: FC;
      containerStyles?: CSSProperties;
      code: string;
      css: string;
    };
  };
}

export const DATA: Data = {
  loaders: {
    spinner,
  },
};

export const CATAGORIES = Object.keys(DATA).map((c) => ({
  main: c,
  subs: Object.keys(DATA[c]),
}));
