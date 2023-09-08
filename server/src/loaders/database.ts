import { Db, MongoClient } from 'mongodb';
import config from '../config';

let db: Db;

async function initializeClient(): Promise<Db> {
  const client = await MongoClient.connect(config.databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ignoreUndefined: true,
  });

  return client.db();
}

export default async (): Promise<Db> => {
  if (!db) {
    db = await initializeClient();
  }

  return db;
};
