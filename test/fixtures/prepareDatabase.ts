import { Builder, fixturesIterator, Loader, Parser, Resolver } from 'typeorm-fixtures-cli/dist';
import { createConnection, getRepository } from 'typeorm';
import { User } from "../../models/user"
import { Content } from "../../models/content"
export const loadFixtures = async () => {
    let connection;

    try {
        connection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "user",
            password: "pass",
            database: "typescript_api",
            entities: [
                User,
                Content
            ],
            synchronize: true,
            logging: false
        });
        await connection.synchronize(true);

        const loader = new Loader();
        loader.load('../../fixtures');

        const resolver = new Resolver();
        const fixtures = resolver.resolve(loader.fixtureConfigs);
        const builder = new Builder(connection, new Parser());

        for (const fixture of fixturesIterator(fixtures)) {
            const entity = await builder.build(fixture);
            await getRepository(entity.constructor.name).save(entity);
        }
    } catch (err) {
        throw err;
    } finally {
        if (connection) {
            await connection.close();
        }
    }
};