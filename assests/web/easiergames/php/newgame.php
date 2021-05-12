<?php
    $host = 'localhost';
    $user = 'zapplena_demo';
    $pass = 'dEq0;UQ(ly-z';
    $db = 'zapplena_gamestore';

    $conn = mysqli_connect($host, $user, $pass, $db);

    if($conn){
        $name = $_POST['name'];
        $namenospace = str_replace(' ', '_', $name);
        mkdir('../images/'.$namenospace, 0777);
        $company = $_POST['company'];
        $price = $_POST['price'];
        $date = $_POST['date'];
        $desination = "../images/".$namenospace."/";

        $mainimgtemp = $_FILES['mainimg']['name'];
        $mainimgext = end((explode(".", $mainimgtemp)));
        $mainimgname = $namenospace . "-1." . $mainimgext;

        $secondimgtemp = $_FILES["secondimg"]["name"];
        $secondimgext = end((explode(".", $secondimgtemp)));
        $secondimgname = $namenospace . "-2." . $secondimgext;
        
        $thirdimgtemp = $_FILES["thirdimg"]["name"];
        $thirdimgext = end((explode(".", $thirdimgtemp)));
        $thirdimgname = $namenospace . "-3." . $thirdimgext;
        
        $fourthimgtemp = $_FILES["fourthimg"]["name"];
        $fourthimgext = end((explode(".", $fourthimgtemp)));
        $fourthimgname = $namenospace . "-4." . $fourthimgext;
        
        move_uploaded_file($_FILES["mainimg"]["tmp_name"], $desination.$mainimgname);
        move_uploaded_file($_FILES["secondimg"]["tmp_name"], $desination.$secondimgname);
        move_uploaded_file($_FILES["thirdimg"]["tmp_name"], $desination.$thirdimgname);
        move_uploaded_file($_FILES["fourthimg"]["tmp_name"], $desination.$fourthimgname);

        $description = $_POST['description'];
        $features = $_POST['features'];
        
        $thumbnailtemp = $_FILES["thumbnail"]["name"];
        $thumbnailimgext = end((explode(".", $thumbnailtemp)));
        $thumbnailname = $namenospace . "-thumbnail." . $thumbnailimgext;
        move_uploaded_file($_FILES["thumbnail"]["tmp_name"], $desination.$thumbnailname);


        $sql = "INSERT INTO products (name, company, price, date, mainimage, secondimage, thirdimage, fourthimage, description, features, video, thumbnail) VALUES ('$name', '$company','$price','$date','$desination$mainimgname','$desination$secondimgname','$desination$thirdimgname','$desination$fourthimgname','$description','$features','$video','$desination$thumbnailname')";
        mysqli_query($conn,$sql);
        header("Location: http://www.matthewstevens.design");
    }


?>