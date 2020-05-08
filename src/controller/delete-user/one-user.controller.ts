// IMPORT MODULES
import { Response, Request } from 'express';

// IMPORT MODELS
import { formRegistration } from '../../models/index';

export const oneUserController = async (req: Request, res: Response) => {
  // RECEIVE DATA
  const { id } = req.query;

  try {
    // DELETE DATABASE
    const data = await formRegistration.deleteOne({ _id: id });

    // RESPONSE CLIENT
    res.json(data);
  } catch (error) {
    // RESPONSE ERROR
    res.json(error);
  }
};
