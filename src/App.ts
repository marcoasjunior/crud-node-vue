import Database from "./db/Database";
import Server from "./Server";

export default class Application {

    #database = new Database()

    constructor() {

        this.#database.init().then(() => {
            new Server();
            this.#database.connection

        });

    }
}