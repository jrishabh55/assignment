import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import { faunaClient, serializeFaunaCookie, serverClient } from 'utils/fauna-auth';

export default async function login(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { email, password } = await req.body;

  try {
    if (!email || !password) {
      throw new Error('Email and password must be provided.');
    }

    const loginRes: { secret: string; ref: any } = await serverClient.query(
      q.Login(q.Match(q.Index('unique_User_email'), email), {
        password
      })
    );

    if (!loginRes.secret) {
      throw new Error('No secret present in login query response.');
    }
    console.log(loginRes);

    const user: any = await faunaClient(loginRes.secret).query(q.Get(q.Identity()));

    const cookieSerialized = serializeFaunaCookie(loginRes.secret);

    res.setHeader('Set-Cookie', cookieSerialized);
    res.status(200).json(user.data);
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
}
