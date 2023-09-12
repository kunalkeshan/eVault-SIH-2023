import { Client } from 'pg';

const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}`;

export async function getClient() {
  const client = new Client({
    connectionString: connectionString,
    ssl: true,
  });

  try {
    await client.connect();
    return client;
  } catch (err) {
    client.end(); // Close the client if there's an error during connection
    throw err;
  }
}

export async function closeClient(client: Client) {
  await client.end();
}
