<?php
/**
 * functions to showcase demos.
 */

$predefined_demos = $this->import_files;
$pro_url = $this->pro_url;
//$license_active = $this->license_active;

?>

<div class="bnmbti-demo-page">

    <div class="bnmbti-demo-wrapper">

        <?php

        //var_dump(admin_url());

            foreach ( $predefined_demos as $index => $demo ) {

                $preview_img_url = $demo[ 'import_preview_image_url' ]; 
                $demo_preview_url = $demo[ 'preview_url' ];
                $plan = isset( $demo[ 'plan' ] ) ? $demo[ 'plan' ] : '';
                $license_active = isset( $demo[ 'license_active' ] ) ? $demo[ 'license_active' ] : false;

                ?>
                
                <div class="bnmbti-view-demo-card">

                    <?php 
                        if ( 'pro' === $plan ) {
                            echo '<div class="bnmbti-pro-label">'. esc_html( 'PRO', 'bnm-blocks' ) .'</div>';
                        }
                    ?>

                    <div class="bnmbti-demo-img">
                        <img width="1200" height="900" src="<?php echo esc_url( $preview_img_url ); ?>">
                    </div>
                    <div class="bnmbti-demo-details">
                        <div class="bnmbti-demo-name">
                            <?php echo esc_html( $demo['import_file_name'] ); ?>
                        </div>
                        <div class="bnmbti-demo-action">
                            <a href="<?php echo esc_url( $demo_preview_url ); ?>" class="bnmbti-demo-preview-btn button" target="_blank"><?php esc_html_e( 'Preview', 'bnm-blocks' ); ?></a>
                            
                            <?php if ( 'pro' === $plan && ! $license_active ) { ?>
                                <a href="<?php echo esc_url( $pro_url ); ?>" class="bnmbti-import-demo-data button button-primary" target="_blank"><?php esc_html_e( 'Buy Pro', 'bnm-blocks' ); ?></a>
                            <?php } else { ?>
                                <a href="<?php echo esc_url( $this->get_demo_settings_url( array( 'step' => 'import', 'import' => esc_attr( $index ) ) ) ); ?>" class="bnmbti-import-demo-data button button-primary"><?php esc_html_e( 'Import Demo', 'bnm-blocks' ); ?></a>
                            <?php } ?>
                        
                        </div>
                    </div>

                </div>
                
                <?php

            }

        ?>
        
    </div>

</div>

<?php