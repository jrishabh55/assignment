import cx from 'classnames';
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  block?: boolean;
  variant?: 'lg' | 'md' | 'sm';
}

const Input: FC<InputProps> = ({ className, block, variant, ...props }) => {
  return (
    <>
      <input
        className={cx(
          'shadow focus:outline-none border rounded-lg focus:border-gray-400 w-full',
          {
            block,
            ['p-4']: variant === 'lg',
            ['p-2']: variant === 'md',
            ['p-1']: variant === 'sm'
          },
          className
        )}
        {...props}
      />
    </>
  );
};

Input.defaultProps = {
  variant: 'lg',
  block: false
};

export default Input;
