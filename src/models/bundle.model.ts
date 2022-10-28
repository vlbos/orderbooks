import {
    DocumentType,
    getModelForClass,
    index,
    modelOptions,
    pre,
    prop,
    Ref,
} from '@typegoose/typegoose';
// import mongoose from 'mongoose';
import { PacificAccount, PacificAsset, PacificAssetContract, WyvernAsset } from './asset.model';

// Abstractions over Wyvern assets for bundles
export class WyvernBundle {
    @prop({ type: () => WyvernAsset })
    public assets: WyvernAsset[];
    @prop({ type: () => [String] })
    public schemas: string[];
    @prop()
    public name?: string;
    @prop()
    public description?: string;
    @prop()
    public external_link?: string;
}

/**
 * Bundles of assets, grouped together into one Pacific order
 * URLs for bundles are auto-generated from the name
 */
export class PacificAssetBundle {
    @prop({ type: () => PacificAccount })
    public maker: PacificAccount;
    @prop({ type: () => PacificAsset })
    public assets: PacificAsset[];
    @prop()
    public name: string;
    @prop()
    public slug: string;
    @prop()
    public permalink: string;

    // Sell orders (auctions) on the bundle. Null if bundle in a list and didn't prefetch sell orders
    // @prop({ type: () => Order })
    // @prop()
    // public sellOrders?: Ref<Order>[];

    @prop({ type: () => PacificAssetContract })
    public assetContract?:PacificAssetContract;
    @prop()
    public description?: string;
    @prop()
    public externalLink?: string;
}


