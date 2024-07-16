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

            foreach ( $predefined_demos as $demo ) {

                $preview_img_url = $demo['import_preview_image_url']; 
                $demo_preview_url = $demo['preview_url'];
                ?>
                
                <div class="bnmbti-view-theme-card">

                    <div class="bnmbti-theme-img">
                        <img src="<?php echo $preview_img_url ?>">
                    </div>
                    <div class="bnmbti-theme-details">
                        <button class="bnmbti-import-demo-data">Import Demo</button>
                        <a href="<?php echo $demo_preview_url ?>" class="bnmbti-theme-preview-btn" target="_blank">Preview Demo</a>
                    </div>

                </div>
                
                <?php

            }

        ?>
    </div>

</div>

<?php