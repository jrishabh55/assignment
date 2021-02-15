import CenterContainer from 'components/CenterContainer';
import Login, { LoginProps } from 'components/Login';
import { useRouter } from 'next/router';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

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
