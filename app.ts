import "reflect-metadata";
import express = require("express");
import { createConnection } from "typeorm";
import { Server, Path, GET, PathParam, PassportAuthenticator, POST } from "typescript-rest";
import { UserRoute } from "./routes/userRoute"
import { User } from "./models/user"
import { Content } from "./models/content"
let server: express.Application = express();

@Path("/")
class Default {
    @GET
    explain(): string {
        return "typescript api"
    }
}

Server.buildServices(server, Default, UserRoute, );

// configure test and production environments
createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user",
    password: "pass",
    database: "typescript_api",
    entities: [
        User,
        Content
    ],
    synchronize: true,
    logging: false
})

server.listen(8080, () => {
    console.log(`server started at http://localhost:${8080}`);
});

export default server;