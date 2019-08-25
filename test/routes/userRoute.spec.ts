import app from "../../app"
import { before, describe, it } from "mocha";
import * as sinon from "sinon"
import * as chai from "chai"
import * as typeorm from "typeorm"
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { User } from "../../models/user"
import {userService} from "../../service/userService"

describe('user route unit tests', () => {

    it('should create a user', () => {
        let userObj = new User();
        userObj.id = 1;
        userObj.firstName='erik';

        let userServiceMock = sinon.mock(userService);
        userServiceMock.expects('CreateUser').returns(userObj)

        return chai.request(app).post('/user')
            .send({
                name: "erik"
            })
            .then(res => {
                chai.expect(res.body.fire
                    ).to.eql(userObj.id.toString());
            });
    });
});