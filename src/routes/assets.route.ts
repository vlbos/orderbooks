
import {
    API_PATH,
    ORDERBOOK_PATH,
    ORDERBOOK_VERSION,
} from '../constants'
import * as ordersJSONFixture from '../fixtures/orders.json'
import * as assetsJSONFixture from '../fixtures/assets.json'
import * as tokensJSONFixture from '../fixtures/tokens.json'

import Debug from "debug";
const debug = Debug("MyApp");
Debug.enable("*");
import express from 'express';
import {  getAssetsHandler } from '../controllers/assets.controller';
import { validate } from '../middleware/validate';
import { createUserSchema, loginUserSchema } from '../schemas/user.schema';

const router = express.Router();

// Register user route
router.get('/', validate(createUserSchema), getAssetsHandler);



export default router;
