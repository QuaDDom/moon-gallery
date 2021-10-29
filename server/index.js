import { config } from 'dotenv';
import express from 'express';
import './db'
import upload from 'express-fileupload';
import galleryRoutes from './routes/gallery.routes';
import imagesRoutes from './routes/img.routes';
import userRoutes from './routes/user.routes'

config();
const app = express();

app.set('port', process.env.SERVER_PORT || 4000);

app.use(upload({
    tempFileDir: '/temp'
}));

app.use(galleryRoutes);
app.use(imagesRoutes);
app.use(userRoutes);

app.listen(app.get('port'))
console.log('Server in port', app.get('port'));