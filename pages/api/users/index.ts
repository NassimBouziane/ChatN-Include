import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      const QueryResult = await prisma.users.findMany();
      res.send(QueryResult);
      break; }
    case 'POST': {
      const QueryResult = await prisma.users.create({
        data: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          role_id: req.body.role_id,
          group_id: req.body.group_id,
        },
      });
      res.send(QueryResult);
      break; }
    default:
      res.status(403).send();
      break;
  }
}
