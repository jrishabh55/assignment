import CenterContainer from 'components/CenterContainer';
import Register, { RegisterProps } from 'components/Register';
import { stateContext, types } from 'context/stateContext';
import { useRouter } from 'next/router';
import { DetailedHTMLProps, FC, HTMLAttributes, useContext } from 'react';
import { api } from 'utils/api';

const RegisterPage: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
  const [, dispatch] = useContext(stateContext);
  const router = useRouter();

  const handleSubmit: RegisterProps['onSubmit'] = (body: any) => {
    console.log(body);
    api('auth/signup', { method: 'POST', body }).then((data) => {
      if (data.err) {
        return alert(data.err);
      }
      dispatch({ type: types.SET_USER, payload: data });
      router.push('/dashboard');
    });
  };

  return (
    <CenterContainer>
      <Register onSubmit={handleSubmit} />
    </CenterContainer>
  );
};

export default RegisterPage;
