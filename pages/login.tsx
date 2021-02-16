import CenterContainer from 'components/CenterContainer';
import Login, { LoginProps } from 'components/Login';
import { stateContext, types } from 'context/stateContext';
import { useRouter } from 'next/router';
import { DetailedHTMLProps, FC, HTMLAttributes, useContext } from 'react';
import { api } from 'utils/api';

const LoginPage: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
  const [, dispatch] = useContext(stateContext);
  const router = useRouter();

  const handleSubmit: LoginProps['onSubmit'] = (body: any) => {
    api('auth/login', { method: 'POST', body }).then((data) => {
      if (data.err) {
        return alert(data.err);
      }
      dispatch({ type: types.SET_USER, payload: data });
      router.push('/dashboard');
    });
  };

  return (
    <CenterContainer>
      <Login onSubmit={handleSubmit} />
    </CenterContainer>
  );
};

export default LoginPage;
