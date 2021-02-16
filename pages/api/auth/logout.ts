import cookie from 'cookie';
import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import { FAUNA_SECRET_COOKIE, faunaClient } from 'utils/fauna-auth';

export default async function logout(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const cookies = cookie.parse(req.headers.cookie ?? '');
  const faunaSecret = cookies[FAUNA_SECRET_COOKIE];
  if (!faunaSecret) {
    // Already logged out.
    return res.status(200).end();
  }
  // Invalidate secret (ie. logout from Fauna).
  await faunaClient(faunaSecret).query(q.Logout(false));
  // Clear cookie.
  const cookieSerialized = cookie.serialize(FAUNA_SECRET_COOKIE, '', {
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: -1,
    httpOnly: true,
    path: '/'
  });
  res.setHeader('Set-Cookie', cookieSerialized);
  res.status(200).end();
}
