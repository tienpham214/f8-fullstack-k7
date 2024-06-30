<?php
if (!defined('ABSPATH')) exit; // Exit if accessed directly

class ImueUsers
{
    public $numberOfRows = 1;
    public $posts_per_page = '';
    public $role = '';
    public $offset = '';

    public function importUsersDisplay()
    { ?>
        <h2>
            <?php __("IMPORT / UPDATE Users", "imue"); ?>
        </h2>

        <p>
            <?php _e("Anh chị em Bình Minh vui lòng tải file mẫu ở đây để sử dụng import user vào hệ thống.", "imue"); ?>
            <a href='<?php echo plugins_url('/example_excel/import-users-ww.xlsx', __FILE__); ?>'>
                <?php _e("Users Excel Sample", "imue"); ?>
            </a>
        </p>

        <div>
            <form method="post" id='user_import' enctype="multipart/form-data" action="<?php echo admin_url('admin.php?page=imue&tab=main'); ?>">

                <table class="form-table">
                    <tr valign="top">
                        <td>
                            <?php wp_nonce_field('excel_upload'); ?>
                            <input type="hidden" name="importUsers" value="1" />
                            <div class="uploader">
                                <img src="" class='userSelected' />
                                <input type="file" required name="file" class="imueFile" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                            </div>
                        </td>
                    </tr>
                </table>
                <?php submit_button(__('Upload', 'imue'), 'primary', 'upload'); ?>
            </form>
            <div class='result'>
                <?php $this->importUsers(); ?>
            </div>
        </div>
    <?php
    }

