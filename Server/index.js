var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require('cors');
var corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
var port = 4000;
app.listen(port);
console.log('Listening on port', port);


app.get('/', (req, res) => {
 
   res.json("Hola mundo")
    
});