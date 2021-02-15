import cx from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export type ArticleProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Article: FC<ArticleProps> = ({ className, children, ...props }) => {
  return (
    <article className={cx('flex flex-col w-full card overflow-hidden', className)} {...props}>
      {children}
    </article>
  );
};

export default Article;

export type { ArticleBodyProps } from './ArticleBody';
export { default as ArticleBody } from './ArticleBody';
export type { ArticleFooterProps } from './ArticleFooter';
export { default as ArticleFooter } from './ArticleFooter';
export type { ArticleHeaderProps } from './ArticleHeader';
export { default as ArticleHeader } from './ArticleHeader';
