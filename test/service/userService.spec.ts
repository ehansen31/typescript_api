import { before, describe, it } from "mocha";
import * as sinon from "sinon"
import * as typeorm from "typeorm"
import { User } from "../../models/user"
import { Content } from "../../models/content"
import { createConnection } from "typeorm";
import { UserService } from "../../service/userService"
import assert = require("assert")

describe('user service unit tests', () => {
    before(async () => {});

    it('should save a user', async () => {
        let repo = new typeorm.Repository();
        sinon.stub(typeorm, 'getRepository').returns(repo);
        let user = new User();
        user.firstName = "erik";
        user.id = 1;
        const userRepositoryMock = sinon.mock(repo);
        userRepositoryMock.expects('save').returns(Promise.resolve(user));
        let user_response = await UserService.CreateUser(user);
        assert(user_response.id == 1, "user id not set properly");
        assert(user_response.firstName == "erik", "user name not set properly");
        sinon.restore()
    });

    it('should get a user', async () => {
        let repo = new typeorm.Repository();
        sinon.stub(typeorm, 'getRepository').returns(repo);
        let user = new User();
        user.firstName = "erik";
        user.id = 1;
        const userRepositoryMock = sinon.mock(repo);
        userRepositoryMock.expects('findOne').returns(Promise.resolve(user));
        let user_response = await UserService.GetUser(1);
        assert(user_response.id == 1, "user id not returned properly");
        assert(user_response.firstName == "erik", "user name not returned properly");
        sinon.restore()
    });
});