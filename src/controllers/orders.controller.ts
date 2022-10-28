import config from 'config';
import { CookieOptions, NextFunction, Request, Response } from 'express';
import { CreateUserInput, LoginUserInput } from '../schemas/user.schema';
import { createOrder, findOrder } from '../services/orders.service';
import { Order } from 'src/models/order.model';
import AppError from '../utils/appError';
import { omit, get } from 'lodash';

import Debug from "debug";
const debug = Debug("MyApp");
Debug.enable("*");
// Exclude this fields from the response
export const excludedFields = ['owner', 'sale_kind', 'asset_contract_address', 'payment_token_address', 'is_english', 'is_expired', 'bundled', 'include_invalid', 'token_id', 'token_ids', 'listed_after', 'listed_before', 'limit', 'offset'];

export const postOrderHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log("===========postOrderHandler==========", req.body)
    try {
        const user = await createOrder({
            exchange: req.body.exchange,
            maker: req.body.maker,
            taker: req.body.taker,
            makerRelayerFee: req.body.makerRelayerFee,
            takerRelayerFee: req.body.takerRelayerFee,
            makerProtocolFee: req.body.makerProtocolFee,
            takerProtocolFee: req.body.takerProtocolFee,
            makerReferrerFee: req.body.makerReferrerFee,
            feeMethod: req.body.feeMethod,
            feeRecipient: req.body.feeRecipient,
            side: req.body.side,
            saleKind: req.body.saleKind,
            target: req.body.target,
            howToCall: req.body.howToCall,
            calldata: req.body.calldata,
            replacementPattern: req.body.replacementPattern,
            staticTarget: req.body.staticTarget,
            staticExtradata: req.body.staticExtradata,
            paymentToken: req.body.paymentToken,
            quantity: req.body.quantity,
            basePrice: req.body.basePrice,
            englishAuctionReservePrice: req.body.englishAuctionReservePrice ? req.body.englishAuctionReservePrice : undefined,
            extra: req.body.extra,
            createdTime: req.body.createdTime
                ? req.body.createdTime
                : undefined,
            listingTime: req.body.listingTime,
            expirationTime: req.body.expirationTime,
            salt: req.body.salt,
            metadata: req.body.metadata,
            hash: req.body.hash
        });

        res.status(201).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (err: any) {
        if (err.code === 11000) {
            return res.status(409).json({
                status: 'fail',
                message: 'Email already exist',
            });
        }
        next(err);
    }
};

export const getOrdersHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        debug(req.query)
        debug(req.params)
        debug(req.body)
        let orderjson = omit(req.query, excludedFields);
        let q: any = {}
        if (req.query.listed_after) {
            q["listing_time"] = { $gt: req.query.listed_after }
        }
        if (req.query.listed_before) {
            q["listing_time"] = { $lte: req.query.listed_before }
        }
        if (req.query.token_id) {
            q["$or"] = [{ "metadata.asset.id": req.query.token_id }, { "metadata.bundle.assets": { $elemMatch: { "id": req.query.token_id } } }];
        }
        if (req.query.token_ids) {
            q["$or"] = [{ "metadata.asset.id": { "$in": req.query.token_ids } }, { "metadata.bundle.assets.id": { "$in": req.query.token_ids } }];
        }
        if (req.query.is_expired) {
            debug("req.query.is_expired" + req.query.is_expired)
        }
        if (req.query.asset_contract_address) {
            q["metadata.asset.address"] = req.query.asset_contract_address;
        }
        if (req.query.bundled) {
            q["metadata.bundle"] = { $ne: null };
        }
        if (req.query.include_invalid) {
            debug("req.query.include_invalid" + req.query.include_invalid)
        }
        orderjson = Object.assign(orderjson, q)
        let o: any = {}
        if (req.query.limit) {
            o["limit"] = Number(req.query.limit)
        }
        if (req.query.offset) {
            o["offset"] = Number(req.query.offset)
        }
        debug(orderjson,o)
        // Get the user from the collection
        const orders = await findOrder(orderjson, o);

        // Send Access Token
        res.status(200).json({
            status: 'success',
            orders
        });
    } catch (err: any) {
        next(err);
    }
};

