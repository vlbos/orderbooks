//  import * as ordersJSONFixture from '../fixtures/orders.json'
// import * as assetsJSONFixture from '../fixtures/assets.json'
// import * as tokensJSONFixture from '../fixtures/tokens.json'
const ordersJSONFixture = require('../src/fixtures/orders.json')
import connectDB, { setConsole } from '../src/utils/connectDB';
import { createOrder } from '../src/services/orders.service';
import {orderFromJSON} from '../src/utils'
// require('dotenv').config();

// const path = require('path')
// console.log(path.resolve(__dirname, '../.env.test'))
// require('dotenv').config({
//     path: path.resolve(__dirname, '../.env.test')
// })
import config from 'config';

import mongoose from 'mongoose';
import { Order } from 'src/models/order.model';
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
        test.only('Add new project and get all projects', async () => {
            // console.log(ordersJSONFixture,"====orderjson====");
            const orderjson = orderFromJSON(ordersJSONFixture.orders[0]);
            console.log("====orderjson====",orderjson);
            let order = await createOrder({exchange: orderjson.exchange,
            maker: orderjson.maker,
            taker: orderjson.taker,
            makerRelayerFee: orderjson.makerRelayerFee,
            takerRelayerFee: orderjson.takerRelayerFee,
            makerProtocolFee: orderjson.makerProtocolFee,
            takerProtocolFee: orderjson.takerProtocolFee,
            makerReferrerFee: orderjson.makerReferrerFee,
            feeMethod: orderjson.feeMethod,
            feeRecipient: orderjson.feeRecipient,
            side: orderjson.side,
            saleKind: orderjson.saleKind,
            target: orderjson.target,
            howToCall: orderjson.howToCall,
            calldata: orderjson.calldata,
            replacementPattern: orderjson.replacementPattern,
            staticTarget: orderjson.staticTarget,
            staticExtradata: orderjson.staticExtradata,
            paymentToken: orderjson.paymentToken,
            quantity: orderjson.quantity,
            basePrice: orderjson.basePrice,
            englishAuctionReservePrice: orderjson.englishAuctionReservePrice ? orderjson.englishAuctionReservePrice : undefined,
            extra: orderjson.extra,
            createdTime: orderjson.createdTime
                ? orderjson.createdTime
                : undefined,
            listingTime: orderjson.listingTime,
            expirationTime: orderjson.expirationTime,
            salt: orderjson.salt,
            metadata: orderjson.metadata,
            hash: orderjson.hash})
            expect(order).toBe({});
            expect(global.console.log).toHaveBeenCalledWith('log');

            // let projects = await getAllProjects();

            // expect(projects.length).toBe(2);
        });
    });
});
