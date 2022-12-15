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

// This function gets an event from the database using the id from the query string
// The id from the query string is cast to a number
// The result of the query is sent back to the user
async function getEvent(req, res) {
  // Get the event id from the URL parameters
  const eventId = Number(req.query.id);
  // Get the event data from the database
  const eventData = await prisma.events.findUnique({
    where: {
      id: eventId,
    },
  });
  // Send the event data to the user
  res.send(eventData);
}

// The following function updates an event in the database
// The function takes in the request and response from the client
// The function then finds the event in the database that matches the ID number from the request
// The function then updates the title, start, end, color, z_index, and created_by fields of the event
// The function then returns the response to the client
async function updateEvent(req, res) {
  const QueryResult = await prisma.events.update({
    where: {
      id: Number(req.query.id),
    },
    data: {
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
      color: req.body.color,
      z_index: req.body.z_index,
      created_by: req.body.created_by,
    },
  });
  res.send('Event Updated');
}

// This code deletes the event with the given id
// The id is passed as a query parameter
// The function deleteEvent is called by the route /deleteEvent
async function deleteEvent(req, res) {
  // Get the ID of the event to delete from the URL
  const eventId = Number(req.query.id);

  // Delete the event from the database
  const QueryResult = await prisma.events.delete({
    where: {
      id: eventId,
    },
  });

  // Send a message to the client
  res.send('Event Deleted');
}

/**
 * This function is responsible for handling HTTP requests to the /api/events/[id] endpoint.
 * It handles GET, PUT, and DELETE requests, and calls the corresponding functions to handle each request.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      await getEvent(req, res);
      break;
    }
    case 'PUT': {
      await updateEvent(req, res);
      break;
    }
    case 'DELETE': {
      await deleteEvent(req, res);
      break;
    }
    default:
      res.status(403).send();
      break;
  }
}
