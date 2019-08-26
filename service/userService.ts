import { User } from "../models/user";
import { getRepository } from "typeorm";

export class UserService {
    constructor() { }

    static async CreateUser(userObj: User): Promise<User> {
        let userRepository = getRepository(User);
        try {
            return userRepository.save(userObj);
        } catch (error) {
            throw error
        }
    }
}