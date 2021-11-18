import Link from 'next/link';
import { FC, useState } from 'react';
import c from './Item.module.css';

interface Props {
  main: string;
  subs: string[];
  onClick: () => void;
}

const Item: FC<Props> = ({ main, subs, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={c.container}>
      <div className={c.label} onClick={() => setIsOpen(!isOpen)}>
        {main}
      </div>
      <div
        className={c.links}
        style={{ height: isOpen ? 32 * subs.length + 'px' : 0 }}
      >
        {subs.map((s) => (
          <Link href={'/' + main + '/' + s} key={s}>
            <a onClick={onClick}>{s}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Item;
