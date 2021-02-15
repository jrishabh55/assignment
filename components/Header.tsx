import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <>
      <header className="border-b-2 h-16 flex items-center p-2">
        <Link href="/">Skuad Reddit</Link>
      </header>
    </>
  );
};

export default Header;
