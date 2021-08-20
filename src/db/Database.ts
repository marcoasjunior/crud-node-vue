import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export default class Database {

    #connection: mongoose.Connection;

    #mongod = new MongoMemoryServer();

    #dbOptions = {

        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,

    }

    async init(): Promise < mongoose.Connection > {

        await this.#mongod.start();

        try {

            await mongoose.connect(this.#mongod.getUri(), this.#dbOptions);

        } catch (error) {

            console.error('Error initializing Mongo: ', error);

        }

        return this.#connection = mongoose.connection;
    }

    get connection() {

        return this.#connection;

    }
}