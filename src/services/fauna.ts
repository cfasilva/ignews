import { Client } from 'faunadb';

export const faunaClient = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET
});