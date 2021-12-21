import { FC, useMemo, useState } from 'react';
import c from './Accordion.module.css';
import { cls } from '@util/styles';
import { Chevron } from '@components/icons';

interface PanelProps {
  title: string;
  body: string;
}

const DATA = [
  {
    title: 'Product Info',
    body: 'Macaroon biscuit dragée chupa chups cookie wafer jelly beans.',
  },
  {
    title: 'Item Details',
    body: 'Sesame snaps caramels icing pastry gummi bears pudding cotton candy.',
  },
  {
    title: 'Dimensions',
    body: ' Jelly cookie gummies tootsie roll halvah tootsie roll apple pie.',
  },
];

const Accordion: FC & { Panel: FC<PanelProps> } = () => {
  return (
    <div className={c.container}>
      {DATA.map(({ title, body }) => (
        <Accordion.Panel key={title} title={title} body={body} />
      ))}
    </div>
  );
};

Accordion.Panel = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  const bodyHeight = useMemo((): number => {
    return Math.ceil(body.split(' ').length / 6) * 26 + 26;
  }, [body]);

  return (
    <div>
      <div className={c.header} onClick={() => setIsOpen((o) => !o)}>
        <p>{title}</p>
        <div className={cls(c.icon, isOpen && c.flipped)}>
          <Chevron />
        </div>
      </div>
      <div className={c.body} style={{ height: isOpen ? bodyHeight : 0 }}>
        <div className={c.b_wrapper}>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
