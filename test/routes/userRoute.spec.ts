import app from "../../app"
import { before, describe, it } from "mocha";
import * as sinon from "sinon"
import * as chai from "chai"
import * as typeorm from "typeorm"
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { User } from "../../models/user"
import { createConnection } from "typeorm";

describe('user route unit tests', () => {
    before(async () => {
        await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "postgres",
            database: "test",
            entities: [
                User
            ],
            synchronize: true,
            logging: false
        })
    });

    it('should create a user', () => {
        let repo = new typeorm.Repository();
        sinon.stub(typeorm, 'getRepository').returns(repo);

        let user = new User();
        user.firstName = "erik";
        user.id = 1;
        const userRepositoryMock = sinon.mock(repo);
        userRepositoryMock.expects('save').returns(Promise.resolve(user));

        return chai.request(app).post('/user')
            .send({
                name: "erik"
            })
            .then(res => {
                chai.expect(res.text).to.eql(user.id.toString());
            });
    });
});