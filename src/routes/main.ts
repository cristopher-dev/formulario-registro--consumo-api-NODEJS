// IMPORT MODULES
import express from 'express';

//IMPORT CONTROLLER
import { registrationForm, searchUser, updateUser, deleUserController } from '../controller/index';

const router = express.Router();

// REGISTRATION FORM
router.post('/registration-form', registrationForm);

// USER SEARCH
router.get('/search', searchUser);

// USER UPDATE
router.put('/update', updateUser);

// USER DELETE
router.delete('/delete', deleUserController);

const mainRouter = router;

export { mainRouter };
