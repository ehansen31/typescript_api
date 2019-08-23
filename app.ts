import "reflect-metadata";
import express = require("express");
import { createConnection } from "typeorm";
import { User } from "./models/user";
import { Server, Path, GET, PathParam } from "typescript-rest";

let server: express.Application = express();

@Path("/hello")
class HelloService {
    @Path(":name")
    @GET
    sayHello(@PathParam('name') name: string): string {
        return "Hello " + name;
    }
}

@Path("/")
class Default {
    @GET
    explain(): string {
        return "typescript api"
    }
}

@Path("/content")
class ContentEndpoint {
    @GET
    explain(): string {
        return "returning content"
    }
}

Server.buildServices(server);


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

// endpoints: create collection


// webhook status updates

export default server;