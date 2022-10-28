
import {
    API_PATH,
    ORDERBOOK_PATH,
    ORDERBOOK_VERSION,
} from '../constants'

import Debug from "debug";
const debug = Debug("MyApp");
Debug.enable("*");

import express from 'express';
import {
  postOrderHandler,
  getOrdersHandler,
} from '../controllers/orders.controller';


const router = express.Router();
// router.use(deserializeUser, requireUser);

// Admin Get Users route
router.post('/post',  postOrderHandler);

// Get my info route
router.get('/', getOrdersHandler);

export default router;


