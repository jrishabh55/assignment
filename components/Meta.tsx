import Head from 'next/head';
import { FC } from 'react';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Meta: FC<MetaProps> = ({ title, description, keywords, children }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description}></meta>
      <meta name="keywords" content={keywords}></meta>
      {children}
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Reddit Clone',
  description: 'This is reddit clone built for the purpose of skuad clone.',
  keywords: 'reddit, clone'
};

export default Meta;
