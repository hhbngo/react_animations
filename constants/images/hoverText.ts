import { HoverText } from '@components/images';

export default {
  component: HoverText,
  containerStyles: {
    width: '200px',
    height: '200px',
  },
  code: `import c from './HoverText.module.css';

/** 
 PROP-TYPES
  src: string;
  text: string;
  alt?: string; (optional)
  textOffset?: string; (optional)
**/
 
// This component is fluid

const HoverText = ({ src, text, alt = 'image' , textOffset = 0 }) => {
  return (
    <div className={c.container}>
      <div className={c.overlay}>
        <p className={c.text} style={{ marginTop: textOffset }}>
          {text}
        </p>
      </div>
      <img src={src} alt={alt}/>
    </div>
  );
};

ReactDOM.render(
  <div style={{ width: 200, height: 200 }}>
    <HoverText
      src="https://www.hosting-site.com/fox_stare.jpg"
      text="Candy canes, gummi bears, icing, and marshmallows."
      alt="fox staring"
      textOffset="-20px"
    />
  </div>,
  document.getElementById('root')
);

`,
  css: `.container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.62);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.4s;
}

.text {
  color: white;
  font-size: 20px;
  line-height: 1.15;
}

.container:hover .overlay {
  opacity: 1;
}

`,
};
