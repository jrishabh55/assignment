import cx from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export type ArticleBodyProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const ArticleBody: FC<ArticleBodyProps> = ({ className, children }) => {
  return <main className={cx('border flex-grow rounded-none p-2', className)}>{children}</main>;
};

export default ArticleBody;
