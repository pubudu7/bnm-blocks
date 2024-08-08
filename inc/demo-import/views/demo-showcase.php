<?php
/**
 * functions to showcase demos.
 */

$predefined_demos = $this->import_files;

echo '<pre>';
//var_dump($predefined_demos);
echo '</pre>';

?>

<div class="bnmbti-demo-page">

    <div class="bnmbti-demo-wrapper">

        <?php

        //var_dump(admin_url());

            foreach ( $predefined_demos as $index => $demo ) {

                $preview_img_url = $demo[ 'import_preview_image_url' ]; 
                $demo_preview_url = $demo[ 'preview_url' ];
                $theme_plan = $demo[ 'plan' ];

                ?>
                
                <div class="bnmbti-view-demo-card">

                    <?php 
                        if ( 'pro' === $theme_plan ) {
                            echo '<div class="bnmbti-pro-label">'. esc_html( 'PRO', 'bnm-blocks' ) .'</div>';
                        }
                    ?>

                    <div class="bnmbti-demo-img">
                        <a href="<?php echo esc_url( $demo_preview_url ); ?>" target="_blank">
                            <img width="1200" height="900" src="<?php echo esc_url( $preview_img_url ); ?>">
                        </a>
                    </div>
                    <div class="bnmbti-demo-details">
                        <div class="bnmbti-demo-name">
                            <?php echo esc_html( $demo['import_file_name'] ); ?>
                        </div>
                        <div class="bnmbti-demo-action">
                            <a href="<?php echo esc_url( $demo_preview_url ); ?>" class="bnmbti-demo-preview-btn button" target="_blank"><?php esc_html_e( 'Preview Demo', 'bnm-blocks' ); ?></a>
                            <a href="<?php echo esc_url( $this->get_demo_settings_url( array( 'step' => 'import', 'import' => esc_attr( $index ) ) ) ); ?>" class="bnmbti-import-demo-data button button-primary"><?php esc_html_e( 'Import Demo', 'bnm-blocks' ); ?></a>
                        </div>
                    </div>

                </div>
                
                <?php

            }

        ?>
        
    </div>

</div>

<?php