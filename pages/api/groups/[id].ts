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

// This function deletes a group with the given id from the database.
// The function takes the id of the group to be deleted as an argument.
// The function returns a QueryResult object containing the deleted group.
async function deleteGroup(groupId: number) {
  const QueryResult = await prisma.groups.delete({
    where: {
      id: groupId,
    },
  });
  return QueryResult;
}

// This function updates the name of a group
// The function takes in a group id and a new group name
// The function returns a QueryResult
// The QueryResult is an object that contains the data returned from the database
// The data is information about the group that was updated
async function updateGroup(groupId: number, gname: string) {
  const QueryResult = await prisma.groups.update({
    where: {
      id: groupId,
    },
    data: {
      name: gname,
    },
  });
  return QueryResult;
}

async function getGroup(groupId: number) {
  // Fetch a single group with the given ID from the database
  const QueryResult = await prisma.groups.findUnique({
    where: {
      id: groupId,
    },
  });
  return QueryResult;
}

/**
 * This function is responsible for handling HTTP requests to the /api/group/[id] endpoint.
 * It handles GET, PUT, and DELETE requests, and calls the corresponding functions to handle each request.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
export default async function handler(req, res) {
  const groupId: number = Number(req.query.id);
  switch (req.method) {
    case 'DELETE': {
      const QueryResult = await deleteGroup(groupId);
      res.send(QueryResult);
      break; }
    case 'PUT': {
      const QueryResult = await updateGroup(groupId, req.body.name);
      res.send(QueryResult);
      break; }
    case 'GET': {
      const QueryResult = await getGroup(groupId);
      res.send(QueryResult);
      break; }
    default:
      res.status(403).send();
      break;
  }
}
