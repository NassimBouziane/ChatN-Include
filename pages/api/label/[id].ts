// Code Camp Web SDCDWEB
//
// From 5 Dec 2022 To 15 Dec 2022
//
// @authors: Menut Paul, Bouziane Nassim, Fom Nenkam Samuella, Hoarau Jordan, Boustani Abdelqodousse
//
// Copyright (c) 2022 - ETNA
//

// I wont get through this one cause it's deprecated

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const pid: number = Number(req.query.id);
  switch (req.method) {
    case 'DELETE': {
      const QueryResult = await prisma.label.delete({
        where: {
          id: pid,
        },
      });
      res.send(QueryResult);

      break; }
    case 'PUT': {
      const QueryResult = await prisma.label.update({
        where: {
          id: pid,
        },
        data: {
          name: req.body.name,
          color: req.body.color,
        },
      });
      res.send(QueryResult);
      break; }
    case 'GET': {
      const QueryResult = await prisma.label.findUnique({
        where: {
          id: pid,
        },
      });
      res.send(QueryResult);
      break; }
    default:
      res.status(403).send();
      break;
  }
}
