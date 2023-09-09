import { createToken, verifyToken } from './../../shared/token';
import getClient from '../../loaders/database'; // Adjust the import based on your folder structure
import LoggerInstance from '../../loaders/logger';
import User from './model';
import * as bcrypt from 'bcrypt';
import config from '../../config';

export async function createUser(user: User) {
  try {
    console.log(user.email, user.password);
    const database = await getClient(); // Obtain the database client connection

    const results = await database.query(`SELECT * FROM users WHERE email = $1`, [user.email]);

    console.log(results.rows);
  } catch (err) {
    LoggerInstance.error(err);
    throw err;
  }
}

// if (results.rows.length > 0) {
//   const user = results.rows[0];

//   bcrypt.compare(client.password, user.password, (err, isMatch) => {
//     if (err) {
//       console.log(err);
//     }
//     if (isMatch) {
//       return done(null, user);
//     } else {
//       //password is incorrect
//       return done(null, false, { message: 'Password is incorrect' });
//     }
//   });
// } else {
//   // No user
//   return done(null, false, {
//     message: 'No user with that email address',
//   });
// }
