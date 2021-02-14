import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from 'react';
import Register, { RegisterProps } from 'components/Register';
import { useRouter } from 'next/router';

const RegisterPage: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
  const router = useRouter();
  const handleSubmit: RegisterProps['onSubmit'] = () => {
    router.push('/');
  };

  return (
    <div className="align-middle self-center mx-auto -mt-48">
      <Register onSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterPage;
