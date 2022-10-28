import mongoose from 'mongoose';
import config from 'config';
import debug from 'debug';
let consolelog: any = console.log
let consoleerror: any = console.error
let consolewarn: any = console.warn
export const setConsole = (log: any, warn: any, error: any) => { consolelog = log; consoleerror = error; consolewarn = warn }
const log: debug.IDebugger = debug('app:dbconnect');
let dbUrl = ""
consolelog("=================", process.env.MONGO_URL)
if (process.env.NODE_ENV === 'test') {
    dbUrl = process.env.MONGO_URL == undefined ? "" : process.env.MONGO_URL;//"mongodb://localhost:27017/test";//process.env.MONGO_URL;
} else {
    dbUrl = `mongodb://${config.get('dbName')}:${config.get(
        'dbPass'
    )}@${config.get('dbServer')}:${config.get('dbPort')}/${config.get('dbDBName')}?authSource=admin`;
}

log(dbUrl);
export const connectDB = async () => {
    let mongoClient: typeof mongoose;

    try {
        consolelog("========dbUrl=========", dbUrl)
        mongoClient=await mongoose.connect(dbUrl);
        consolelog('Database connected...');
        return mongoClient
    } catch (error: any) {
        consolelog(error.message);
        setTimeout(connectDB, 5000);
    }
    return null
};

export default connectDB;

