/* eslint-disable @typescript-eslint/no-unused-vars */
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
 * This function Delete a user from the database using its ID.
 * @param {Object} Id
 * @returns {Promise}
 */
async function deleteUser(Id) {
  const QueryResult = await prisma.users.delete({
    where: {
      id: Id,
    },
  });
  return QueryResult;
}

/**
 * This function Update a user in the database using its ID.
 * @param {number} Id
 * @param {Object} body
 * @returns {Promise}
 */
async function updateUser(Id, body) {
  const QueryResult = await prisma.users.update({
    where: {
      id: Id,
    },
    data: {
      username: body.username,
      email: body.email,
      password: body.password,
      role_id: body.role_id,
      group_id: body.group_id,
    },
  });
  return QueryResult;
}

/**
 * This function Get a user from the database using its ID.
 * @param {Object} Id
 * @returns {Promise}
*/
async function getUser(Id) {
  const QueryResult = await prisma.users.findUnique({
    where: {
      id: Id,
    },
  });
  return QueryResult;
}

/**
 * This function is responsible for handling HTTP requests to the /api/users/[id] endpoint.
 * It handles GET, PUT, DELETE requests, and calls the corresponding functions to handle each request.
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise}
 */
export default async function handler(req, res) {
  const Id = Number(req.query.id);
  switch (req.method) {
    // Delete user
    case 'DELETE': {
      const QueryResult = await deleteUser(Id);
      res.status(200).send('User deleted');
      break;
    }

    // Update user
    case 'PUT': {
      const QueryResult = await updateUser(Id, req.body);
      res.send(QueryResult);
      break;
    }

    // Get by ID
    case 'GET': {
      const QueryResult = await getUser(Id);
      if (!QueryResult) {
        res.status(404).send('User not found');
      } else {
        res.send(QueryResult);
      }
      break;
    }
    default:
      res.status(403).send();
      break;
  }
}
