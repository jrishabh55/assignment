import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import Register from 'components/Register';

const RegisterPage = () => {
  return (
    <div className="align-middle self-center mx-auto -mt-48">
      <Register />
    </div>
  );
};

export default RegisterPage;
