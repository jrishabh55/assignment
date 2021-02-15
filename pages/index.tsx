import Button from 'components/Button';
import CenterContainer from 'components/CenterContainer';
import Login from 'components/Login';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <CenterContainer>
        <div className="flex flex-col space-y-3 w-48">
          <Button variant="success" onClick={() => router.push('/login')}>
            Login
          </Button>
          <Button onClick={() => router.push('/register')}>Register</Button>
        </div>
      </CenterContainer>
    </>
  );
}