    public function exportUsersDisplay()
    { ?>
        <h2>
            <?php _e('Xem video Hướng dẫn upload tại đây', 'imue') ?>
        </h2>
        <p>
            <i><?php _e('<iframe width="100%" height="600" src="https://www.youtube.com/embed/XjTazcmWjx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 'imue') ?></i>
        </p>
    <?php
    }

    public function imue_meta_keys()
    {
        $meta_keys = array_keys(get_user_meta(get_current_user_id()));
        set_transient('meta_keys', $meta_keys, 60 * 60 * 24); # create 1 Day Expiration
        if (!empty($meta_keys)) {
            return $meta_keys;
        }
    }

    public function importUsers()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && current_user_can('author') && isset($_POST['importUsers'])) {

            check_admin_referer('excel_upload');
            check_ajax_referer('excel_upload');

            $filename = $_FILES["file"]["tmp_name"];

            if ($_FILES["file"]["size"] > 0) {
                if ($_FILES["file"]["type"] === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                    require_once(plugin_dir_path(__FILE__) . '/Classes/PHPExcel/IOFactory.php');
                    try {
                        $objPHPExcel = PHPExcel_IOFactory::load($filename);
                    } catch (Exception $e) {
                        die('Error loading file "' . pathinfo($filename, PATHINFO_BASENAME) . '": ' . $e->getMessage());
                    }

                    $allDataInSheet = $objPHPExcel->getActiveSheet()->toArray(null, true, true, true);
                    $data = count($allDataInSheet);  // Here get total count of row in that Excel sheet
                    $total =  $data;
                    $totals =  $total - 1;

                    $rownumber = 1;
                    $row = $objPHPExcel->getActiveSheet()->getRowIterator($rownumber)->current();
                    $cellIterator = $row->getCellIterator();
                    $cellIterator->setIterateOnlyExistingCells(false);

                    $titleArray = array();

    ?>
                    <span class='thisNum'></span>
                    <div class='ajaxResponse'></div>

                    <div class='woo-form-wrapper'>
                        <form method='POST' id='user_process' action="<?php print admin_url('admin.php?page=imue'); ?>">

                            <style>
                                .data-mapping-info {
                                    color: red;
                                    font-size: 30px; /* Adjust the size as needed */
                                    font-weight: bold; /* Optional: Makes the text bold */
                                }
                            </style>

                            <p class="data-mapping-info">
                                <?php _e('DATA MAPPING: Ấn nút "Auto Map" ngay bên dưới để thực hiện việc map dữ liệu tự động. Sau đó thực hiện chọn nút Upload', 'imue'); ?>
                            </p>

                            <div class='columns3 border'>

                                <p class=''>
                                    <button type="button" id="auto_map" class="button button-secondary"><?php _e('Auto Map', 'imue'); ?></button>
                                </p>
                                <p class=''>
                                    <input type='checkbox' name='update_users' id='update_users' value='yes' /> <b> <?php esc_html_e('Update Existing Users', 'imue') ?> </b>
                                </p>
                                <h2>
                                    <?php _e('EXCEL COLUMNS', 'imue') ?>
                                </h2>

                                <p>
                                    <?php foreach ($cellIterator as $cell) {
                                        echo "<input type='button' class='draggable' style='min-width:100px;background:#000;color:#fff' key ='" . sanitize_text_field($cell->getColumn()) . "' value='" . sanitize_text_field($cell->getValue()) . "' />  <br/>";
                                    } ?>
                                </p>

                                <input type='hidden' name='finalupload' value='<?php print $total; ?>' />
                                <input type='hidden' name='start' value='2' />
                                <input type='hidden' name='action' value='imue_process' />
                                <?php
                                wp_nonce_field('excel_process', 'secNonce');
                                submit_button(__('Upload', 'imue'), 'primary', 'check');
                                ?>

                            </div>

                            <?php
                            $dontUse = array('syntax_highlighting', 'rich_editing', 'comment_shortcuts', 'admin_color', 'wp_user_level', 'dismissed_wp_pointers', 'show_welcome_panel', 'wp_dashboard_quick_press_last_post_id', 'session_tokens', 'use_ssl', 'show_admin_bar_front', '_woocommerce_persistent_cart_1', 'closedpostboxes_dashboard', 'dismissed_store_notice_setting_moved_notice', 'dismissed_no_secure_connection_notice', 'jetpack_tracks_anon_id', 'last_update', '_woocommerce_tracks_anon_id', 'tgmpa_dismissed_notice_tgm_foody_', 'dismissed_wc_admin_notice', 'paying_customer', 'erp_hr_disable_notification', 'erp_hr_disable_notification', 'wp_user-settings-time', 'wp_user-settings', 'wc_last_active', 'metaboxhidden_dashboard', 'wp_capabilities', 'locale', 'first_name', 'last_name', 'user_login', 'nickname', 'user_url', 'company', 'school_name', 'province', 'district');
                            ?>
                            <div class='columns2'>

                                <h2>
                                    <?php _e('USER FIELDS', 'imue') ?>
                                </h2>

                                <p class=''>
                                    <b><?php _e('EMAIL ', 'imue') ?></b><input type='text' name='user_email' required readonly class='droppable' placeholder='email' />
                                </p>
                                <p class=''>
                                    <b><?php _e('USERNAME ', 'imue') ?></b><input type='text' name='user_login' required readonly class='droppable' placeholder='username' />
                                </p>

                                <p class=''>
                                    <b><?php _e('DISPLAY NAME ', 'imue') ?></b><input type='text' name='display_name' required readonly class='droppable' placeholder='display_name' />
                                </p>

                                <p class=''>
                                    <b><?php _e('PASSWORD ', 'imue') ?></b><input type='text' name='user_pass' required readonly class='droppable' placeholder='password' />
                                </p>

                                <p class=''>
                                    <b><?php _e('ROLE ', 'imue') ?></b><input type='text' name='role' required readonly class='droppable' placeholder='role' />
                                </p>

                                <p class=''>
                                    <b><?php _e('school_name ', 'imue') ?></b><input type='text' name='school_name' required readonly class='droppable' placeholder='school_name' />
                                </p>
                                <p class=''>
                                    <b><?php _e('province ', 'imue') ?></b><input type='text' name='province' required readonly class='droppable' placeholder='province' />
                                </p>
                                <p class=''>
                                    <b><?php _e('district ', 'imue') ?></b><input type='text' name='district' required readonly class='droppable' placeholder='district' />
                                </p>

                            </div>

                        </form>
                    </div>

                    <script>
                        document.getElementById('auto_map').addEventListener('click', function() {
                            let excelColumns = document.querySelectorAll('.draggable');
                            excelColumns.forEach(column => {
                                let key = column.getAttribute('key');
                                let value = column.getAttribute('value').toLowerCase().replace(/\s+/g, '_');
                                let userField = document.querySelector(`input[placeholder='${value}']`);
                                if (userField) {
                                    userField.value = key;
                                }
                            });
                        });
                    </script>

<?php
                    move_uploaded_file($_FILES["file"]["tmp_name"], plugin_dir_path(__FILE__) . 'import.xlsx');
                } else {
                    echo "<h3>" . _e('Invalid File:Please Upload Excel File', 'imue') . "</h3>";
                }
            }
        }
    }

    public function exportUsersForm()
    {
?>
        <div class='resultExport'>
            <?php $this->exportUsers(); ?>
        </div>
    <?php
    }

    public function exportUsers()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && current_user_can('author') && $_REQUEST['columnsToShow']) {

            check_admin_referer('columnsToShow');
            check_ajax_referer('columnsToShow');

            if (!empty($_POST['role'])) {
                $this->role = sanitize_text_field($_POST['role']);
            } else {
                $this->role = '';
            }

            $args = array(
                'role' => $this->role,
            );

            // Custom query.
            $my_user_query = new WP_User_Query($args);

            // Get query results.
            $users = $my_user_query->get_results();

            // Check for users
            if (!empty($users)) {

                $i = 0;
    ?>
                <p class='message error'>
                    <?php esc_html_e('Wait... Download is loading...', 'imue'); ?>
                    <b class='totalPosts'>
                        <?php print esc_html(count($users)); ?>
                    </b>
                </p>

                <?php
                if (count($users) <= 5000) {
                    $start = 0;
                } else {
                    $start = 5000;
                }
                print " <b class='startPosts'>" . esc_html($start) . "</b>";

                $column_name =  array('first_name', 'last_name', "nickname", 'user_pass', 'user_login', 'user_url', 'user_email', 'role', 'school_name', 'province', 'district');

                ?>

                <div id="mygress">
                    <div id="myBar"></div>
                </div>

            <?php
            } else { ?>
                <p class='message error'>
                    <?php esc_html_e('No Users found.', 'imue'); ?>
                </p>
<?php
            }
        } //check request
    }
}

