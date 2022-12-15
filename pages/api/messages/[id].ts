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
 * This function checks if a string is an integer
 * @param value
 * @returns {boolean}
 */
function isInteger(value) {
  return /^\d+$/.test(value);
}

/**
 * This function handles the DELETE for the given messages Id
 * @param {Object} req
 * @param {Object} res
 * @param {number} messageId
 */
async function messageDelete(req, res, messageId) {
  const QueryResult = await prisma.messages.delete({
    where: {
      id: messageId,
    },
  });
  res.send(QueryResult);
}

/**
 * THis function handles the PUT for the given messages Id
 * @param {Object} req
 * @param {Object} res
 * @param {number} messageId
 */
async function messagePut(req, res, messageId) {
  const QueryResult = await prisma.messages.update({
    where: {
      id: messageId,
    },
    data: {
      content: req.body.content,
      belongs_to: req.body.belongs_to,
    },
  });
  res.send(QueryResult);
}

/**
 * This function handles the GET for the given messages Id
 * @param {Object} req
 * @param {Object} res
 * @param {number} messageId
 */
async function messageGet(req, res, messageId) {
  const QueryResult = await prisma.messages.findUnique({
    where: {
      id: messageId,
    },
  });
  res.send(QueryResult);
}

// This function is called when the server receives a request for a
// message with a specific integer ID. It calls the appropriate
// handler function based on the request method.
async function handleIntegerParam(req, res, messageId) {
  switch (req.method) {
    case 'DELETE':
      await messageDelete(req, res, messageId);
      break;
    case 'PUT':
      await messagePut(req, res, messageId);
      break;
    case 'GET':
      await messageGet(req, res, messageId);
      break;
    default:
      res.status(403).send();
      break;
  }
}

// This function is called when the server receives a request for a
// message with a specific string ID. It calls the appropriate
// handler function based on the request method.
async function handleStringParam(req, res, group) {
  switch (req.method) {
    case 'GET':
      await messageGet(req, res, group);
      break;
    default:
      res.status(403).send();
      break;
  }
}
/**
 * This function handles the request for the messages API
 * @param {Object} req
 * @param {Object} res
 */
export default async function handler(req, res) {
  if (isInteger(req.query.id)) {
    const messageId: number = Number(req.query.id);
    await handleIntegerParam(req, res, messageId);
  } else {
    const group: string = String(req.query.id);
    await handleStringParam(req, res, group);
  }
}
