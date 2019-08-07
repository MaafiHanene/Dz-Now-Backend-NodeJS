// load all env variables from .env file into process.env object.
require('dotenv').config()
const env = require("./config/env")

global.__basedir = __dirname;
//const db = require('./config/db.js');
// force: true will drop the table if it already exists
/*db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
})

db.sequelize*/

// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})


// Import Swagger Options
const swagger = require("./config/swagger")

// Register Swagger
fastify.register(require("fastify-swagger"), swagger.options)

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

const routes = require("./routes")

routes.forEach((route, index) => {
    fastify.route(route)
})

// Run the server!
const start = async () => {
    try {
        const port = env.getPort()
        const address = env.getHostAddress()
        fastify.listen(port, address,function () {
            fastify.swagger()
            console.log('server listening on ' + port)
        })

    } catch (err) {
        console.log(err)
        fastify.log.error(err)
        process.exit(1)
    }
}
start()

