
import {
    API_PATH,
    ORDERBOOK_PATH,
    ORDERBOOK_VERSION,
} from '../constants'
import Debug from "debug";
const debug = Debug("MyApp");
Debug.enable("*");
import express from 'express';
import {  getPaymentTokensHandler } from '../controllers/tokens.controller';
import { validate } from '../middleware/validate';
import { createUserSchema, loginUserSchema } from '../schemas/user.schema';

const router = express.Router();

// Register user route
router.get('/tokens', getPaymentTokensHandler);



export default router;
