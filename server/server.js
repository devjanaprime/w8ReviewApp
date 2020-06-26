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
app.get( '/items', ( req, res )=>{
    console.log( 'in  /items GET' );
    res.send( inventory );
}) //end /items GET

app.post( '/items', ( req, res )=>{
    console.log( 'in /items POST:', req.body );
    res.send( 'ribbet' );
}) //end /items POST