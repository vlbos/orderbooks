
import {
    API_PATH,
    ORDERBOOK_PATH,
    ORDERBOOK_VERSION,
} from '../constants'

import Debug from "debug";
const debug = Debug("MyApp");
Debug.enable("*");
import express from 'express';
import { getBundleHandler } from '../controllers/bundle.controller';
import { validate } from '../middleware/validate';
import { createUserSchema, loginUserSchema } from '../schemas/user.schema';

const router = express.Router();


// Login user route
router.get('/:slug/', getBundleHandler);

export default router;
