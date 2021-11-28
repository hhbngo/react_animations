import { FC } from 'react';
import c from './ZoomOut.module.css';
import Image from 'next/image';
import FattyCorgi from '@assets/images/fatty_corgi.jpg';

interface Props {
  src: string;
  alt?: string;
}

const ZoomOut: FC<Props> = ({ src, alt = 'image' }) => {
  return (
    <div className={c.container}>
      <div className={c.image_wrapper}>
        <Image src={FattyCorgi} alt="fatty corgi" layout="fixed" />
      </div>
    </div>
  );
};

export default ZoomOut;
