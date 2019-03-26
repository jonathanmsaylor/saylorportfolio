var bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/public'));

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/public/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8000);