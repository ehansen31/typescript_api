import app from "../../app"
import { describe, it } from "mocha";
import * as chai from "chai"
import chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('user route unit tests', () => {
    // it('should save a user to the db', (done) => {
    //     return chai.request(app)
    //         .get('/hello')
    //         .then(res => {
    //             chai.expect(res.text).to.eql("hello api");
    //             done();
    //         });
    // });

    it('should return response on call', () => {
        return chai.request(app).get('/')
            .then(res => {
                chai.expect(res.text).to.eql("collections api");
            });
    });
    it('should return response on call 2', () => {
        return chai.request(app).get('/')
            .then(res => {
                chai.expect(res.text).to.eql("collections api");
            });
    });
    it('should return response on call collections', () => {
        return chai.request(app).get('/colections')
            .then(res => {
                chai.expect(res.text).to.eql("collections api real deal");
            });
    });
});
