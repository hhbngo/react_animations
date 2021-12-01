import { CSSProperties, FC } from 'react';
import { spinner, dots, wave } from './loaders';
import { flip } from './cards';
import { leftToRight, slices, bubble, actionIcon } from './buttons';
import { zoomIn, zoomOut, hoverText } from './images';

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
    dots,
    wave,
  },
  buttons: {
    leftToRight,
    actionIcon,
    slices,
    bubble,
  },
  images: {
    zoomIn,
    zoomOut,
    hoverText,
  },
  cards: {
    flip,
  },
};

export const CATAGORIES = Object.keys(DATA).map((c) => ({
  main: c,
  subs: Object.keys(DATA[c]),
}));
