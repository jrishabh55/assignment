import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from 'react';
import { useRouter } from 'next/router';
import Login, { LoginProps } from 'components/Login';

const LoginPage: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
  const router = useRouter();

  const handleSubmit: LoginProps['onSubmit'] = () => {
    router.push('/');
  };

  return (
    <div className="align-middle self-center mx-auto -mt-48">
      <Login onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
