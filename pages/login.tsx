import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from 'react';
import { useRouter } from 'next/router';
import Login, { LoginProps } from 'components/Login';
import CenterContainer from 'components/CenterContainer';

const LoginPage: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
  const router = useRouter();

  const handleSubmit: LoginProps['onSubmit'] = () => {
    router.push('/');
  };

  return (
    <CenterContainer>
      <Login onSubmit={handleSubmit} />
    </CenterContainer>
  );
};

export default LoginPage;
