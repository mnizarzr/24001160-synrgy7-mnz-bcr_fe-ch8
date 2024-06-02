import express, { Response } from 'express';
import bodyParser from 'body-parser';
import {createCarRouter} from './routes/cars.routes';
import CarHandler from "./handlers/car.handler";
import jwtStrategy from './middlewares/jwt-strategy';
import passport from 'passport'
import { createAuthRouter } from './routes/auth.routes';
import AuthHandler from './handlers/auth.handler';
import { createUserRouter } from './routes/user.routes';
import UserHandler from './handlers/user.handler';

async function createServer() {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(passport.initialize())
    passport.use(jwtStrategy())

    app.use('/api/cars', createCarRouter(new CarHandler()))
    app.use('/api/auth', createAuthRouter(new AuthHandler()))
    app.use('/api/users', createUserRouter(new UserHandler()))

    app.use('*', async (_, res: Response) => {
        return res.status(404).json({ error: 'not found' });
    });

    return app
}

export default createServer;
