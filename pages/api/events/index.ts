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
* This function is used to get all events from the database
* @param {express.req} req - express request object
* @param {express.res} res - express response object
*/
async function getEvents(req, res) {
  const QueryResult = await prisma.events.findMany();
  res.status(200).send(QueryResult);
}

/**
 * This function creates a new event in the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object.
 */
async function postEvents(req, res) {
  const QueryResult = await prisma.events.create({
    data: {
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
      color: req.body.color,
      z_index: req.body.z_index,
      created_by: req.body.created_by,
    },
  });
  res.status(200).send('Event Created');
}

/**
 * This function is responsible for handling HTTP requests to the /api/events/ endpoint.
 * It handles GET requests, and calls the corresponding functions to handle each request.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      getEvents(req, res);
      break;
    case 'POST':
      postEvents(req, res);
      break;
    default:
      res.status(403).send();
      break;
  }
}
