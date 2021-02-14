import { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import cx from 'classnames';

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
