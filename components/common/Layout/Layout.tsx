import { FC } from 'react';
import c from './Layout.module.css';
import Nav from '@components/common/Nav';

const Layout: FC = ({ children }) => {
  return (
    <div className={c.container}>
      <Nav />
      <main className={c.main}>{children}</main>
    </div>
  );
};

export default Layout;