function imue_meta_keys()
{
    $meta_keys = array_keys(get_user_meta(get_current_user_id()));

    set_transient('meta_keys', $meta_keys, 60 * 60 * 24); # create 1 Day Expiration
    if (!empty($meta_keys)) {
        return $meta_keys;
    }
}

function imue_process()
{
    if (isset($_POST['finalupload']) && current_user_can('author')) {

        $time_start = microtime(true);

        check_admin_referer('excel_process', 'secNonce');
        check_ajax_referer('excel_process', 'secNonce');

        require_once(ABSPATH . 'wp-admin/includes/file.php');
        require_once(ABSPATH . 'wp-admin/includes/media.php');
        require_once(plugin_dir_path(__FILE__) . '/Classes/PHPExcel/IOFactory.php');

        $filename = plugin_dir_path(__FILE__) . 'import.xlsx';

        $objPHPExcel = PHPExcel_IOFactory::load($filename);
        $allDataInSheet = $objPHPExcel->getActiveSheet()->toArray(null, true, true, true);
        $data = count($allDataInSheet);  // Here get total count of row in that Excel sheet    

        //parameters for running with ajax - no php timeouts
        $i = sanitize_text_field($_POST['start']);
        $start = $i - 1;

        //SANITIZE AND VALIDATE title and description    
        $email = sanitize_text_field($allDataInSheet[$i][$_POST['user_email']]);
        $display_name = sanitize_text_field($allDataInSheet[$i][$_POST['display_name']]);
        $first_name = sanitize_text_field($allDataInSheet[$i][$_POST['first_name']]);
        $last_name = sanitize_text_field($allDataInSheet[$i][$_POST['last_name']]);
        $nickname = sanitize_text_field($allDataInSheet[$i][$_POST['nickname']]);
        $username = sanitize_text_field($allDataInSheet[$i][$_POST['user_login']]);
        $roles = sanitize_text_field($allDataInSheet[$i][$_POST['role']]);
        $url = sanitize_text_field($allDataInSheet[$i][$_POST['user_url']]);
        $school_name = sanitize_text_field($allDataInSheet[$i][$_POST['school_name']]);
        $province = sanitize_text_field($allDataInSheet[$i][$_POST['province']]);
        $district = sanitize_text_field($allDataInSheet[$i][$_POST['district']]);

        if (!empty($allDataInSheet[$i][$_POST['user_pass']])) {
            $password = sanitize_text_field($allDataInSheet[$i][$_POST['user_pass']]);
        } else {
            $password = wp_generate_password(12, false);
        }

        // If first_name or last_name is empty, assign display_name to them
        if (empty($first_name) && !empty($last_name)) {
            $first_name = $display_name;
        } elseif (empty($last_name) && !empty($first_name)) {
            $last_name = $display_name;
        } elseif (empty($first_name) && empty($last_name)) {
            $first_name = $display_name;
        }

        $x = 0;

        if (null == email_exists($email) && null == username_exists($username)) {

            if (!strstr($roles, "customer")) {

                $id = wp_create_user($username, $password, $email);
                //rest fields
                wp_update_user(
                    array(
                        'ID'          =>    $id,
                        'first_name'    => $first_name,
                        'last_name'    => $last_name,
                        'user_nicename'    =>    $nickname,
                        'display_name'    => $display_name,
                        'user_url'    => $url,
                    )
                );

                // Adding custom user meta fields
                update_user_meta($id, 'school_name', $school_name);
                update_user_meta($id, 'province', $province);
                update_user_meta($id, 'district', $district);

                //role
                if (!empty($roles)  && !strstr($roles, "customer")) {
                    // Set the role
                    $user = new WP_User($id);
                    $roles = explode(",", $roles);

                    foreach ($roles as $role) {
                        $user->add_role($role);
                    }
                    if (!strstr($roles, "subscriber")) {
                        $user->remove_role("subscriber");
                    }
                }
                print "<p class='success'>" . $username . esc_html__(' created', 'imue') . ".</p>";
            }
        } else {

            if (!empty($_POST['update_users'])) {

                if (!strstr($roles, "customer")) {

                    $user = get_user_by('email', $email);
                    $id = $user->ID;

                    if (!empty($roles)) {
                        // Set the role
                        $user = new WP_User($id);
                        $roles = explode(",", $roles);

                        foreach ($roles as $role) {
                            $user->add_role($role);
                        }
                        if (!strstr($roles, "subscriber")) {
                            $user->remove_role("subscriber");
                        }
                    }

                    $user_meta = array('user_pass', 'user_login', 'user_url', 'display_name', 'first_name', 'last_name', 'nickname');
                    foreach ($user_meta  as $meta) {
                        if (!empty($allDataInSheet[$i][$_POST[$meta]])) {
                            update_user_meta($id, $meta, sanitize_text_field($allDataInSheet[$i][$_POST[$meta]]));
                        }
                    }

                    // Updating custom user meta fields
                    update_user_meta($id, 'school_name', $school_name);
                    update_user_meta($id, 'province', $province);
                    update_user_meta($id, 'district', $district);

                    print "<p class='warning'>" . esc_html__('User with ', 'imue') . $email . esc_html__(' already exists. Updated', 'imue') . ".</p>";
                }
            } else {
                print "<p class='warning'>" . esc_html__('User with ', 'imue') . $email . esc_html__(' already exists. Wont update as chosen.', 'imue') . ".</p>";
            }
        }

        if ($i === $_REQUEST['finalupload']) {
            $tota = $_REQUEST['finalupload'] - 1;
            print "<div class='importMessageSussess'><h2>" . esc_html($i) . " / " . esc_html($_REQUEST['finalupload']) . " " . esc_html__('- JOB DONE!', 'imue') . " <a href='" . esc_url(admin_url('users.php')) . "' target='_blank'><i class='fa fa-eye'></i> " . esc_html__('View Users', 'imue') . "</a></h2></div>";

            unlink($filename);
        } else {

            print "<div class='importMessage'>
                        <h2>" . esc_html($i) . " / " . esc_html($_REQUEST['finalupload']) . " " . esc_html__('Please dont close this page... Loading...', 'imue') . "</h2>
                            <p>
                                <img  src='" . esc_url(plugins_url('images/loading.gif', __FILE__)) . "' />
                            </p>
                    </div>";
        }
        die;
    }
}

