import Article, { ArticleBody, ArticleFooter, ArticleHeader } from 'components/Article';
import Button from 'components/Button';
import { stateContext, types } from 'context/stateContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect } from 'react';
import { api } from 'utils/api';

const Dashboard: FC = () => {
  const [{ boards }, dispatch] = useContext(stateContext);
  const router = useRouter();

  useEffect(() => {
    api('board').then(({ boards }) => {
      dispatch({ type: types.SET_BOARDS, payload: boards });
    });
  }, [dispatch]);

  return (
    <section className="mt-4 mx-auto p-2 rounded max-w-screen-md space-y-3 bg-transparent w-2/3">
      <Button
        className="rounded-full w-10 h-10 flex items-center justify-center ml-auto text-lg"
        title="Add new board"
        onClick={() => router.push('/boards/new')}>
        &#43;
      </Button>
      {boards.map(({ data: board, ref }) => (
        <Link key={ref['@ref'].id} href={`/boards/${board.slug}`}>
          <Article className="max-h-48 cursor-pointer">
            <ArticleHeader className="border border-b-0 shadow-md rounded-none panel-header p-2">
              {board.title}
            </ArticleHeader>
            <ArticleBody className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              {board.description}
            </ArticleBody>
            <ArticleFooter className="grid grid-cols-2 divide-x divide-gray-500">
              <span>Threads: {board?.threads?.length || 0}</span>
              <span>Mods: {board?.mods?.length}</span>
            </ArticleFooter>
          </Article>
        </Link>
      ))}
    </section>
  );
};

export default Dashboard;
