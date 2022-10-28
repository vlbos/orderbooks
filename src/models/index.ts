import {
    DocumentType,
    getModelForClass,
getDiscriminatorModelForClass,
    index,
    modelOptions,
    pre,
    prop,
} from '@typegoose/typegoose';
import { Order,ExchangeMetadata } from './order.model';
import { PacificAsset,WyvernAsset,PacificTraitStats,PacificFees,PacificAccount,Transaction,AssetEvent,PacificCollection,PacificAssetContract,AssetWhitelist } from './asset.model';
import { PacificAssetBundle,WyvernBundle } from './bundle.model';
import { PacificFungibleToken } from './token.model';

// // Create the order model from the Order class
export const assetWhitelistModel = getModelForClass(AssetWhitelist);
export const wyvernAssetModel = getModelForClass(WyvernAsset);
export const pacificTraitStatsModel = getModelForClass(PacificTraitStats);
export const pacificAssetModel = getModelForClass(PacificAsset);
export const pacificFeesModel = getModelForClass(PacificFees);
export const pacificAccountModel = getModelForClass(PacificAccount);
export const transactionModel = getModelForClass(Transaction);
export const assetEventModel = getModelForClass(AssetEvent);
export const pacificCollectionModel = getModelForClass(PacificCollection);
export const pacificAssetContractnModel = getModelForClass(PacificAssetContract);
export const wyvernBundleeModel = getModelForClass(WyvernBundle);
export const pacificAssetBundleModel = getModelForClass(PacificAssetBundle);
export const exchangeMetadataModel = getModelForClass(ExchangeMetadata);
export const orderModel = getModelForClass(Order);
export const pacificFungibleTokenModel = getModelForClass(PacificFungibleToken);
