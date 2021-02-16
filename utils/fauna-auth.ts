import cookie from 'cookie';
import faunadb, { Client, query as q } from 'faunadb';

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

export const getAllDocuments = async ({
  faunaSecret,
  collection
}: Record<string, string>): Promise<Record<string, unknown>> => {
  const boards: any = await faunaClient(faunaSecret).query(
    q.Map(
      q.Paginate(q.Documents(q.Collection(collection))),
      q.Lambda((x) => q.Get(x))
    )
  );
  return boards.data;
};

export const getAllDocumentsByIndex = async ({
  faunaSecret,
  index,
  param
}: Record<string, unknown>): Promise<Record<string, unknown>> => {
  const boards: any = await faunaClient(faunaSecret as string).query(
    q.Map(
      q.Paginate(q.Match(q.Index(index), param)),
      q.Lambda((x) => q.Get(x))
    )
  );
  return boards.data;
};
