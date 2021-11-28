import Image from 'next/image';
import { FC } from 'react';
import c from './HoverText.module.css';
import Fox from '@assets/images/fox.jpg';

interface Props {
  src: string;
  text: string;
  textOffset?: string;
}

const HoverText: FC<Props> = ({ src, text, textOffset = 0 }) => {
  return (
    <div className={c.container}>
      <div className={c.overlay}>
        <p className={c.text} style={{ marginTop: '-20px' }}>
          Candy canes, gummi bears, icing, and marshmallows.
        </p>
      </div>
      <Image src={Fox} />
    </div>
  );
};

export default HoverText;
