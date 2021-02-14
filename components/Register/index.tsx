import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Form/Input';
import { FC, FormEvent } from 'react';
import { useInput } from 'rooks';

export interface RegisterProps {
  handleSubmit?: (arg: { email: string; username: string; password: string }) => void;
}

const Register: FC<RegisterProps> = ({ handleSubmit }) => {
  const username = useInput('');
  const email = useInput('');
  const password = useInput('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit?.({ email: email.value, username: username.value, password: password.value });
  };

  return (
    <div className="card p-2 pb-6">
      <h1 className="text-lg mb-6 text-center border-b-2 pb-2">Register</h1>
      <Form className="w-96" onSubmit={onSubmit}>
        <Input
          name="username"
          required
          min="4"
          max="12"
          placeholder="Username"
          block
          {...username}
        />
        <Input type="email" required name="email" placeholder="Email" block {...email} />
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
    </div>
  );
};

export default Register;
