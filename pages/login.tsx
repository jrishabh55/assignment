import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from 'react';
import { useRouter } from 'next/router';
import Login from 'components/Login';

const LoginPage: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname !== 'pathname') {
    }
  }, []);

  return (
    <div className="align-middle self-center mx-auto -mt-48">
      <Login />
    </div>
  );
};

export default LoginPage;
