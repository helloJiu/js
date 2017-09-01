<?php
header("Content-type:application/json");
$_POST['aaa'] = 'hahah';
echo json_encode($_POST);