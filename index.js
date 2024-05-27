const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config/config");
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')



app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

app.listen(PORT, () => console.log("Servidor levantado en el puerto " + 3000));

/*const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
app.use(express.json());

app.use('/', routes);


dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
*/