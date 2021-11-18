import { FC, useEffect, useMemo, useState } from 'react';
import c from './Nav.module.css';
import { CATAGORIES } from '@constants';
import Item from './Item';
import { cls } from '@util/styles';

const Nav: FC = () => {
  const [navOpened, setNavOpened] = useState(false);

  const toggleNav = () => {
    setNavOpened(!navOpened);
  };

  const navLinks = useMemo(() => {
    return CATAGORIES.map((c) => (
      <Item
        main={c.main}
        subs={c.subs}
        key={c.main}
        onClick={() => setNavOpened(false)}
      />
    ));
  }, [CATAGORIES]);

  useEffect(() => {
    if (navOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [navOpened]);

  return (
    <nav className={c.container}>
      <div
        className={cls(c.backdrop, navOpened && c.active)}
        onClick={() => setNavOpened(false)}
      ></div>
      <div className={c.menu_btn} onClick={toggleNav}>
        <div className={c.line}></div>
        <div className={c.line}></div>
        <div className={c.line}></div>
      </div>
      <h1>React Animation Snippets</h1>
      <div className={cls(c.l_wrapper, navOpened && c.active)}>{navLinks}</div>
    </nav>
  );
};

export default Nav;
