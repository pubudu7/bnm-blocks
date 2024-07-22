jQuery( function ( $ ) {
	
    'use strict';

	$( 'a.js-bnmbti-import-demo' ).on( "click", function( event ) {
		event.preventDefault();

		var $button = $( this );

		if ( $button.hasClass( 'bnmbti-button-disabled' ) ) {
			return false;
		}

		startImport( getUrlParameter( 'import' ) );

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
				newData.append( 'action', 'bnmbti_importer_after_import_data' );
				newData.append( 'security', bnmbti.ajax_nonce );
				ajaxCall( newData );
			}
			else if ( 'undefined' !== typeof response.message ) {
				$( '.js-ocdi-ajax-response' ).append( response.message );

				if ( 'undefined' !== typeof response.title ) {
					$( '.js-ocdi-ajax-response-title' ).html( response.title );
				}

				if ( 'undefined' !== typeof response.subtitle ) {
					$( '.js-ocdi-ajax-response-subtitle' ).html( response.subtitle );
				}

				$( '.js-ocdi-importing' ).hide();
				$( '.js-ocdi-imported' ).show();

				// Trigger custom event, when OCDI import is complete.
				$( document ).trigger( 'ocdiImportComplete' );
			}
			else {
				$( '.js-ocdi-ajax-response' ).append( '<img class="ocdi-imported-content-imported ocdi-imported-content-imported--error" src="' + ocdi.plugin_url + 'assets/images/error.svg" alt="' + ocdi.texts.import_failed + '"><p>' + response + '</p>' );
				$( '.js-ocdi-ajax-response-title' ).html( ocdi.texts.import_failed );
				$( '.js-ocdi-ajax-response-subtitle' ).html( '<p>' + ocdi.texts.import_failed_subtitle + '</p>' );
				$( '.js-ocdi-importing' ).hide();
				$( '.js-ocdi-imported' ).show();
			}
		})
		.fail( function( error ) {
			$( '.js-ocdi-ajax-response' ).append( '<img class="ocdi-imported-content-imported ocdi-imported-content-imported--error" src="' + ocdi.plugin_url + 'assets/images/error.svg" alt="' + ocdi.texts.import_failed + '"><p>Error: ' + error.statusText + ' (' + error.status + ')' + '</p>' );
			$( '.js-ocdi-ajax-response-title' ).html( ocdi.texts.import_failed );
			$( '.js-ocdi-ajax-response-subtitle' ).html( '<p>' + ocdi.texts.import_failed_subtitle + '</p>' );
			$( '.js-ocdi-importing' ).hide();
			$( '.js-ocdi-imported' ).show();
		});
    }

	/**
	 * Run the main import with a selected predefined demo or with manual files (selected = false).
	 *
	 * Files for the manual import have already been uploaded in the '.js-ocdi-start-manual-import' event above.
	 */
	function startImport( selected ) {
		var data = new FormData();
        data.append( 'action', 'bnmbt_import_demo_data' );
		data.append( 'security', bnmbti.ajax_nonce );

		if ( selected ) {
			data.append( 'selected', selected );
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