import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import Login from 'components/Login';

const LoginPage = () => {
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
