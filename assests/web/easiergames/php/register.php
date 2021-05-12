<?php
    $host = 'localhost';
    $user = 'zapplena_demo';
    $pass = 'dEq0;UQ(ly-z';
    $db = 'zapplena_gamestore';

    $conn = mysqli_connect($host, $user, $pass, $db);

    if($conn){
        $username = $_POST['username'];
        $salt = "70sYRjbWVJIV3ni";
        $hash = $_POST['password'].$salt;
        $passwor = hash('sha256',$hash);

        $sql = "INSERT INTO users (firstname, lastname, email, password, username) VALUES ('$_POST[firstname]', '$_POST[lastname]','$_POST[email]','$passwor','$username')";
        mysqli_query($conn,$sql);
        header("Location: http://www.matthewstevens.design");
    }


?>