import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Form/Input';
import Link from 'next/link';
import { FC, FormEvent } from 'react';
import { useInput } from 'rooks';

export interface LoginProps {
  onSubmit?: (arg: { username: string; password: string }) => void;
}

const Login: FC<LoginProps> = ({ onSubmit }) => {
  const username = useInput('');
  const password = useInput('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.({ username: username.value, password: password.value });
  };

  return (
    <div className="card p-2 pb-6">
      <h1 className="text-lg mb-6 text-center border-b-2 pb-2">Login</h1>
      <Form className="w-96" onSubmit={handleSubmit}>
        <Input
          name="username"
          required
          min="4"
          max="12"
          placeholder="Username"
          block
          {...username}
        />
        <Input
          type="password"
          required
          min="8"
          max="12"
          name="password"
          placeholder="Password"
          block
          {...password}
        />
        <Button className="mt-8" variant="info" type="submit" block bold>
          Login
        </Button>
      </Form>
      <div className="flex justify-end mt-2">
        <Link href="/register">
          <span className="text-right inline-block text-gray-400 underline cursor-pointer">
            &#x2190; Register
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
