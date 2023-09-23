const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



module.exports =  {app}

