import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function isInteger(value) {
  return /^\d+$/.test(value);
}

export default async function handler(req, res) {
  if (isInteger(req.query.id)) {
    const pid: number = Number(req.query.id);
    switch (req.method) {
      case 'DELETE': {
        const QueryResult = await prisma.events.delete({
          where: {
            id: pid,
          },
        });
        res.send(QueryResult);

        break; }
      case 'PUT': {
        const QueryResult = await prisma.events.update({
          where: {
            id: pid,
          },
          data: {
            title: req.body.title,
            start: req.body.start,
            end: req.body.end,
            color: req.body.color,
            z_index: req.body.z_index,
            created_by: req.body.created_by,
            belong_to: req.body.belongs_to,
          },
        });
        res.send(QueryResult);
        break; }
      case 'GET': {
        const QueryResult = await prisma.events.findUnique({
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
  } else {
    const group: string = String(req.query.id);
    switch (req.method) {
      case 'GET': {
        const QueryResult = await prisma.events.findMany({
          where: {
            belong_to: group,
          },
        });
        res.send(QueryResult);
        break; }
      default:
        res.status(403).send();
        break;
    }
  }
}
