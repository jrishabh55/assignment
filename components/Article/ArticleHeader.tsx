import cx from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export type ArticleHeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const ArticleHeader: FC<ArticleHeaderProps> = ({ className, children, ...props }) => {
  return (
    <header className={cx('border border-b-0 shadow-md rounded-none p-2', className)} {...props}>
      {children}
    </header>
  );
};

export default ArticleHeader;
