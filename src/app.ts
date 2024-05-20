import express, { Response } from 'express';
import bodyParser from 'body-parser';
import carRouter from './routes/cars.routes';

async function createServer() {

    const app = express();

    app.use(bodyParser.json({}));
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api/cars', carRouter)

    app.use('*', async (_, res: Response) => {
        return res.status(404).json({ error: 'not found' });
    });

    return app
}

export default createServer;
