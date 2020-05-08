// IMPORT MODULES
import express from 'express';
import cookieparser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';

// IMPORT MULTER
import { multipleFile } from './config-multer';

// SERVE
const app = express();

// IMPORT ROUTES
import { mainRouter } from './routes/index';

// SETTING
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(multipleFile);

// ROUTER
app.use('/', mainRouter);

// IMPORT ROUTES
export { app };
