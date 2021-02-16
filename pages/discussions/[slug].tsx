import Article, { ArticleBody, ArticleHeader } from 'components/Article';
import Button from 'components/Button';
import TextArea from 'components/Form/TextArea';
import { stateContext, types } from 'context/stateContext';
import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect } from 'react';
import { api } from 'utils/api';

const Discussion: FC = () => {
  const [{ threads, comments }, dispatch] = useContext(stateContext);
  const router = useRouter();
  const { slug } = router.query;
  const thread = threads.find((it) => it.data.slug === slug);

  useEffect(() => {
    if (!thread?.ref?.['@ref'].id) {
      router.replace('/dashboard');
    }
    api(`thread/${thread?.ref?.['@ref'].id}/comments`).then(({ comments }) => {
      dispatch({ type: types.SET_COMMENTS, payload: comments });
    });
  }, [dispatch, thread, router]);

  return (
    <>
      <section className="mt-4 mx-auto p-2 rounded max-w-screen-md self-start w-3/4">
        <div className="p-2 rounded rounded-b-none  border bg-transparent">
          <h2 className="text-3xl mb-4">
            <span className="border-b-2 p-2">{thread?.data?.title}</span>
          </h2>
          <blockquote className="text-sm">{thread?.data?.description}</blockquote>
        </div>
        <h2 className="text-xl my-6">
          <span className="border-b-2 p-2">Comments ({comments.length})</span>
        </h2>
        <section className="space-y-3">
          {comments.map(({ data: comment, ref }) => (
            <Article key={ref['@ref'].id} className="max-h-48">
              <ArticleHeader className="grid grid-cols-2 divide-x divide-gray-500">
                <div>By: {comment?.author?.username}</div>
                <div className="flex pr-4 text-sm items-center justify-end">
                  Date: {comment.timestamp}
                </div>
              </ArticleHeader>
              <ArticleBody className="text-sm">{comment.description}</ArticleBody>
            </Article>
          ))}
        </section>
        <section className="flex flex-col">
          <TextArea className="mt-4" placeholder="Enter your comment here."></TextArea>
          <Button className="p-1 mt-2 mr-2 w-2/12 self-end">Comment</Button>
        </section>
      </section>
    </>
  );
};

export default Discussion;
