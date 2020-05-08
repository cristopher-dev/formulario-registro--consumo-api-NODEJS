// IMPORT DATABASE
import './config-database';

// IMPORT SERVE
import { app } from './config-app';

// ASSIGN SERVER PORT
let port = process.env.PORT || '3000';

// LISTEN TO PORT
app.listen(port);

// SERVER ERROR
app.on('error', () => {
  console.log('ERRRO THE SERVE');
});

// SERVE OK
app.on('listening', () => {
  console.log('THE SERVER RIGHTLY RISES');
});
