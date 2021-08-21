import express from "express";
import serveStatic from "serve-static";
import router from "./routes/router";
import cors from 'cors'

export default class Server {

    private _app: express.Express

    constructor() {

        const app = express();

        const port = process.env.PORT || 3000;

        app.use(cors())

        app.use(express.json());

        app.use(express.urlencoded({ extended: true }));

        app.use(serveStatic("./frontend/dist"));

        app.use(router)

        try {

            app.listen(port, (): void => {

                console.log(`Running at ${port}`);

            });

        } catch (error) {

            console.error(`Error: ${error.message}`);

        }

        this._app = app

    }

    get app(): express.Express {

        return this._app

    }
}