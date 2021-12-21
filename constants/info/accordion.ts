import { Accordion } from '@components/info';

export default {
  component: Accordion,
  containerStyles: {
    width: 300,
  },
  code: `import { useState, useMemo } from 'react';
import c from './Accordion.module.css';

/**
 PROP-TYPES
  title: string;
  body: string;
**/

const Accordion = ({ children }) => {
  return (
    <div className={c.container}>
      {children}
    </div>
  );
};

const Panel = ({title, body}) => {
  const [isOpen, setIsOpen] = useState(false);

  const bodyHeight = useMemo(() => {
    return Math.ceil(body.split(' ').length / 6) * 26 + 26;
  }, [body]);

  return (
    <>
      <div 
        className={c.header} 
        onClick={() => setIsOpen((o) => !o)}
      >
        <p>{title}</p>
        <div 
          className={c.icon} 
          style={{transform: 'rotate('+(isOpen ? 0 : 180)+'deg)'}}
        >
          <Chevron />
        </div>
      </div>
      <div 
        className={c.body} 
        style={{ height: isOpen ? bodyHeight : 0 }}
      >
        <div className={c.b_wrapper}>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(
  <div style={{width: 300}}>
    <Accordion>
      <Panel title="Product Info" body="..." />
      <Panel title="Item Details" body="..." />
      <Panel title="Dimensions" body="..." />
    </Accordion>
  </div>,
  document.getElementById('root')
);
  `,
  css: `.container {
  border-radius: 6px;
  overflow: hidden;
}
  
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: rgb(55, 65, 81);
  color: white;
  cursor: pointer;
}

.header p {
  font-size: 16px;
}

.icon {
  transition: transform 0.3s ease-out;
}

.body {
  overflow-y: hidden;
  background-color: rgb(107, 114, 128);
  color: rgb(229, 231, 235);
  transition: height 0.3s ease-out;
}

.b_wrapper {
  padding: 12px 16px;
}
`,
};
