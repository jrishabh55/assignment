import cx from 'classnames';
import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

export interface TextAreaProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  block?: boolean;
  variant?: 'lg' | 'md' | 'sm';
}

const TextArea: FC<TextAreaProps> = ({ className, block, variant, children, ...props }) => {
  return (
    <>
      <textarea
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
        {...props}>
        {children}
      </textarea>
    </>
  );
};

TextArea.defaultProps = {
  variant: 'lg',
  block: false
};

export default TextArea;
