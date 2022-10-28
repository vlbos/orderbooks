import {
    DocumentType,
    getModelForClass,
    index,
    modelOptions,
    pre,
    plugin,
    prop,
    Ref,
} from '@typegoose/typegoose';
import autopopulate from 'mongoose-autopopulate';
// import { HowToCall, SaleKind, OrderSide, FeeMethod } from '../types';
// import mongoose from 'mongoose';
import { PacificAccount, PacificAsset,WyvernAsset } from './asset.model';
import { WyvernBundle, PacificAssetBundle } from './bundle.model';

import { PacificFungibleToken } from './token.model';

export class ExchangeMetadata{
    @prop()
    public kind: string;
    @prop()
    public referrerAddress?: string;
    @prop({ type: () => WyvernAsset })
    public asset: WyvernAsset;
    @prop()
    public schema: string;
    @prop({ type: () => WyvernBundle })
    public bundle: WyvernBundle;
}
// @modelOptions({
//   schemaOptions: {
//     // Set the property key which is used to discriminate between the different types
//     // discriminatorKey: 'name',
//     // _id:false,
//   },
// })
// export class ExchangeMetadataForBase {
//     @prop()
//     public referrerAddress?: string;
// }

// // A Enum is used to easily keep track of different types, instead of hardcoding it in many places
// export enum ExchangeMetadataTypes {
//     ExchangeMetadataForAsset = 'ExchangeMetadataForAsset',
//     ExchangeMetadataForBundle = 'ExchangeMetadataForBundle',
// }

// export class ExchangeMetadataForAsset extends ExchangeMetadataForBase {
//     @prop({ type: () => WyvernAssetBase })
//     public asset: Ref<WyvernAssetBase>;
//     @prop()
//     public schema: string;
// }

// export class ExchangeMetadataForBundle extends ExchangeMetadataForBase {
//     @prop({ type: () => WyvernBundle })
//     public bundle: Ref<WyvernBundle>;
// }

// @modelOptions({
//   schemaOptions: {
//     // Set the property key which is used to discriminate between the different types
//     // discriminatorKey: 'name',
//     // _id:false,
//   },
// })
// export class WyvernAssetBase {
//     @prop()
//     public id?: string;
//     @prop()
//     public address: string;
// }

// // A Enum is used to easily keep track of different types, instead of hardcoding it in many places
// export enum WyvernAssetTypes {
//     WyvernNFTAsset = 'WyvernNFTAsset',
//     WyvernFTAsset = 'WyvernFTAsset',
// }

// export class WyvernNFTAsset extends WyvernAssetBase {

// }
// export class WyvernFTAsset extends WyvernAssetBase {
//     @prop()
//     public quantity: string;
// }


// @plugin(autopopulate)
export class Order {
    @prop()
    public exchange: string;
    @prop()
    public maker: string;
    @prop()
    public taker: string;
    @prop()
    public makerRelayerFee: string;
    @prop()
    public takerRelayerFee: string;
    @prop()
    public makerProtocolFee: string;
    @prop()
    public takerProtocolFee: string;
    @prop()
    public makerReferrerFee: string;
    @prop()
    public feeRecipient: string;
    @prop()
    public feeMethod: number;
    @prop()
    public side: number;
    @prop()
    public saleKind: number;
    @prop()
    public target: string;
    @prop()
    public howToCall: number;
    @prop()
    public calldata: string;
    @prop()
    public replacementPattern: string;
    @prop()
    public staticTarget: string;
    @prop()
    public staticExtradata: string;
    @prop()
    public paymentToken: string;
    @prop()
    public quantity: string;
    @prop()
    public basePrice: string;
    @prop()
    public englishAuctionReservePrice?: string;
    @prop()
    public extra: string;
    @prop()
    public createdTime?: string;
    @prop()
    public listingTime: string;
    @prop()
    public expirationTime: string;
    @prop()
    public salt: string;
    @prop({ type: () => ExchangeMetadata })
    public metadata?:ExchangeMetadata;
    @prop()
    public hash?: string;
}


