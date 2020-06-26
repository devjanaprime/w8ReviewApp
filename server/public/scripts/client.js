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
    }).catch( function( err ){
        alert( 'error adding item' );
        console.log( err );
    })
} // end addItem

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem );
} // end onReady