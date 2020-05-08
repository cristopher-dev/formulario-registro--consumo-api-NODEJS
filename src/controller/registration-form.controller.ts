// IMPORT MODULES
import { Request, Response } from 'express';

// IMPORT MODELS
import { formRegistration } from '../models/index';

const registrationForm = async (req: Request, res: Response) => {
  console.log(req.body);

  const data = new formRegistration(req.body);

  try {
    await data.save();
    res.json({ registry: true });
  } catch (error) {
    res.json({ data: error });
  }
};

export { registrationForm };
