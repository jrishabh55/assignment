import Head from 'next/head';
import Login from 'components/Login';
import Layout from 'components/Layout';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Skuad Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </Layout>
  );
}
