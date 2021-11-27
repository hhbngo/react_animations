import { CSSProperties, FC } from 'react';
import { spinner } from './loaders';
import { flip } from './cards';
import { leftToRight, slices, bubble } from './buttons';

interface Data {
  [key: string]: {
    [key: string]: {
      component: FC<any>;
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
  buttons: {
    leftToRight,
    slices,
    bubble,
  },
  cards: {
    flip,
  },
};

export const CATAGORIES = Object.keys(DATA).map((c) => ({
  main: c,
  subs: Object.keys(DATA[c]),
}));
