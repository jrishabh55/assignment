import cookie from 'cookie';
import { query as q } from 'faunadb';
import { kebabCase } from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';
import { FAUNA_SECRET_COOKIE, faunaClient, getAllDocumentsByIndex } from 'utils/fauna-auth';

export default async function boardApi(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { body, query } = req;
  const cookies = cookie.parse(req.headers.cookie ?? '');
  const faunaSecret = cookies[FAUNA_SECRET_COOKIE];

  if (!faunaSecret) {
    return res.status(401).json({ err: 'Auth cookie missing.' });
  }

  if (!query.board_id) {
    return res.status(500).send({ err: 'board_id missing.' });
  }

  try {
    if (req.method === 'GET') {
      return res.status(200).json({
        threads: await getAllDocumentsByIndex({
          index: 'board_threads_by_board',
          param: q.Ref(q.Collection('Board'), query.board_id),
          faunaSecret
        })
      });
    }

    if (req.method === 'POST') {
      const board = {
        title: body.title,
        slug: kebabCase(body.title) + '-' + Date.now(),
        description: body.description,
        status: 'open',
        board: q.Ref(q.Collection('Board'), query.board_id)
      };
      const ref = await faunaClient(faunaSecret).query(
        q.Create(q.Collection('Thread'), { data: board })
      );
      return res.status(200).json({ board: ref });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

export const config = {};
