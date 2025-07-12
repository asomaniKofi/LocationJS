import mongoose, { Document } from 'mongoose';
export interface ILocation extends Document {
    Name: string;
    Areas: string[];
}
declare const Location: mongoose.Model<ILocation, {}, {}, {}, mongoose.Document<unknown, {}, ILocation, {}> & ILocation & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Location;
