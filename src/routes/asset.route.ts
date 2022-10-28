
import {
    API_PATH,
    ORDERBOOK_PATH,
    ORDERBOOK_VERSION,
} from '../constants'


import Debug from "debug";
const debug = Debug("MyApp");
Debug.enable("*");
import express from 'express';
import { getAssetHandler, postAssetWhitelistHandler } from '../controllers/asset.controller';

const router = express.Router();

// Register user route
router.post('/:tokenAddress/:tokenId/whitelist',  postAssetWhitelistHandler);

// Login user route
router.get('/:tokenAddress/:tokenId',  getAssetHandler);

export default router;
