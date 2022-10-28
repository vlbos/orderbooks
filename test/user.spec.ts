//  import * as ordersJSONFixture from '../fixtures/orders.json'
// import * as assetsJSONFixture from '../fixtures/assets.json'
// import * as tokensJSONFixture from '../fixtures/tokens.json'
const ordersJSONFixture = require('../src/fixtures/orders.json')
import connectDB, { setConsole } from '../src/utils/connectDB';
import { createUser } from '../src/services/user.service';
// require('dotenv').config();

// const path = require('path')
// console.log(path.resolve(__dirname, '../.env.test'))
// require('dotenv').config({
//     path: path.resolve(__dirname, '../.env.test')
// })
import config from 'config';

import mongoose from 'mongoose';
import { User } from '../src/models/user.model';
let originalLog: any;
let originalWarn: any;
let originalError: any;
describe('MongoDB service', () => {
    let mongoClient: typeof mongoose | null;

    beforeAll(async () => {
        originalLog = global.console.log;
        originalWarn = global.console.warn;
        originalError = global.console.error;

        global.console.log = jest.fn();
        global.console.warn = jest.fn();
        global.console.error = jest.fn();
        // Create a spy on console (console.log in this case) and provide some mocked implementation
        // In mocking global objects it's usually better than simple `jest.fn()`
        // because you can `unmock` it in clean way doing `mockRestore` 
        jest.spyOn(console, 'log').mockImplementation(() => { });
        setConsole(global.console.log, global.console.warn, global.console.error)

        mongoClient = await connectDB();

        // mongoClient = await connectDb(process.env.MONGO_URL as string);
    });

    afterAll(async () => {
        if (mongoClient != null) {
            await mongoClient.connection.close();
        }
        // console.log.mockRestore();
        global.console.log = originalLog;
        global.console.warn = originalWarn;
        global.console.error = originalError;

        // Clear mock (all calls etc) after each test. 
        // It's needed when you're using console somewhere in the tests so you have clean mock each time
        // console.log.mockClear();
    });

    afterEach(async () => {
        if (mongoClient != null) {
            await mongoClient.connection.db.dropDatabase();
        }
    });

    describe('Projects', () => {
        test('Add new project and get all projects', async () => {
            let user = await createUser({ email: "e@e.com", password: "password" })
            // expect(user).toHaveBeenCalledWith({});
            // expect(global.console.log).toHaveBeenCalledWith('log');

            // let projects = await getAllProjects();

            // expect(projects.length).toBe(2);
        });
    });
});
