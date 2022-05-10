const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'

const endpointsFiles = ['./src/routes/login.routes', './src/routes/user.routes']

swaggerAutogen(outputFile, endpointsFiles)