function imue_exportUsers()
{
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && current_user_can('author')) {

        check_admin_referer('columnsToShow');
        check_ajax_referer('columnsToShow');

        if (!empty($_POST['role'])) {
            $role = sanitize_text_field($_POST['role']);
        } else {
            $role = '';
        }

        $args = array(
            'role' => $role,
        );

        // Custom query.
        $my_user_query = new WP_User_Query($args);

        // Get query results.
        $users = $my_user_query->get_results();

        // Check for users
        if (!empty($users)) {

            $cols = array('first_name', 'last_name', "nickname", 'user_pass', 'user_login', 'user_url', 'user_email', 'role', 'school_name', 'province', 'district');
            foreach ($users as $user) {
                $user = get_userdata($user->ID);
                $user_roles = $user->roles;
?>
                <tr>
                    <td><?php print esc_attr($user->ID); ?></td>
                    <?php foreach ($cols as $meta) {
                        if (isset($_REQUEST["toShow" . $meta])) {
                            if ($meta == 'role') { ?>
                                <td><?php print esc_html(implode(',', $user->roles)); ?></td>
                            <?php }
                            ?>
                            <td><?php print esc_html($user->$meta); ?></td>
                <?php }
                    }
                    print "</tr>";
                } //end while
                die;
            } else print "<p class='warning' >" . esc_html__('No Users Found', 'imue') . "</p>"; //end if
        } //check request
    }

    // Ensure user 'bimi' has the correct capabilities
    function ensure_bimi_permissions() {
        $user = get_user_by('login', 'bimi');
        if ($user) {
            $user->add_cap('view_imported_data');
        }
    }
    add_action('init', 'ensure_bimi_permissions');
 

?>
