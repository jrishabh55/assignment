import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cx from 'classnames';

const CenterContainer: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  className
}) => <div className={cx('align-middle self-center mx-auto -mt-48', className)}>{children}</div>;

export default CenterContainer;
