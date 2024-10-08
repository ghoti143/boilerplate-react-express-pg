import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { index } from './routes/index';
import { people } from './routes/people';

export const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: '5mb' }));

app.use('/', index);
app.use('/people', people);
