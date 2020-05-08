// IMPORT MODULES
import { Response, Request } from 'express';

// IMPORT MODELS
import { formRegistration } from '../../models/index';

export const allUserController = async (req: Request, res: Response) => {
  try {
    // CONSULT IN THE DATA BASE
    const data = await formRegistration.find();

    // CUSTOMER RESPONSE
    res.json(data);
  } catch (error) {
    // RESPONSE ERROR
    res.json(error);
  }
};
