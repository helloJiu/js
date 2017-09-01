<?php
$data = ['name' => 'hufengjiu', 'age' => $_GET['age']];
header('content-type', 'application/json');
echo json_encode($data);