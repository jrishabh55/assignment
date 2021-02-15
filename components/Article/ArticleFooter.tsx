import cx from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export type ArticleFooterProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const ArticleFooter: FC<ArticleFooterProps> = ({ className, children, ...props }) => {
  return (
    <footer className={cx('text-center p-1', className)} {...props}>
      {children}
    </footer>
  );
};

export default ArticleFooter;
