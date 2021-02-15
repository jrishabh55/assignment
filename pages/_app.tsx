import '../styles/globals.scss';

import Layout from 'components/Layout';
import { ComponentClass, FC, ReactNode } from 'react';

function MyApp({
  Component,
  pageProps
}: {
  Component: ComponentClass | FC;
  pageProps: Record<string, unknown>;
}): ReactNode {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
