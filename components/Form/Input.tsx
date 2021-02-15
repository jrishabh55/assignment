import cx from 'classnames';
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  block?: boolean;
}

const Input: FC<InputProps> = ({ className, block = false, ...props }) => {
  return (
    <>
      <input
        className={cx(
          'p-4 shadow focus:outline-none border rounded-lg focus:border-gray-400 w-full',
          { block },
          className
        )}
        {...props}
      />
    </>
  );
};

export default Input;
