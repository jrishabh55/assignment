import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Form/Input';
import { FC, FormEvent } from 'react';
import { useInput } from 'rooks';

export interface LoginProps {
  handleSubmit?: (arg: { username: string; password: string }) => void;
}

const Login: FC<LoginProps> = ({ handleSubmit }) => {
  const username = useInput('');
  const password = useInput('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit?.({ username: username.value, password: password.value });
  };

  return (
    <div className="card p-2 pb-6">
      <h1 className="text-lg mb-6 text-center border-b-2 pb-2">Login</h1>
      <Form className="w-96" onSubmit={onSubmit}>
        <Input name="username" placeholder="Username" block {...username} />
        <Input name="password" type="password" placeholder="Password" block {...username} />
        <Button className="mt-8" variant="info" type="submit" block bold>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
