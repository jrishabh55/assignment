import cookie from 'cookie';
import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import { FAUNA_SECRET_COOKIE, faunaClient } from 'utils/fauna-auth';

export const profileApi = async (faunaSecret: string): Promise<string> => {
  const ref: { id: string } = await faunaClient(faunaSecret).query(q.Identity());
  return ref.id;
};

export default async function profile(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const cookies = cookie.parse(req.headers.cookie ?? '');
  const faunaSecret = cookies[FAUNA_SECRET_COOKIE];

  if (!faunaSecret) {
    return res.status(401).send('Auth cookie missing.');
  }

  res.status(200).json({ userId: await profileApi(faunaSecret) });
}
