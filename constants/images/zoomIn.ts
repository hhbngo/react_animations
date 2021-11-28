import { ZoomIn } from '@components/images';

export default {
  component: ZoomIn,
  containerStyles: {
    width: '200px',
    height: '200px',
  },
  code: `import c from './ZoomIn.module.css';

/** 
 PROP-TYPES
  src: string;
  alt?: string; (optional)
**/
 
// This component is fluid

const ZoomIn = ({ src, alt = "image" }) => {
  return (
    <div className={c.container}>
      <img
        className={c.image}
        src={src}
        alt={alt}
      />
    </div>
  );
};

ReactDOM.render(
  <div style={{ width: 200, height: 200 }}>
    <ZoomIn
      src="https://www.hosting-site.com/white_cat.jpg"
      alt="white cat"
    />
  </div>,
  document.getElementById('root')
);

`,
  css: `.container {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}

.image {
  background-position: center;
  transition: transform 0.5s;
}

.container:hover .image {
  transform: scale(1.22);
}
`,
};
