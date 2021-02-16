import cookie from 'cookie';
import { query as q } from 'faunadb';
import { kebabCase } from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';
import { FAUNA_SECRET_COOKIE, faunaClient, getAllDocuments } from 'utils/fauna-auth';

export default async function boardApi(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { body } = req;
  const cookies = cookie.parse(req.headers.cookie ?? '');
  const faunaSecret = cookies[FAUNA_SECRET_COOKIE];

  if (!faunaSecret) {
    return res.status(401).send('Auth cookie missing.');
  }

  try {
    if (req.method === 'GET') {
      return res
        .status(200)
        .json({ boards: await getAllDocuments({ collection: 'Board', faunaSecret }) });
    }

    if (req.method === 'POST') {
      const board = {
        title: body.title,
        slug: kebabCase(body.title) + '-' + Date.now(),
        description: body.description,
        mods: [q.Identity()]
      };
      const ref = await faunaClient(faunaSecret).query(
        q.Create(q.Collection('Board'), { data: board })
      );
      return res.status(200).json({ board: ref });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

export const config = {};
