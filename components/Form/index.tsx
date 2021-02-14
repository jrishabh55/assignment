import cx from 'classnames';
import { DetailedHTMLProps, FC, FormHTMLAttributes } from 'react';

export interface FormProps
  extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

const Form: FC<FormProps> = ({ children, className, ...props }) => (
  <form className={cx('flex-center flex-col space-y-3 m-auto', className)} {...props}>
    {children}
  </form>
);

export default Form;
