import cx from 'classnames';
import { DetailedHTMLProps, FC, forwardRef, HTMLAttributes } from 'react';

export type ArticleProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  forwardRef: any;
};

const Article: FC<ArticleProps> = ({ className, children, forwardRef, ...props }) => {
  return (
    <article
      className={cx('flex flex-col w-full card overflow-hidden', className)}
      ref={forwardRef}
      {...props}>
      {children}
    </article>
  );
};
Article.displayName = 'Article';

// eslint-disable-next-line react/display-name
export default forwardRef((props, ref) => <Article {...props} forwardRef={ref} />);

export type { ArticleBodyProps } from './ArticleBody';
export { default as ArticleBody } from './ArticleBody';
export type { ArticleFooterProps } from './ArticleFooter';
export { default as ArticleFooter } from './ArticleFooter';
export type { ArticleHeaderProps } from './ArticleHeader';
export { default as ArticleHeader } from './ArticleHeader';
