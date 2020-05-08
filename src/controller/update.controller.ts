// IMPORTA MODULE
import { Response, Request, json } from 'express';

// IMPORT THE MODELS
import { formRegistration } from '../models/index';

// UPDATE DATABASE
export const updateUser = async (req: Request, res: Response) => {
  // RECEIVE DATA
  const { id } = req.query;
  const data = req.body;

  try {
    // UPDATE DATABASE
    const dataUser = await formRegistration.findOneAndUpdate({ _id: id }, data, { new: true });

    // RESPONSE CLIENT
    res.json(dataUser);
  } catch (error) {
    // RESPONSE ERROLR
    res.json(error);
  }
};
