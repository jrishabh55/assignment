import Button from 'components/Button';
import CenterContainer from 'components/CenterContainer';
import { stateReducer } from 'context/reducers/stateReducer';
import StateContext, { defaultState } from 'context/stateContext';
import { useRouter } from 'next/router';
import { ReactNode, useReducer } from 'react';

export default function Home(): ReactNode {
  const [state, dispatch] = useReducer(stateReducer, defaultState);
  const router = useRouter();
  return (
    <>
      <StateContext value={[state, dispatch]}>
        <CenterContainer className="bg-transparent">
          <div className="flex flex-col space-y-3 w-48 bg-transparent">
            <Button variant="success" onClick={() => router.push('/login')}>
              Login
            </Button>
            <Button onClick={() => router.push('/register')}>Register</Button>
          </div>
        </CenterContainer>
      </StateContext>
    </>
  );
}
