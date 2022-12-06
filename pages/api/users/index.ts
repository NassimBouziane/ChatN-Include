import { PrismaClient } from '@prisma/client';

const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    // GET all users

    case 'GET': {
      const users = await prisma.users.findMany();
      res.json(users);
      break;
    }

    // Create new user

    case 'POST': {
      const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role_id: req.body.role_id,
        group_id: req.body.group_id,
      };
      try {
        const hash = await bcrypt.hash(data.password, 10);
        console.log(hash);
        const newUser = await prisma.users.create({
          data: {
            username: data.username,
            email: data.email,
            password: `${hash}`,
            role_id: data.role_id,
            group_id: data.group_id,
          },
        });
        res.status(200).json(newUser, { success: true });
      } catch (error) {
        console.error('Request error', error);
        res.status(500).json({ error: 'Request error', success: false });
      }
      break;
    }
    default:
      res.status(403).send();
      break;
  }
}
