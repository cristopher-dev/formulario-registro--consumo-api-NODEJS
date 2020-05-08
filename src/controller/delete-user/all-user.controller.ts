// IMPORT MODULES
import { Response, Request } from 'express';

// IMPORT MODELS
import { formRegistration } from '../../models/index';

export const allUserController = async (req: Request, res: Response) => {
  // RECEIVE DATA

  console.log('stiven');

  try {
    // DELETE DATABASE
    const data = await formRegistration.deleteMany({});

    // RESPONSE CLIENT
    res.json(data);
  } catch (error) {
    // RESPONSE ERROR
    res.json(error);
  }
  return;
};
