// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// gobals
const port = 5000;
inventory=[];
// spin up server
app.listen( port, ()=>{
    console.log( 'server up:',  port );
}) //end server up
// routes