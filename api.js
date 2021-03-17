var db = require('./dboperations');
var Intents = require('./Intents');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response } = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('./api', router);

router.use((request,response,next)=>{
    console.log('middleware');
    next();
})

router.route('/intents').get((request,response)=>{
    dboperations.GetIntents().then(result => {
        response.json(result[0]);
    })
})

router.route('/intents').get((request,response)=>{
    dboperations.GetIntents(request.params.id).then(result => {
        response.json(result[0]);
    })
})

var port = process.env.PORT || 8090;
app.listien(port);
console.log('Intents API is running at ' + port);



dboperations.GetIntents().then(result => {
    console.log(result);
})