import { User } from "../models/user";
import { getRepository } from "typeorm";
const userRepository = getRepository(User);
import { Request, Response } from "express"

export let createUserRoute = async (req: Request, res: Response) => {
    let userObj: User = new User();
    userObj.firstName = req.body.first_name;
    await userRepository.save(userObj);
}