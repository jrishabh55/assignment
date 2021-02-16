import Article, { ArticleBody, ArticleHeader } from 'components/Article';
import Button from 'components/Button';
import TextArea from 'components/Form/TextArea';
import { stateContext, types } from 'context/stateContext';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FC, useCallback, useContext, useEffect, useState } from 'react';
import { api } from 'utils/api';

const Discussion: FC = () => {
  const [comment, setComment] = useState('');
  const [{ threads, comments }, dispatch] = useContext(stateContext);
  const router = useRouter();
  const { slug } = router.query;
  const thread = threads.find((it) => it.data.slug === slug);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const fetchComments = useCallback(
    () =>
      api(`thread/${thread?.ref?.['@ref'].id}/comments`).then(({ comments }) => {
        dispatch({ type: types.SET_COMMENTS, payload: comments });
      }),
    [dispatch, thread]
  );

  const closeThread = () => {
    api(`thread/${thread?.ref?.['@ref'].id}?board_id=${thread.data.board['@ref'].id}`, {
      method: 'PUT',
      body: { ...thread?.data }
    }).then(() => {
      router.push('/dashboard');
    });
  };

  const saveComment = (e: any) => {
    e.preventDefault();

    api(`thread/${thread?.ref?.['@ref'].id}/comments`, {
      method: 'POST',
      body: { comment } as any
    }).then(() => {
      fetchComments();
      setComment('');
    });
  };

  useEffect(() => {
    if (!thread?.ref?.['@ref'].id) {
      router.replace('/dashboard');
    }
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!thread) {
    return <span>Failed</span>;
  }

  return (
    <>
      <section className="mt-4 mx-auto p-2 rounded max-w-screen-md self-start w-3/4">
        <div className="p-2 rounded rounded-b-none  border bg-transparent">
          <h2 className="text-3xl mb-4 flex justify-between">
            <span className="border-b-2 p-2">{thread?.data?.title}</span>
            {thread?.data?.status === 'open' && (
              <Button
                className="rounded-full w-24 h-10 flex items-center justify-center ml-auto text-lg"
                title="Add new thread"
                variant="danger"
                onClick={closeThread}>
                Close
              </Button>
            )}
            {thread?.data?.status === 'close' && (
              <span className="bg-red-500 flex-center rounded-lg p-2 text-white">Closed</span>
            )}
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
                  Date: {new Date(comment.timestamp).toLocaleString()}
                </div>
              </ArticleHeader>
              <ArticleBody className="text-sm">{comment.comment}</ArticleBody>
            </Article>
          ))}
        </section>
        <section className="flex flex-col">
          <TextArea
            className="mt-4"
            placeholder="Enter your comment here."
            disabled={thread?.data?.status !== 'open'}
            onChange={handleChange}>
            {comment}
          </TextArea>
          <Button
            className="p-1 mt-2 mr-2 w-2/12 self-end"
            disabled={comment.length <= 5 || thread?.data?.status !== 'open'}
            onClick={saveComment}>
            Comment
          </Button>
        </section>
      </section>
    </>
  );
};

export default Discussion;
