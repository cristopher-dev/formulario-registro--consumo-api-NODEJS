// IMPORTA MODULES
import { connection, connect } from 'mongoose';

// CONNECT DATABASE
connect('mongodb://localhost/prueba-tecnica', { useNewUrlParser: true, useUnifiedTopology: true });

// CONNECTION WITH ERROR
connection.on('error', () => console.log('CONNECTION ERROR => '));

// CONNECTION SUCCESSFUL
connection.once('open', () => console.log('CONNECTED SUCCESSFUL'));
