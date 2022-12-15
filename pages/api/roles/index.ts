// Code Camp Web SDCDWEB
//
// From 5 Dec 2022 To 15 Dec 2022
//
// @authors: Menut Paul, Bouziane Nassim, Fom Nenkam Samuella, Hoarau Jordan, Boustani Abdelqodousse
//
// Copyright (c) 2022 - ETNA
//

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Deletes a role from the database using its ID.
 * @returns {Promise}
 */
async function getRoles() {
  return prisma.roles.findMany();
}

/**
 * Creates a role in the database.
 * @param {Object} body
 * @returns {Promise}
*/
async function createRole(body) {
  return prisma.roles.create({
    data: {
      name: body.name,
    },
  });
}

/**
 * This function is responsible for handling HTTP requests to the /api/roles/ endpoint.
 * It handles GET, POST requests, and calls the corresponding functions to handle each request.
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise}
 */
export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      const QueryResult = await getRoles();
      res.send(QueryResult);
      break; }
    case 'POST': {
      const QueryResult = await createRole(req.body);
      res.send(QueryResult);
      break; }
    default:
      res.status(403).send();
      break;
  }
}
