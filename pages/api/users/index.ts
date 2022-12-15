// Code Camp Web SDCDWEB
//
// From 5 Dec 2022 To 15 Dec 2022
//
// @authors: Menut Paul, Bouziane Nassim, Fom Nenkam Samuella, Hoarau Jordan, Boustani Abdelqodousse
//
// Copyright (c) 2022 - ETNA
//

import { PrismaClient } from '@prisma/client';

const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

/**
 * This function Get a user from the database using its ID.
 * @param {Object} Id
 * @returns {Promise}
 */
async function getUsers() {
  return prisma.users.findMany();
}

/**
 * This function Create a user in the database.
 * @param {Object} data
 * @returns {Promise}
 */
async function createUser(data) {
  const hash = await bcrypt.hash(data.password, 10);
  return prisma.users.create({
    data: {
      username: data.username,
      email: data.email,
      password: `${hash}`,
      role_id: data.role_id,
      group_id: data.group_id,
    },
  });
}

/**
 * This function is responsible for handling HTTP requests to the /api/users/ endpoint.
 * It handles GET and POST requests, and uses the respective functions to handle the requests.
 * @param {Object} req
 * @param {Object} res
  */
export default async function handler(req, res) {
  switch (req.method) {
    // GET all users
    case 'GET': {
      const QueryResult = await getUsers();
      res.send(QueryResult);
      break;
    }

    // Create new user
    case 'POST': {
      const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role_id: req.body.role_id,
        group_id: req.body.group_id,
      };
      try {
        const QueryResult = await createUser(data);
        res.status(200).send(QueryResult);
      } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Request error', success: false });
      }
      break;
    }
    default:
      res.status(403).send();
      break;
  }
}
