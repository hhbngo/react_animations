import { CSSProperties, FC } from 'react';
import { spinner, dots, wave } from './loaders';
import { flip } from './cards';
import { leftToRight, slices, bubble, actionIcon } from './buttons';
import { accordion } from './info';
import { zoomIn, zoomOut, hoverText } from './images';
import { progress } from './misc';

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
  info: {
    accordion,
  },
  images: {
    zoomIn,
    zoomOut,
    hoverText,
  },
  misc: {
    progress,
    flip,
  },
};

export const CATAGORIES = Object.keys(DATA).map((c) => ({
  main: c,
  subs: Object.keys(DATA[c]),
}));
