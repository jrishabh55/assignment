import Article, { ArticleBody, ArticleFooter, ArticleHeader } from 'components/Article';
import { boards } from 'mocks/board';
import Link from 'next/link';
import React, { FC } from 'react';

const Dashboard: FC = () => {
  return (
    <section className="mt-4 mx-auto p-2 rounded max-w-screen-md space-y-3 bg-transparent">
      {boards.map((board) => (
        <Link key={board.id} href={`/boards/${board.slug}`}>
          <Article className="max-h-48 h-48 cursor-pointer">
            <ArticleHeader className="border border-b-0 shadow-md rounded-none panel-header p-2">
              {board.title}
            </ArticleHeader>
            <ArticleBody className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              {board.description}
            </ArticleBody>
            <ArticleFooter className="grid grid-cols-2 divide-x divide-gray-500">
              <span>Discussions: {board.discussions.length}</span>
              <span>Owner: {board.author.username}</span>
            </ArticleFooter>
          </Article>
        </Link>
      ))}
    </section>
  );
};

export default Dashboard;
