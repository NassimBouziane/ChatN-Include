import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export default async function handler(req, res) {
  switch (req.method) {
    // Login user
    case 'POST': {
      const QueryResult = await prisma.users.findFirst({
        where: {
          email: req.body.email,
        },
      });
      console.log(QueryResult);
      if (QueryResult) {
        bcrypt
          .compare(req.body.password, QueryResult.password)
          .then((valid) => {
            if (!valid) {
              res.status(404).send('error: email or password incorrect oulll');
            } else {
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
              sessionStorage.setItem('token', acces);
            }
          });
      } else {
        res.status(404).send('error: email or password incorrect');
      }
      break;
    }
    default:
      break;
  }
}