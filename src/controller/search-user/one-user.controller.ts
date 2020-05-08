// IMPORT MODULES
import { Response, Request } from 'express';

// IMPORT MODELS
import { formRegistration } from '../../models/index';

export const oneUserController = async (req: Request, res: Response) => {
  const { id } = req.query;

  try {
    // CONSULT IN THE DATA BASE
    const data = await formRegistration.findOne({ _id: id });

    // CUSTOMER RESPONSE
    res.json(data);
  } catch (error) {
    // RESPONSE ERROR
    res.json(error);
  }
};
