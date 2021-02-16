import '../styles/globals.scss';

import Layout from 'components/Layout';
import { stateReducer } from 'context/reducers/stateReducer';
import StateContext, { defaultState } from 'context/stateContext';
import { ComponentClass, FC, ReactNode, useEffect, useReducer } from 'react';

function MyApp({
  Component,
  pageProps
}: {
  Component: ComponentClass | FC;
  pageProps: Record<string, unknown>;
}): ReactNode {
  const [state, dispatch] = useReducer(stateReducer, defaultState);

  useEffect(() => {
    console.log('%c State changed', 'color: red');
    console.log(state);
  }, [state]);

  return (
    <StateContext value={[state, dispatch]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
