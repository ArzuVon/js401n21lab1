"use strict";

require("dotenv").config(); //require here imports from package.json
const port = process.env.PORT ?? 3000;

const server = require('./server.js'); //require imports the file from somewhere else
server.start(port);
