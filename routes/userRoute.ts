import { User } from "../models/user";
import { getRepository } from "typeorm";
const userRepository = getRepository(User);

export let createUserRoute = async (req, res) => {
    let userObj: User = new User();
    userObj.firstName = req.body.first_name;
    await userRepository.save(userObj);
}