import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const Id = Number(req.query.id);
  switch (req.method) {
    // Delete user

    case 'DELETE': {
      const deleteUser = await prisma.users.delete({
        where: {
          id: Id,
        },
      });
      res.status(200).send('User deleted');
      break;
    }

    // Update user

    case 'PUT': {
      // const { body } = req.body;
      // console.log(body);
      const updateUser = await prisma.users.update({
        where: {
          id: Id,
        },
        data: {
          username: 'tomaye',
        },
      });
      res.json(updateUser);
      break;
    }

    // Get by ID

    case 'GET': {
      const userId = await prisma.users.findUnique({
        where: {
          id: Id,
        },
      });
      if (!userId) {
        res.status(404).send('User not found');
      } else {
        res.json(userId);
      }
      break;
    }
    default:
      res.status(403).send();
      break;
  }
}
