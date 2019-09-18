const env = {
    HOST_URL: "http://127.0.0.1:3000",
    PORT: 3000,
    SWAGGER_HOST: '127.0.0.1:3000',
    DZNOW_DATABASE: 'dznow_db',
    DB_USERNAME: 'dznow_user',
    DB_PASSWORD: '123',
    DB_HOST: 'localhost',
    DB_DIALECT: 'postgres',
    DB_POOL: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    SECRET:'nodeauthsecret',//for auth
    SEND_GRID_API_KEY: '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',
   
}

exports.getPort = function () {
    if(process.env.NODE_ENV=="development") return env.PORT
    return process.env.PORT
}

exports.getHostAddress = function () {
    if(process.env.NODE_ENV=="development") return "127.0.0.1"
    return "0.0.0.0"
}

exports.getSwaggerHost = function () {
    if(process.env.NODE_ENV=="development") return env.SWAGGER_HOST
    return process.env.SWAGGER_HOST
}

exports.getDataBase = function () {
    if(process.env.NODE_ENV=="development") return env.DZNOW_DATABASE
    return process.env.DZNOW_DATABASE
}

exports.getDataBaseUserName = function () {
    if(process.env.NODE_ENV=="development") return env.DB_USERNAME
    return process.env.DB_USERNAME
}

exports.getDataBasePassword = function () {
    if(process.env.NODE_ENV=="development") return env.DB_PASSWORD
    return process.env.DB_PASSWORD
}

exports.getDataBaseHost = function () {
    if(process.env.NODE_ENV=="development") return env.DB_HOST
    return process.env.DB_HOST
}

exports.getDataBaseDialect = function () {
    if(process.env.NODE_ENV=="development") return env.DB_DIALECT
    return process.env.DB_DIALECT
}

exports.getDataBasePool = function () {
    if(process.env.NODE_ENV=="development") return env.DB_POOL
    return process.env.DB_POOL
}

exports.getAuthSecret = function () {
    if(process.env.NODE_ENV=="development") return env.SECRET
    return process.env.SECRET
}

exports.getSendGridApiKey = function () {
    if(process.env.NODE_ENV=="development") return env.SEND_GRID_API_KEY
    return process.env.SEND_GRID_API_KEY
}