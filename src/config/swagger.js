const env = require("./env")

exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'DZ NOW API',
            description: 'DZ Now App',
            version: '1.0.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        },
        host: env.getSwaggerHost(),
        schemes: ['https' ,'http' ],
        consumes: ['application/json'],
        produces: ['application/json']
    }
}