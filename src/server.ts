import * as express from 'express'
import { createServer } from 'http'
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

var app = express()
var server = createServer(app);
app.use(cors())
app.use(bodyParser())

var port: number = process.env.PORT || 5000
server.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
})