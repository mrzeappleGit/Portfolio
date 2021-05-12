<?php
    $host = 'localhost';
    $user = 'zapplena_demo';
    $pass = 'dEq0;UQ(ly-z';
    $db = 'zapplena_gamestore';

    $conn = mysqli_connect($host, $user, $pass, $db);

    if($conn){
        $game = $_POST['game'];
        $name = $_POST['name'];
        $namenospace = str_replace(' ', '_', $name);
        $company = $_POST['company'];
        $price = $_POST['price'];
        $date = $_POST['date'];
        $desination = "../images/".$namenospace."/";

        $description = $_POST['description'];
        $features = $_POST['features'];
        
        $checkdb = "SELECT * from products where id = $game";
        $result = mysqli_query($conn, $checkdb);
        $rows = mysqli_num_rows($result);
        while($rows){
            if($rows['name'] != $name && !empty($name)){
                $sql = "UPDATE `products` SET `name` = '$name' WHERE `id` = $game";
                mysqli_query($conn, $sql);
            }else
            if($rows['company'] != $company && !empty($company)){
                $sql = "UPDATE products SET company= '$company' WHERE id = '$game'";
                mysqli_query($conn,$sql);
            }else
            if($rows['company'] != $price && $price != "0.00"){
                $sql = "UPDATE products SET price= '$price' WHERE id = '$game'";
                mysqli_query($conn,$sql);
            }else
            if($rows['date']  != $date && $date != "2000-01-01"){
                $sql = "UPDATE products SET date= '".$date."' WHERE id = '$game'";
                mysqli_query($conn,$sql);
            }else
            if($rows['description'] != $description && !empty($description)){
                $sql = "UPDATE products SET description = '$description' WHERE id = '$game'";
                mysqli_query($conn,$sql);
            }else
            if($rows['features'] != $features && !empty($features)){
                $sql = "UPDATE products SET features = '$features' WHERE id = '$game'";
                mysqli_query($conn,$sql);
            }
        }
        header("Location: http://www.matthewstevens.design");
    }


?>