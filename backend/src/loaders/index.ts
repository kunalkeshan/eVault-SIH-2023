import config from '../config';
import { getClient, closeClient } from './database'; // Import the updated getClient and closeClient functions
import express from './express';
import Logger from './logger';
import Express from 'express';

export default async ({ expressApp }: { expressApp: Express.Application }): Promise<void> => {
  const databaseClient = await getClient(); // Obtain the database client connection

  try {
    Logger.info(`✌️ Connection to database successful`);

    await express({ app: expressApp });
    Logger.info('✌️ Express loaded');

    Logger.info('✅ All modules loaded!');
  } catch (err) {
    Logger.error(err);
  } finally {
    closeClient(databaseClient); // Close the client connection when the application is done
  }
};
