import { createToken, verifyToken } from './../../shared/token';
import { getClient, closeClient } from '../../loaders/database';
import LoggerInstance from '../../loaders/logger';
import User, { LoginResponse } from './model';
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

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
  try {
    const database = await getClient(); // Obtain the database client connection
    const results = await database.query(`SELECT * FROM users WHERE email = $1`, [email]);
    if (results.rows.length === 0) {
      throw {
        status: 400,
        message: 'User does not exists, please register first',
      };
    } else {
      if (bcrypt.compareSync(password, results.password)) {
        return {
          message: 'Login Successful',
          status: 200,
          accessToken: createToken({ id: results._id.toString() }, config.jwtSecret, '1d'),
          refreshToken: createToken({ id: results._id.toString() }, config.jwtSecret, '2d'),
        };
      } else {
        throw {
          message: 'Password does not match',
          status: 401,
        };
      }
    }
  } catch (err) {
    LoggerInstance.error(err);
    return {
      message: err.message || 'Request Failed',
      status: err.status || 500,
    };
  }
}

export async function getProfile(token: string): Promise<User> {
  let id: string;
  try {
    const database = await getClient(); // Obtain the database client connection
    id = verifyToken(token, config.jwtSecret).id;
    const results = await database.query(`SELECT * FROM users WHERE id = $1`, [token]);
    if (results.rows.length === 0) {
      throw {
        status: 400,
        message: 'User not found!',
      };
    }

    return results.rows[0];
  } catch (e) {
    LoggerInstance.error(e);
    throw {
      message: 'Unauthorized Access',
      status: 401,
    };
  }
}
