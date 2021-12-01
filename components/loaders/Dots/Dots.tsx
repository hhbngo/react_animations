import { cls } from '@util/styles';
import c from './Dots.module.css';

const Dots = () => {
  return (
    <div className={c.container}>
      <div className={cls(c.dot, c.delay_one)}></div>
      <div className={cls(c.dot, c.delay_two)}></div>
      <div className={cls(c.dot, c.delay_three)}></div>
    </div>
  );
};

export default Dots;
