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
 * This function GETs the messages
 * @returns {Promise}
 */
async function getMessages() {
  return prisma.messages.findMany();
}

/**
 * This function POSTs the messages
 * @param {Object} body
 * @returns {Promise}
 */
async function createMessage(body) {
  return prisma.messages.create({
    data: {
      created_by: body.created_by,
      content: body.content,
      created_at: body.created_at,
      belongs_to: body.belongs_to,
      bodyFile: body.bodyFile,
      type: body.type,
    },
  });
}

/**
 * This function is responsible for handling HTTP requests to the /api/messages/ endpoint.
 * It handles GET, POST requests, and calls the corresponding functions to handle each request.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      const QueryResult = await getMessages();
      res.send(QueryResult);
      break; }
    case 'POST': {
      const QueryResult = await createMessage(req.body);
      res.send(QueryResult);
      break; }
    default:
      res.status(403).send();
      break;
  }
}
