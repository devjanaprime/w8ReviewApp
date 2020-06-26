$( document ).ready( onReady );

function addItem(){
    console.log( 'in addItem' );
    // get user input & place into an object
    const objectToSend = {
        color: $( '#colorIn' ).val(),
        description: $( '#descriptionIn' ).val(),
        size: $( '#sizeIn' ).val()
    }
    console.log( 'sending:', objectToSend );
    // send obj to server
    $.ajax({
        type: 'POST',
        url: '/items',
        data: objectToSend
    }).then( function( response ){
        // back from server, update DOM
        console.log( 'back from server:', response );
        getItems();
    }).catch( function( err ){
        alert( 'error adding item' );
        console.log( err );
    })
} // end addItem

function getItems(){
    // GET call to server
    $.ajax({
        type: 'GET',
        url: '/items'
    }).then( function( response ){
        console.log( 'back from GET:', response );
        // loop through results
        // display each on the DOM
    }).catch( function( err ){
        alert( 'error getting items' );
        console.log( err );
    })
} // getItems

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem );
    getItems();
} // end onReady