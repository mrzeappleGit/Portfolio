<?php
    session_start();
    $host = 'localhost';
    $user = 'zapplena_demo';
    $pass = 'dEq0;UQ(ly-z';
    $db = 'zapplena_gamestore';

    $conn = mysqli_connect($host, $user, $pass, $db);

    if($conn){
        $username = $_POST['username'];
        $salt = "70sYRjbWVJIV3ni";
        $hash = $_POST['password'].$salt;
        $password = hash('sha256',$hash);

        $sql = "SELECT * FROM users WHERE username='$username' AND password='$password' limit 1";
        $result = mysqli_query($conn, $sql);
        $rows = mysqli_num_rows($result);
        if($rows==1){
            while($rows){
                $_SESSION['uname'] = $username;
                $_SESSION['admin'] = $rows['admin'];
                header("Location: http://www.matthewstevens.design");
                exit();
            }
        }
    }


?>