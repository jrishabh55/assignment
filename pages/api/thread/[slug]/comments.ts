import cookie from 'cookie';
import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import { FAUNA_SECRET_COOKIE, faunaClient, getAllDocumentsByIndex } from 'utils/fauna-auth';

export default async function getBoard(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const {
    body,
    query: { slug }
  } = req;
  const cookies = cookie.parse(req.headers.cookie ?? '');
  const faunaSecret = cookies[FAUNA_SECRET_COOKIE];

  if (!faunaSecret) {
    return res.status(401).json({ err: 'Auth cookie missing' });
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      comments: await getAllDocumentsByIndex({
        index: 'comment_thread_by_thread',
        param: q.Ref(q.Collection('Thread'), slug),
        faunaSecret
      })
    });
  }

  if (req.method === 'POST') {
    if (!body.comment) {
      return res.status(500).send({ err: 'comment is missing.' });
    }

    const board = {
      comment: body.comment,
      thread: q.Ref(q.Collection('Thread'), slug),
      user: q.Identity()
    };
    const ref = await faunaClient(faunaSecret).query(
      q.Create(q.Collection('Comment'), { data: board })
    );
    return res.status(200).json({ comment: ref });
  }
}
