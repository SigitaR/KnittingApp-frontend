//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/KnittingApp-frontend'));



app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/KnittingApp-frontend/index.html'));

});

// Start the app by listening on the default  port
app.listen(process.env.PORT || 8080);


console.log('bitconect!');