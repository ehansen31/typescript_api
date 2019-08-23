import { GET, Path, PathParam } from 'typescript-rest';
import { User } from "../models/user";
import { getRepository } from "typeorm";
const userRepository = getRepository(User);

/**
 * This is a demo operation to show how to use typescript-rest library.
 */
@Path('/user')
export class UserRoute {
    /**
     * Send a greeting message.
     * @param name The name that will receive our greeting message
     */
    @Path(':name')
    @GET
    public async sayHello(@PathParam('name') name: string): Promise<string> {
        let userObj: User = new User();
        userObj.firstName = name;
        await userRepository.save(userObj);
        return userObj.id.toString();
    }
}