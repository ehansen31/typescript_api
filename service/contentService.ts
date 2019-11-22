import { Content } from "../models/content";
import { getRepository } from "typeorm";

export class contentService {
    constructor() { }

    static async CreateContent(contentObj: Content): Promise<Content> {
        let contentRepository = getRepository(Content);
        try {
            return contentRepository.save(contentObj);
        } catch (error) {
            throw error
        }
    }
}