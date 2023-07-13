<?php

namespace ThemezHut\BNM_Blocks\CSS;

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
     */
    private function format_value_for_type( $value, $value_type ) {
        if ( 'font-size' === $value_type ) {
            return $value . 'px';
        } elseif ( 'box-control' === $value_type ) {
            $top = ( isset($value['top'] ) && ! empty( $value['top'] ) ) ? $value['top'] : 0;
            $right = ( isset($value['right'] ) && ! empty( $value['right'] ) ) ? $value['right'] : 0;
            $bottom = ( isset($value['bottom'] ) && ! empty( $value['bottom'] ) ) ? $value['bottom'] : 0;
            $left = ( isset($value['left'] ) && ! empty( $value['left'] ) ) ? $value['left'] : 0;
            
            return $top . ' ' . $right . ' ' . $bottom . ' ' . $left;
        }
    }

    public function generate_css() {
        $css = '';
        foreach( $this->styles as $property => $value ) {
            $css .= "$property:$value;";
        }
        return $css;
    }

}