// IMPORT MODULES
import expres, { Request, Response } from 'express';
const app = expres();

// IMPORT CONTROLLER SEARCH
import { oneUserController } from './search-user/one-user.controller';
import { allUserController } from './search-user/all-user.controller';

export const searchUser = (req: Request, res: Response) => {
  const { allUser = false, oneUser = false } = req.query;

  if (oneUser) return oneUserController(req, res);
  if (allUser) return allUserController(req, res);
};
