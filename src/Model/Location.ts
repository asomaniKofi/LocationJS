import mongoose, { Document, Schema } from 'mongoose';

// Define the TypeScript interface for Location
export interface ILocation extends Document {
    Name: string;
    Areas: string[]; // Use a specific type instead of `any[]` if you know the structure
}

const locationSchema = new Schema({
    Name: { type: String, required: true },
    Areas: { type: [String], default: [] } // generic placeholder, update if you know the shape
}, { collection: 'Locations' });

const Location = mongoose.model<ILocation>('Locations', locationSchema);
export default Location;