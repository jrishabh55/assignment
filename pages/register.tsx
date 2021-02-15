import CenterContainer from 'components/CenterContainer';
import Register, { RegisterProps } from 'components/Register';
import { useRouter } from 'next/router';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

const RegisterPage: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
  const router = useRouter();
  const handleSubmit: RegisterProps['onSubmit'] = () => {
    router.push('/');
  };

  return (
    <CenterContainer>
      <Register onSubmit={handleSubmit} />
    </CenterContainer>
  );
};

export default RegisterPage;
