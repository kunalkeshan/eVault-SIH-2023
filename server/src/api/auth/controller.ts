import { createToken, verifyToken } from './../../shared/token';
import { getClient, closeClient } from '../../loaders/database';
import LoggerInstance from '../../loaders/logger';
import User from './model';
import * as bcrypt from 'bcrypt';
import config from '../../config';

export async function createUser(client: User) {
  const database = await getClient(); // Obtain the database client connection

  try {
    // console.log(client.email, client.password);

    const results = await database.query(`SELECT * FROM users WHERE email = $1`, [client.email]);
    if (results.rows.length > 0) {
      throw {
        status: 400,
        message: 'User already exists',
      };
    }

    // hash the password and store in the database
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(client.password, salt);

    const result = await database.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`, [
      client.name,
      client.email,
      hash,
    ]);

    return {
      bool: true,
      message: 'Success, User created.',
      status: 200,
    };
  } catch (err) {
    LoggerInstance.error(err);
    return {
      bool: false, // Indicate that an error occurred
      message: err.message || 'Request Failed',
    };
  } finally {
    closeClient(database); // Close the client connection when done
  }
}
