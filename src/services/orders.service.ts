import { omit, get } from 'lodash';
import { FilterQuery, QueryOptions } from 'mongoose';
import config from 'config';
import { Order } from '../models/order.model';
import { orderModel } from '../models/index';

import { excludedFields } from '../controllers/orders.controller';
import { signJwt } from '../utils/jwt';
import redisClient from '../utils/connectRedis';
import { DocumentType } from '@typegoose/typegoose';

// CreateOrder service
export const createOrder = async (input: Partial<Order>) => {
    const order = await orderModel.create(input);
    return omit(order.toJSON(), excludedFields);
};

// Find Order by Id
export const findOrderById = async (id: string) => {
    const order = await orderModel.findById(id).lean();
    return omit(order, excludedFields);
};

// Find All orders
export const findAllOrders = async () => {
    return await orderModel.find();
};

// Find one order by any fields
export const findOrder = async (
    query: FilterQuery<Order>,
    options: QueryOptions = {}
) => {
        return await orderModel.find(query, {}, options)
};

