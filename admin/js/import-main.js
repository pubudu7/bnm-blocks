jQuery( function ( $ ) {
	
    'use strict';

	$( 'a.js-bnmbti-import-demo' ).on( "click", function( event ) {
		event.preventDefault();

		var $button = $( this );

		if ( $button.hasClass( 'bnmbti-button-disabled' ) ) {
			return false;
		}

		var importDemoContent = $('#bnmbti-import-demo-data').prop("checked");

		startImport( getUrlParameter( 'import' ), importDemoContent );

		$button.addClass( 'bnmbti-button-disabled' );
	} );

	/**
	 * The main AJAX call, which executes the import process.
	 *
	 * @param FormData data The data to be passed to the AJAX call.
	 */
    function ajaxCall( data ) {

        $.ajax({
			method:      'POST',
			url:         bnmbti.ajax_url,
			data:        data,
            processData: false, 
            contentType: false, 
			beforeSend:  function() {
				$( '.bnmbti-before-import-section' ).hide();
				$( '.js-bnmbti-importing' ).show();
			}
		})
		.done( function( response ) {			
			if ( 'undefined' !== typeof response.status && 'newAJAX' === response.status ) {
				ajaxCall( data );
			}
			else if ( 'undefined' !== typeof response.status && 'customizerAJAX' === response.status ) {
				// Fix for data.set and data.delete, which they are not supported in some browsers.
				var newData = new FormData();
				newData.append( 'action', 'bnmbt_import_customizer_data' );
				newData.append( 'security', bnmbti.ajax_nonce );

				// Set the wp_customize=on only if the plugin filter is set to true.
				if ( true === bnmbti.wp_customize_on ) {
					newData.append( 'wp_customize', 'on' );
				}

				ajaxCall( newData );
			}
			else if ( 'undefined' !== typeof response.status && 'afterAllImportAJAX' === response.status ) {
				// Fix for data.set and data.delete, which they are not supported in some browsers.
				var newData = new FormData();
				newData.append( 'action', 'bnmbt_importer_after_import_data' );
				newData.append( 'security', bnmbti.ajax_nonce );
				ajaxCall( newData );
			}
			else if ( 'undefined' !== typeof response.message ) {
				$( '.js-bnmbti-ajax-response' ).append( response.message );

				if ( 'undefined' !== typeof response.title ) {
					$( '.js-bnmbti-ajax-response-title' ).html( response.title );
				}

				if ( 'undefined' !== typeof response.subtitle ) {
					$( '.js-bnmbti-ajax-response-subtitle' ).html( response.subtitle );
				}

				$( '.js-bnmbti-importing' ).hide();
				$( '.js-bnmbti-imported' ).show();

				// Trigger custom event, when OCDI import is complete.
				$( document ).trigger( 'bnmbtiImportComplete' );
			}
			else {
				$( '.js-bnmbti-ajax-response' ).append( '<img class="bnmbti-imported-content-imported bnmbti-imported-content-imported--error" src="' + bnmbti.assets_url + 'images/error.svg" alt="' + bnmbti.texts.import_failed + '"><p>' + response + '</p>' );
				$( '.js-bnmbti-ajax-response-title' ).html( bnmbti.texts.import_failed );
				$( '.js-bnmbti-ajax-response-subtitle' ).html( '<p>' + bnmbti.texts.import_failed_subtitle + '</p>' );
				$( '.js-bnmbti-importing' ).hide();
				$( '.js-bnmbti-imported' ).show();
			}
		})
		.fail( function( error ) {
			$( '.js-bnmbti-ajax-response' ).append( '<img class="bnmbti-imported-content-imported bnmbti-imported-content-imported--error" src="' + bnmbti.assets_url + 'images/error.svg" alt="' + bnmbti.texts.import_failed + '"><p>Error: ' + error.statusText + ' (' + error.status + ')' + '</p>' );
			$( '.js-bnmbti-ajax-response-title' ).html( bnmbti.texts.import_failed );
			$( '.js-bnmbti-ajax-response-subtitle' ).html( '<p>' + bnmbti.texts.import_failed_subtitle + '</p>' );
			$( '.js-bnmbti-importing' ).hide();
			$( '.js-bnmbti-imported' ).show();
		});
    }

	/**
	 * Run the main import with a selected predefined demo or with manual files (selected = false).
	 *
	 * Files for the manual import have already been uploaded in the '.js-bnmbti-start-manual-import' event above.
	 */
	function startImport( selected, importDemoContent ) {
		var data = new FormData();
        data.append( 'action', 'bnmbt_import_demo_data' );
		data.append( 'security', bnmbti.ajax_nonce );

		if ( selected ) {
			data.append( 'selected', selected );
		}
		
		if ( importDemoContent ) {
			data.append( 'importContent', 'content' );
		}
		
		// AJAX call to import everything (content, widgets, before/after setup)
		ajaxCall( data );
	}

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