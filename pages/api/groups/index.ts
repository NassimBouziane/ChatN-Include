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
 * This function is used to get all groups from the database
 * @param {Object} req
 * @param {Object} res
 */
async function getGroup(req, res) {
  // Get all groups from the database
  const groups = await prisma.groups.findMany();
  // Send the groups to the client as JSON
  res.send(groups);
}

/**
 * This function creates a new group in the database.
 * The user's name is passed in the request body, and the response is the created group object.
 * @param {Object} req - The request object.
 */
async function postGroup(req, res) {
  const QueryResult = await prisma.groups.create({
    data: {
      name: req.body.name,
    },
  });
  res.send(QueryResult);
}
/**
 * This function is responsible for handling HTTP requests to the /api/groups/ endpoint.
 * It handles GET requests, and calls the corresponding functions to handle each request.
 * @param {Object} req
 * @param {Object} res
 */
export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      await getGroup(req, res);
      break;
    case 'POST':
      await postGroup(req, res);
      break;
    default:
      res.status(403).send();
      break;
  }
}
