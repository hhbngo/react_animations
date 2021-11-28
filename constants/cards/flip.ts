import { Flip } from '@components/cards';

export default {
  component: Flip,
  containerStyles: { width: '128px', height: '192px' },
  code: `import c from './Flip.module.css';

/**
 PROP-TYPES
  front: ReactNode;
  back: ReactNode;
  ! 'front' and 'back' container width should be 100%
**/  

const Flip = ({ front, back }) => {
  return (
    <div className={c.container}>
      <div className={c.wrapper}>
        <div className={c.front}>{front}</div>
        <div className={c.back}>{back}</div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <div style={{width: '128px', height: '192px'}}>
    <Flip 
      front={<PlayingCard symbol="♥" value="2"/>} 
      back={<PlayingCard symbol="♠" value="3"/>}
    />
  </div>,
  document.getElementById('root')
);
  `,
  css: `.container {
  width: 100%;
  height: 100%;
  perspective: 1000px;
}
  
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
}

.back {
  transform: rotateY(180deg);
}

.container:hover .wrapper {
  transform: rotateY(180deg);
}

`,
};
