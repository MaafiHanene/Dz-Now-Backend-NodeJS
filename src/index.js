// load all env variables from .env file into process.env object.
require('dotenv').config()

global.__basedir = __dirname;
const db = require('./config/db.js');
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
})

db.sequelize

// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

process.on('uncaughtException', function (exception) {
    console.log(exception); // to see your exception details in the console
    // if you are on production, maybe you can send the exception details to your
    // email as well ?
});

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
const passport = require("passport");
/*const path = require('path')

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public')
   // prefix: '/public/', // optional: default '/'
})*/
const passportConf = require('./config/passport');

fastify.use(passportConf(passport).initialize())
// Run the server!
const start = async () => {
    try {
        const port = envVarsController.getPort()
        const address = envVarsController.getHostAddress()
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

