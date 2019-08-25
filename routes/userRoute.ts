import { GET, Path, PathParam, POST } from 'typescript-rest';
import { User } from "../models/user"
import { userService } from "../service/userService"
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
    public async createUser(body_params: { name: string }): Promise<User> {
        let userObj = new User();
        userObj.firstName = body_params.name;
        let returnObj: User = await userService.CreateUser(userObj)
        return returnObj;
    }
}