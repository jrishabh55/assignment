import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from 'react';
import Register, { RegisterProps } from 'components/Register';
import { useRouter } from 'next/router';
import CenterContainer from 'components/CenterContainer';

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
