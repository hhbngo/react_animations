import { ZoomOut } from '@components/images';

export default {
  component: ZoomOut,
  containerStyles: {
    width: '200px',
    height: '200px',
  },
  code: `import c from './ZoomOut.module.css';

/** 
 PROP-TYPES
  src: string;
  alt?: string; (optional)
**/
 
// This component is fluid

const ZoomOut = ({ src, alt = "image" }) => {
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
    <ZoomOut
      src="https://www.hosting_site.com/fatty_corgi.jpg"
      alt="fatty corgi"
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
  width: 100%;
  height: 100%;
  transform: scale(2);
  transition: transform 0.5s;
}

.container:hover .image {
  transform: scale(1.3);
}
`,
};
