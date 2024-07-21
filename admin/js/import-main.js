jQuery( function ( $ ) {
	
    'use strict';

    $('a.js-bnmbti-import-demo').on( "click", function() {

        var data = new FormData();
        data.append( 'action', 'bnmbt_import_demo_data' );
		data.append( 'security', bnmbti.ajax_nonce );

        var selectedIndex = getUrlParameter( 'import' );
        if ( selectedIndex ) {
            data.append( 'selected', selectedIndex );
        }

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

    /**
	 * Get the parameter value from the URL.
	 *
	 * @param param
	 * @returns {boolean|string}
	 */
	function getUrlParameter( param ) {
		var sPageURL = window.location.search.substring( 1 ),
			sURLVariables = sPageURL.split( '&' ),
			sParameterName,
			i;

		for ( i = 0; i < sURLVariables.length; i++ ) {
			sParameterName = sURLVariables[ i ].split( '=' );

			if ( sParameterName[0] === param ) {
				return typeof sParameterName[1] === undefined ? true : decodeURIComponent( sParameterName[1] );
			}
		}

		return false;
	}

} );