import express, { Application, Request, Response } from "express";

const app: Application = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {

    app.listen(port, (): void => {

        console.log(`Running at ${port}`);

    });

} catch (error) {

    console.error(`Error: ${error.message}`);

}