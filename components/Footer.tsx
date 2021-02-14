import { FC } from 'react';

const Footer: FC = () => {
  return (
    <>
      <footer className="border-t-2 p-2 flex-center text-center ">
        Built with &hearts; using Next.Js, TailwindCSS and FaunaDB. <br /> Deployed on Vercel By
        Rishabh Jain.
      </footer>
    </>
  );
};

export default Footer;
