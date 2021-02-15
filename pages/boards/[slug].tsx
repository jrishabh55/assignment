import Article, { ArticleBody, ArticleFooter, ArticleHeader } from 'components/Article';
import { boards } from 'mocks/board';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const Boards: FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const board = boards.find((it) => it.slug === slug);

  if (!board) {
    return <p>Failed</p>;
  }

  return (
    <>
      <section className="mt-4 mx-auto p-2 rounded max-w-screen-md space-y-3 bg-transparent">
        <div className="p-2 rounded rounded-b-none  border bg-transparent">
          <h2 className="text-3xl mb-4">
            <span className="border-b-2 p-2">{board.title}</span>
          </h2>
          <p className="text-sm">{board.description}</p>
        </div>
        {board.discussions.map((discussion) => (
          <Link key={discussion.id} href={`/discussions/${discussion.slug}`}>
            <Article className="max-h-48 cursor-pointer">
              <ArticleHeader className="border border-b-0 shadow-md rounded-none panel-header p-2">
                {discussion.title}
              </ArticleHeader>
              <ArticleBody className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                {discussion.description}
              </ArticleBody>
              <ArticleFooter className="grid grid-cols-2 divide-x divide-gray-500">
                <span>Author: {discussion.author.username}</span>
                <span>Author: {discussion.author.username}</span>
              </ArticleFooter>
            </Article>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Boards;
