<?php

namespace ThemezHut\BNM_Blocks\CSS;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class CSS_Utility {

    /**
     * Variable to hold style array.
     */
    public $styles = array();

    /**
     * Blocks Attributes;
     */
    public $attributes = '';

    /**
     * Constructor
     * 
     * @access public
     * @param $attributes Block attributes;
     */
    public function __construct( $attributes ) {
        $this->attributes = $attributes;
    }

    /**
     * Array $params;
     */
    public function generate_styles_array( $params ) {
        foreach( $params as $item ) {
            if ( isset( $this->attributes[ $item['value'] ] ) && ! $this->is_empty( $this->attributes[ $item['value'] ] ) ) {
                
                $value = $this->attributes[ $item['value'] ];

                if ( array_key_exists( 'type', $item ) ) {
                    $this->styles[ $item['property'] ] = $this->format_value_for_type( $value, $item['type'] );
                } else {
                    $this->styles[ $item['property'] ] = $value;
                }
                
            }
        }
    }

    /**
     * Check for empty. not 0;
     */
    private function is_empty( $var ) {
        return empty( $var ) && 0 !== $var;
    }

    /**
     * Format value according to the type.
     *
     * @param mixed  $value      The raw value.
     * @param string $value_type The type of the value (e.g. font-size, box-control).
     * @return string Escaped formatted value ready for CSS output.
     */
    private function format_value_for_type( $value, $value_type ) {

        if ( 'font-size' === $value_type ) {

            // Ensure value is numeric and append px if missing.
            $value = is_numeric( $value ) ? $value . 'px' : $value;
            return $value;

        } elseif ( 'box-control' === $value_type && is_array( $value ) ) {

            // Helper to normalize each side.
            $normalize = function( $val ) {
                $val = trim( (string) $val );

                // Default to 0px if empty.
                if ( $val === '' ) {
                    return '0px';
                }

                // If value has a unit already, keep it.
                if ( preg_match( '/[a-z%]+$/i', $val ) ) {
                    return $val;
                }

                // Otherwise append px.
                return $val . 'px';
            };

            $top    = $normalize( $value['top'] ?? '0' );
            $right  = $normalize( $value['right'] ?? '0' );
            $bottom = $normalize( $value['bottom'] ?? '0' );
            $left   = $normalize( $value['left'] ?? '0' );

            return "{$top} {$right} {$bottom} {$left}";
        }

        return '';
    }

    public function generate_css() {
        $css = '';
        foreach( $this->styles as $property => $value ) {
            $css .= "$property:$value;";
        }
        return $css;
    }

}