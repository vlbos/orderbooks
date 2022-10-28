import { omit, get } from 'lodash';
import { FilterQuery, QueryOptions } from 'mongoose';
import config from 'config';
import { AssetWhitelist,PacificAsset } from '../models/asset.model';
import { assetWhitelistModel,pacificAssetModel } from '../models/index';

import { excludedFields } from '../controllers/orders.controller';
import { signJwt } from '../utils/jwt';
import redisClient from '../utils/connectRedis';
import { DocumentType } from '@typegoose/typegoose';

// CreateOrder service
export const createAssetWhitelist = async (input:Partial<AssetWhitelist>) => {
    const order = await assetWhitelistModel.create(input);
    return omit(order.toJSON(), excludedFields);
};


// Find one user by any fields
export const findAsset = async (
  query: FilterQuery<PacificAsset>,
  options: QueryOptions = {}
) => {
  return await pacificAssetModel.findOne(query, {}, options);
};


// Find one user by any fields
export const findAssets = async (
  query: FilterQuery<PacificAsset>,
  options: QueryOptions = {}
) => {
  return await pacificAssetModel.find(query, {}, options);
};