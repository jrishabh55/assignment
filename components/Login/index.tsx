import Button from 'components/Button';
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
    <div className="card w-4/12 p-2 -mt-48 pb-10">
      <h1 className="text-lg mb-10 text-center border-b-2 pb-2">Login</h1>
      <form className="flex-center flex-col space-y-6 w-96 m-auto" onSubmit={onSubmit}>
        <Input name="username" placeholder="Username" block {...username} />
        <Input name="password" type="password" placeholder="Password" block {...username} />
        <Button className="mt-8" variant="info" type="submit" block bold>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
