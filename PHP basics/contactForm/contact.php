<?php
    echo 'message delivered';
    echo '<pre>';
    print_r($_POST);
    echo '</pre>';


    $send_email= mail($_POST['email'], $_POST['subject'], $_POST['message'] );

    if($send_email){
            echo 'delivered';
        }else{
            echo 'failed';
        }

?> 