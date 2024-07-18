jQuery( function ( $ ) {
	'use strict';
console.log(bnmbti);
    $('a.js-bnmbti-import-demo').on( "click", function() {

        var data = new FormData();
        data.append( 'action', 'bnmbt_import_demo_data' );

        $.ajax({
			method:      'POST',
			url:         bnmbti.ajax_url,
			data:        data,
            processData: false, 
            contentType: false, 
            success: function(response) {
                alert(response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error:', textStatus, errorThrown); // Log the error to the console
                console.error('Response:', jqXHR.responseText); // Log the server response for debugging
            }
		});
    } );

} );