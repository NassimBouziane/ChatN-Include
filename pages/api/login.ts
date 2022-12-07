import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

export default async function handler(req, res) {
  /* const loginUser: log = {
    email: req.body.email,
    password: req.body.password,
  }; */

  switch (req.method) {
    case 'POST': {
      const QueryResult = await prisma.users.findFirst({
        where: {
          email: req.body.email,
          password: req.body.password,
        },
      });
      console.log(QueryResult);
      if (QueryResult) {
        const acces = jwt.sign(
          {
            email: req.body.email,
            password: req.body.password,
          },
          process.env.JWT_SIGN_SECRET,
          {
            expiresIn: '24h',
          },
        );
        res.json({ accesToken: acces });
      } else {
        res.status(404).send('error: Username or password incorrect');
      }
      break;
    }
    default:
      break;
  }
}
