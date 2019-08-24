import { GET, Path, PathParam, POST } from 'typescript-rest';
import { User } from "../models/user";
import { getRepository,createConnection } from "typeorm";

/**
 * This is a demo operation to show how to use typescript-rest library.
 */
@Path('/user')
export class UserRoute {
    /**
     * Send a greeting message.
     * @param name The name that will receive our greeting message
     */
    @POST
    public async sayHello(body_params: { name: string }): Promise<string> {

        const userRepository = getRepository(User);


        let userObj: User = new User();
        userObj.firstName = body_params.name;
        userObj = await userRepository.save(userObj);
        return userObj.id.toString();
    }
}