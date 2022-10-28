import {
    DocumentType,
    getModelForClass,
    index,
    modelOptions,
    pre,
    prop,
} from '@typegoose/typegoose';
// import mongoose from 'mongoose';

/**
 * Full annotated Fungible Token spec with Pacific metadata
 */
export class PacificFungibleToken {
@prop()
    public name: string
@prop()
    public symbol: string
@prop()
    public decimals: number
@prop()
    public address: string
@prop()
    public imageUrl?: string
@prop()
    public ethPrice?: string
@prop()
    public usdPrice?: string
}


