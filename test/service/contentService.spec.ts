import {loadFixtures} from "../fixtures/prepareDatabase"

import { before, describe, it } from "mocha";
import * as sinon from "sinon"
import * as typeorm from "typeorm"
import { User } from "../../models/user"
import { Content } from "../../models/content"
import { createConnection } from "typeorm";
import { contentService } from "../../service/contentService"
import { userService } from "../../service/userService"
import assert = require("assert")

describe('content service unit tests', () => {
    before(async () => {
        await loadFixtures();
    });

    it('should save a content', async () => {
        let contentObj = new Content();
        contentObj.user = await userService.GetUser(1);
        contentObj.text = "text here"

        await contentService.CreateContent(contentObj)
    });
});