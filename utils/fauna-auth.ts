import cookie from 'cookie';
import faunadb, { Client } from 'faunadb';

export const FAUNA_SECRET_COOKIE = 'faunaSecret';

export const serverClient = new faunadb.Client({
  secret: process.env.FAUNA_SERVER_KEY
});

// Used for any authed requests.
export const faunaClient = (secret: string): Client =>
  new Client({
    secret
  });

export const serializeFaunaCookie = (userSecret: string): string => {
  const cookieSerialized = cookie.serialize(FAUNA_SECRET_COOKIE, userSecret, {
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 72576000,
    httpOnly: true,
    path: '/'
  });
  return cookieSerialized;
};
