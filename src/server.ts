import * as express from 'express'
import { createServer } from 'http'
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { graphqlExpress } from 'graphql-server-express';
import * as Realm from 'realm';
import config from './config'

var app = express()
var server = createServer(app);
app.use(cors())
app.use(bodyParser())


var realm = new Realm({
    sync: {
        user: Realm.Sync.User.adminUser(config.ROS_ADMIN_ACCESS_TOKEN),
        url: `realm://${config.ROS_ENDPOINT_HOST}:${config.ROS_ENDPOINT_PORT}`
    }
})

var port: number = process.env.PORT || config.SERVER_PORT
server.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
})