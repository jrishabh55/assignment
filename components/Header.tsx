import Input from 'components/Form/Input';
import Link from 'next/link';
import { FC } from 'react';

const Header: FC<{ showSearch?: boolean }> = ({ showSearch }) => {
  return (
    <>
      <header className="border-b-2 min:h-16 flex items-center p-2 overflow-hidden">
        <Link href="/">Skuad Reddit</Link>
        {showSearch && (
          <div className="w-96 ml-auto">
            <Input id="search" type="search" placeholder="Search" variant="md" />
          </div>
        )}
      </header>
    </>
  );
};

Header.defaultProps = { showSearch: false };

export default Header;
