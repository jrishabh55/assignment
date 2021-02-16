import cookie from 'cookie';
import { query as q } from 'faunadb';
import { kebabCase } from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';
import { FAUNA_SECRET_COOKIE, faunaClient } from 'utils/fauna-auth';

export default async function getBoard(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { body, query } = req;
  const cookies = cookie.parse(req.headers.cookie ?? '');
  const faunaSecret = cookies[FAUNA_SECRET_COOKIE];

  if (!faunaSecret) {
    return res.status(401).send('Auth cookie missing.');
  }
  const {
    query: { slug }
  } = req;

  if (req.method === 'PUT') {
    const board = {
      title: body.title,
      slug: kebabCase(body.title) + '-' + Date.now(),
      description: body.description,
      status: 'close',
      board: q.Ref(q.Collection('Board'), query.board_id)
    };
    const ref = await faunaClient(faunaSecret).query(
      q.Update(q.Ref(q.Collection('Thread'), slug), { data: board })
    );
    return res.status(200).json({ board: ref });
  }
}
