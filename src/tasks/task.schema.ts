import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { takeLast } from 'rxjs';

type TimeUnit = 'min' | 'hour' | 'day'

export const TaskSchema = new mongoose.Schema({
    name: String,
    age: Number,
    description: String,
    tags: [String]
});