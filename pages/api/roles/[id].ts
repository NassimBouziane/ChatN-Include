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
 * @param roleId the ID of the role to be deleted
 * @returns {Promise}
 */
async function deleteRole(roleId: number) {
  return prisma.roles.delete({
    where: {
      id: roleId,
    },
  });
}

/**
 * Updates a role in the database using its ID.
 * @param {number} roleId
 * @param {string} roleName
 * @returns {Promise}
 */
async function updateRole(roleId: number, roleName: string) {
  return prisma.roles.update({
    where: {
      id: roleId,
    },
    data: {
      name: roleName,
    },
  });
}

/**
 * Get a role from the database using its ID.
 * @param roleId the ID of the role to be retrieved
 * @returns {Promise}
 */
async function getRole(roleId: number) {
  return prisma.roles.findUnique({
    where: {
      id: roleId,
    },
  });
}

/**
 * This function is responsible for handling HTTP requests to the /api/roles/[id] endpoint.
 * It handles GET, PUT, DELETE requests, and calls the corresponding functions to handle each request.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
export default async function handler(req, res) {
  const pid: number = Number(req.query.id);
  switch (req.method) {
    case 'DELETE': {
      const QueryResult = await deleteRole(pid);
      res.send(QueryResult);

      break; }
    case 'PUT': {
      const QueryResult = await updateRole(pid, req.body.name);
      res.send(QueryResult);
      break; }
    case 'GET': {
      const QueryResult = await getRole(pid);
      res.send(QueryResult);
      break; }
    default:
      res.status(403).send();
      break;
  }
}
