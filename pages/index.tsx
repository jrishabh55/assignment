import Button from 'components/Button';
import CenterContainer from 'components/CenterContainer';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export default function Home(): ReactNode {
  const router = useRouter();

  return (
    <>
      <CenterContainer className="bg-transparent">
        <div className="flex flex-col space-y-3 w-48 bg-transparent">
          <Button variant="success" onClick={() => router.push('/login')}>
            Login
          </Button>
          <Button onClick={() => router.push('/register')}>Register</Button>
        </div>
      </CenterContainer>
    </>
  );
}
