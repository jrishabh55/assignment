import Header from 'components/Header';
import Meta from 'components/Meta';
import { FC } from 'react';

import Footer from './Footer';

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <Meta />
        <Header />
        <main className="flex flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
