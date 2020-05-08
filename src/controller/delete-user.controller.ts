// IMPORT MODULES
import { Response, Request } from 'express';

// IMPORTA CONTROLLER
import { oneUserController } from './delete-user/one-user.controller';
import { allUserController } from './delete-user/all-user.controller';

export const deleUserController = async (req: Request, res: Response) => {
  const { allUser = false, oneUser = false } = req.query;
  console.log(allUser);
  if (oneUser) return oneUserController(req, res);
  if (allUser) return allUserController(req, res);
};
