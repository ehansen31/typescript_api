import app from '../../app';
import { describe, it } from "mocha";
import * as chai from "chai"
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('user route unit tests', () => {
    it('should return response on call', () => {
        return chai.request(app).get('/')
            .then(res => {
                chai.expect(res.text).to.eql("collections api");
            });
    });

    it('should save a user to the db', () => {
        return chai.request(app)
            .post('/user/create')
            .send({

            })
            .then(res => {
                chai.expect(res.text).to.eql("collections api");
            });
    });
});
