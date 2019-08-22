import * as jwt from 'jwt-simple'
import { Request, Response, NextFunction } from "express"

export let tokenAuth = (req: Request, res: Response, next: NextFunction) => {
    var payload = { foo: 'bar' };
    var secret = 'xxx';

    // HS256 secrets are typically 128-bit random strings, for example hex-encoded:
    // var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex')

    // encode
    var token = jwt.encode(payload, secret);

    // decode
    var decoded = jwt.decode(token, secret);
    console.log(decoded); //=> { foo: 'bar' }
    next();
};