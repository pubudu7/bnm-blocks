<?php
/**
 * Display details before import.
 */

$predefined_demos = $this->import_files;
$selected_demo = isset( $_GET[ 'import' ] ) ? (int) $_GET[ 'import' ] : null;
$selected_demo_arr =  ! empty( $predefined_demos[ $selected_demo ] ) ? $predefined_demos[ $selected_demo ] : false;
$selected_demo_image_url = '';

if ( $selected_demo_arr ) {
    $selected_demo_image_url = ! empty ( $selected_demo_arr[ 'import_preview_image_url' ] ) ? $selected_demo_arr[ 'import_preview_image_url' ] : '';
}
 
?>

<div class="bnmbti-demo-page">
    <div class="bnmbti-before-import-section">
        <div class="bnmbti-option-form">
            <p>
                <input type="checkbox" id="bnmbti-import-demo-data" name="bnmbti-import-demo-data" checked></input>
                <label class="bnmbti-label" for="bnmbti-import-demo-data"><?php esc_html_e( 'Import Demo Content', 'bnm-blocks' ); ?></label>
                <span class="bnmbti-field-description"><?php esc_html_e( 'If you already have content on your website you may not want to import demo content. Mark this checkbox if you want to import demo posts, pages and menus.', 'bnm-blocks' ); ?> </span>
            </p>
            <a class="js-bnmbti-import-demo button button-primary button-hero"><?php esc_html_e( 'Import', 'bnm-blocks' ); ?></a>
        </div>
        <div class="bnmbti-selected-demo">
            <img width="1200" height="900" src="<?php echo esc_url( $selected_demo_image_url ); ?>" />
        </div>
        <div class="bnmbti-go-back"><a href="<?php echo esc_url( $this->get_demo_settings_url() ); ?>"><?php esc_html_e( 'Go Back' ); ?></a></div>
    </div>
    
    <div class="bnmbti-importing js-bnmbti-importing">
        <div class="bnmbti-importing-header">
            <h2><?php esc_html_e( 'Importing Content' , 'bnm-blocks' ); ?></h2>
            <p><?php esc_html_e( 'Please sit tight while we import your content. Do not refresh the page or hit the back button.' , 'bnm-blocks' ); ?></p>
        </div>
        <div class="bnmbti-importing-content">
            <img class="bnmbti-importing-content-importing" src="<?php echo esc_url( BNMBT__ADMIN_DIRECTORY_URL . '/images/importing.svg' ); ?>" alt="<?php esc_attr_e( 'Importing animation', 'bnm-blocks' ); ?>">
        </div>
    </div>

    <div class="bnmbti-imported js-bnmbti-imported">
        <div class="bnmbti-imported-header">
            <h2 class="js-bnmbti-ajax-response-title"><?php esc_html_e( 'Import Complete!' , 'bnm-blocks' ); ?></h2>
            <div class="js-bnmbti-ajax-response-subtitle">
                <p>
                    <?php esc_html_e( 'Congrats, your demo was imported successfully. You can now begin editing your site.' , 'bnm-blocks' ); ?>
                </p>
            </div>
        </div>
        <div class="bnmbti-imported-content">
            <div class="bnmbti__response  js-bnmbti-ajax-response"></div>
        </div>
        <div class="bnmbti-imported-footer">
            <?php echo wp_kses(
                $this->get_import_successful_buttons_html(),
                [
                    'a' => [
                        'href'   => [],
                        'class'  => [],
                        'target' => [],
                    ],
                ]
            ); ?>
        </div>
    </div>
</div>