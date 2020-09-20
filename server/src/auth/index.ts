import { Request, Response, NextFunction } from 'express';
import jwt, {  } from 'jsonwebtoken';
import { promisify } from 'util';
import * as dotenv from "dotenv";
dotenv.config();

interface Decoded {
  id: string,
  iat: number,
  exp: number
}

declare module 'express-serve-static-core' {
  interface Request {
    user_id: string;
  }
}

export default async (request: Request, response: Response, next: NextFunction) => {
  const authorizationHeader = request.headers.authorization;
  const secret = String(process.env.SECRET_KEY);

  if(!authorizationHeader) {
    return response.status(401).json({
      auth: false,
      message: 'No token provided.'
    });
  }

  const [, token] = authorizationHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, secret) as Decoded;
    request.user_id = decoded.id;
    return next();
  } catch (error) {
    return response.status(500).json({
      message: 'Failed to authenticate token.' + error.message
    });
  }
}
