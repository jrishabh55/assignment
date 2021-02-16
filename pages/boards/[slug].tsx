import Article, { ArticleBody, ArticleFooter, ArticleHeader } from 'components/Article';
import Button from 'components/Button';
import { stateContext, types } from 'context/stateContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect } from 'react';
import { api } from 'utils/api';

const Boards: FC = () => {
  const router = useRouter();
  const [{ boards, threads }, dispatch] = useContext(stateContext);
  const { slug } = router.query;
  const board = boards.find((it) => it.data.slug === slug);

  useEffect(() => {
    if (!board?.ref?.['@ref'].id) {
      router.replace('/dashboard');
      return;
    }
    api(`thread?board_id=${board?.ref?.['@ref'].id}`).then(({ threads }) => {
      console.log(threads);
      dispatch({ type: types.SET_THREADS, payload: threads });
    });
  }, [board, dispatch, router]);

  if (!board) {
    return <p>Failed</p>;
  }

  return (
    <>
      <section className="mt-4 mx-auto p-2 rounded max-w-screen-md self-start space-y-3 w-2/3">
        <div className="p-2 rounded rounded-b-none  border bg-transparent">
          <h2 className="flex justify-between text-3xl mb-4">
            <span className="border-b-2 p-2">{board?.data?.title}</span>
            <Button
              className="rounded-full w-10 h-10 flex items-center justify-center ml-auto text-lg"
              title="Add new thread"
              onClick={() => router.push(`/discussions/${board?.data.slug}/new`)}>
              &#43;
            </Button>
          </h2>
          <p className="text-sm">{board?.data?.description}</p>
        </div>
        {threads?.map(({ data: thread }) => (
          <Link key={thread.id} href={`/discussions/${thread.slug}`}>
            <Article className="max-h-48 cursor-pointer">
              <ArticleHeader className="border border-b-0 shadow-md rounded-none panel-header p-2 flex justify-between">
                {thread.title}{' '}
                <span
                  className={`${
                    thread.status === 'close' ? 'bg-red-500' : 'bg-green-500'
                  } p-1 rounded-full text-white flex-center w-20`}>
                  ({thread.status})
                </span>
              </ArticleHeader>
              <ArticleBody className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                {thread.description}
              </ArticleBody>
              <ArticleFooter className="grid grid-cols-2 divide-x divide-gray-500">
                <span>Author: {thread?.author?.username}</span>
                <span>Author: {thread?.author?.username}</span>
              </ArticleFooter>
            </Article>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Boards;
