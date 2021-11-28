import Image from 'next/image';
import { FC } from 'react';
import c from './ZoomIn.module.css';
import White_Cat from '@assets/images/white_cat.jpg';

interface Props {
  src: string;
}

const ZoomIn: FC<Props> = ({ src }) => {
  return (
    <div className={c.container}>
      <Image
        className={c.image}
        layout="responsive"
        src={White_Cat}
        alt="white cat"
      />
    </div>
  );
};

export default ZoomIn;
