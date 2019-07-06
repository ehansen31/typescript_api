import "reflect-metadata";
import express = require("express");
import { createConnection } from "typeorm";
import { User } from "./models/user";
// import { createUserRoute } from "./routes/userRoute"

let server = express();

server.get("/colections", (req, res) => {
    res.send("collections api real deal");
});

server.get("/", (req, res) => {
    res.send("collections api");
});

// server.post("collection/create", async (req, res) => { });
// server.patch("collection/update", async (req, res) => { });
// server.delete("collection/stop", async (req, res) => { });

// server.post("user/create", createUserRoute);
// server.get("/user/create/", (req, res) => {
//     console.log(`here`); 
//     res.send("collections api");
// });
// server.post("user/update", async (req, res) => { });

// server.get("hello", (req, res) => {
//     res.send("hello api");
// });

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

/*
endpoints:
create business entity
create collection
stop collection
check collection
*/

// webhook status updates

export default server;