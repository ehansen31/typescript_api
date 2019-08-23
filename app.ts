import "reflect-metadata";
import express = require("express");
import { createConnection } from "typeorm";
import { Server, Path, GET, PathParam, PassportAuthenticator, POST } from "typescript-rest";
import {UserRoute} from "./routes/userRoute"
let server: express.Application = express();

@Path("/")
class Default {
    @GET
    explain(): string {
        return "typescript api"
    }
}

Server.buildServices(server, UserRoute);

server.listen(8080, () => {
    console.log(`server started at http://localhost:${8080}`);
});

// configure test and production environments
// createConnection({
//     type: "postgres",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "admin",
//     database: "production",
//     entities: [
//         User
//     ],
//     synchronize: true,
//     logging: false
// }).then(connection => {
//     // here you can start to work with your entities
// }).catch(error => console.log(error));


export default server;