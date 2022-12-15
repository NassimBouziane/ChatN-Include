/* eslint-disable consistent-return */
// Code Camp Web SDCDWEB
//
// From 5 Dec 2022 To 15 Dec 2022
//
// @authors: Menut Paul, Bouziane Nassim, Fom Nenkam Samuella, Hoarau Jordan, Boustani Abdelqodousse
//
// Copyright (c) 2022 - ETNA
//

import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { Login } from '../../interfaces/index';

dotenv.config();

const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * This function handle login logic.
 * @param {Object} body
 * @returns {Promise}
  */
async function login(body:Login) {
  const QueryResult = await prisma.users.findFirst({
    where: {
      email: body.email,
    },
  });
  if (QueryResult) {
    const valid = await bcrypt.compare(body.password, QueryResult.password);
    if (!valid) {
      return { error: 'error: email or password incorrect' };
    }
    const acces = jwt.sign(
      {
        email: body.email,
        password: body.password,
      },
      process.env.JWT_SIGN_SECRET,
      {
        expiresIn: '24h',
      },
    );
    return { token: acces, id: QueryResult.id, group: QueryResult.group_id };
  }
  return { error: 'error: email or password incorrect' };
}

/**
 * This function handle the request to the API.
 * @param {Object} req
 * @param {Object} res
 */
export default async function handler(req, res) {
  switch (req.method) {
    // Login user
    case 'POST': {
      const body:Login = JSON.parse(req.body);
      const result = await login(body);
      res.status(200).json(result);
      break;
    }
    default:
      break;
  }
}
