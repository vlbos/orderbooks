import config from 'config';
import { CookieOptions, NextFunction, Request, Response } from 'express';
import { CreateUserInput, LoginUserInput } from '../schemas/user.schema';
import { createAssetWhitelist,findAsset } from '../services/assets.service';
import AppError from '../utils/appError';
import Debug from "debug";
const debug = Debug("MyApp");
Debug.enable("*");
// Exclude this fields from the response
export const excludedFields = ['password'];

export const getAssetHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const asset = await findAsset({
            tokenId: req.query.tokenId,
            tokenAddress: req.query.tokenAddress,
        });

        res.status(201).json({
            status: 'success',
            ...asset
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

export const postAssetWhitelistHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        debug(req.query)
        debug(req.params)
        const user = await createAssetWhitelist({
            email: req.body.email,
            tokenId: req.params.tokenId,
            tokenAddress: req.params.tokenAddress,
        });


        // Send Access Token
        res.status(200).json({
            status: 'success',
            user,
        });
    } catch (err: any) {
        next(err);
    }
};
