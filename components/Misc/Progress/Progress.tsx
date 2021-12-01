import { cls } from '@util/styles';
import { useState } from 'react';
import c from './Progress.module.css';

const Progress = () => {
  const [amt, setAmt] = useState(20);

  const handleDec = () => {
    let v = amt - 20;
    setAmt(v >= 0 ? v : 0);
  };

  const handleInc = () => {
    let v = amt + 20;
    setAmt(v <= 100 ? v : 100);
  };

  return (
    <>
      <div className={c.container}>
        <div className={c.inner} style={{ width: amt + '%' }}></div>
      </div>
      <div className={c.btn_wrapper}>
        <button className={cls(c.btn, c.dec)} onClick={handleDec}>
          -20%
        </button>
        <button className={cls(c.btn, c.inc)} onClick={handleInc}>
          +20%
        </button>
      </div>
    </>
  );
};

export default Progress;
