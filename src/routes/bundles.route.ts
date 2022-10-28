
import {
    API_PATH,
    ORDERBOOK_PATH,
    ORDERBOOK_VERSION,
} from '../constants'


import Debug from "debug";
const debug = Debug("MyApp");
Debug.enable("*");
import express from 'express';
import { getBundlesHandler } from '../controllers/bundles.controller';
import { validate } from '../middleware/validate';
import { createUserSchema, loginUserSchema } from '../schemas/user.schema';

const router = express.Router();

// bundles route
router.get('/bundles', getBundlesHandler);



export default router;
