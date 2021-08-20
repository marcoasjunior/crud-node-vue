import mongoose from 'mongoose';

export default class Database {

    #connection: mongoose.Connection;

    private dbOptions = {

        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,

    }

    public async init(): Promise < mongoose.Connection > {

        const { MONGO_DATABASE, MONGO_HOST, MONGO_PORT } = process.env

        const db_uri = `mongodb://${ MONGO_HOST }:${ MONGO_PORT }/${ MONGO_DATABASE }`

        try {

            await mongoose.connect(db_uri, this.dbOptions);

        } catch (error) {

            console.error('Erro ao iniciar banco de dados: ', error);

        }

        return this.#connection = mongoose.connection;
    }

    get connection() {

        return this.#connection;

    }
}