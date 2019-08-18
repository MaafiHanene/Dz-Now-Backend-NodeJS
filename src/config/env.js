const env = {
    HOST_URL: "http://127.0.0.1:3000",
    PORT: 3000,
    SWAGGER_HOST: '127.0.0.1:3000'
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