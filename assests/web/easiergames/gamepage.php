<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/gamepage.css">
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
        
        <script type="text/javascript">
            <?php
                    $p = $_GET['page'];

                    $host = 'localhost';
                    $user = 'zapplena_demo';
                    $pass = 'dEq0;UQ(ly-z';
                    $db = 'zapplena_gamestore';

                    $conn = mysqli_connect($host, $user, $pass, $db);

                    if($conn){
                        $sql = "SELECT * FROM products WHERE id='$p' limit 1";
                        $result = mysqli_query($conn, $sql);
                        if (!$result){
                            printf("Error: %s\n", mysqli_error($conn));
                            exit();
                        }
                    while($rows = mysqli_fetch_array($result)){
                        $img1 = $rows['mainimage'];
                        $img2 = $rows['secondimage'];
                        $img3 = $rows['thirdimage'];
                        $img4 = $rows['fourthimage'];
                        $name = $rows['name'];
                        $company = $rows['company'];
                        $date = $rows['date'];
                        $price = $rows['price'];
                        $description = $rows['description'];
                        $features = $rows['features'];
                        $video = $rows['video'];
                        $edition = $rows['editions'];
                        $thumbnail = $rows['thumbnail'];

                        echo("var mainimg = \"url('".$img1."')\";\n");
                        echo("var img1 = \"url('".$img1."')\";\n");
                        echo("var img2 = \"url('".$img2."')\";\n");
                        echo("var img3 = \"url('".$img3."')\";\n");
                        echo("var img4 = \"url('".$img4."')\";\n");

                ?>   

    function load(){
    document.getElementById('gp-mainimg').style.background = mainimg;
    document.getElementById('gp-mainimg').style.backgroundSize = "contain";
    document.getElementById('gp-mainimg').style.backgroundPosition = "center";
    document.getElementById('gp-mainimg').style.backgroundRepeat = "no-repeat";

    document.getElementById('gp-img1').style.background = img1;
    document.getElementById('gp-img1').style.backgroundSize = "cover";
    document.getElementById('gp-img1').style.backgroundPosition = "center";
    document.getElementById('gp-img1').style.backgroundRepeat = "no-repeat";

    document.getElementById('gp-img2').style.background = img2;
    document.getElementById('gp-img2').style.backgroundSize = "cover";
    document.getElementById('gp-img2').style.backgroundPosition = "center";
    document.getElementById('gp-img2').style.backgroundRepeat = "no-repeat";

    document.getElementById('gp-img3').style.background = img3;
    document.getElementById('gp-img3').style.backgroundSize = "cover";
    document.getElementById('gp-img3').style.backgroundPosition = "center";
    document.getElementById('gp-img3').style.backgroundRepeat = "no-repeat";
    
    document.getElementById('gp-img4').style.background = img4;
    document.getElementById('gp-img4').style.backgroundSize = "cover";
    document.getElementById('gp-img4').style.backgroundPosition = "center";
    document.getElementById('gp-img4').style.backgroundRepeat = "no-repeat";
    }
        </script>
        <script src="js/gamepageimg.js"></script>
    </head>

    <body onload="load()">
        <div class="container">
            <div id="header">
                <div id="logo">
                    <h1>Easier Games</h1>
                </div>
                <div id="navbar">
                    <nav>
                        <ul>
                        <li><a href="https://www.matthewstevens.design/index.php">Home</a></li>
                            <li><a href="console.php?page=1">Playstation 4</a></li>
                            <li><a href="console.php?page=2">Xbox one</a></li>
                            <li><a href="console.php?page=3">Switch</a></li>
                            <li><a href="console.php?page=4">PC</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="gp-maincontent">
                <div class="gp-img">
                    <div id="gp-mainimg">
                        
                    </div>
                    <div class="gp-underimg">
                        <div id="gp-img1" onmouseover="change1hover();" onmouseout="changeout();" onclick="change1();"></div>
                        <div id="gp-img2" onmouseover="change2hover();" onmouseout="changeout();" onclick="change2();"></div>
                        <div id="gp-img3" onmouseover="change3hover();" onmouseout="changeout();" onclick="change3();"></div>
                        <div id="gp-img4" onmouseover="change4hover();" onmouseout="changeout();" onclick="change4();"></div>
                    </div>
                </div>
                <div class="gp-title">
                    <h2><?php echo($name); ?></h2>
                    <h3><?php echo($company); ?> | Release Date: <?php echo($date); ?></h3>
                    <div class="gp-select">
                        <select class="gp-platform">
                            <option>Playstions 4</option>
                            <option>PC</option>
                            <option>Xbox One</option>
                        </select>
                        <select class="gp-edition">
                                <option>Standard</option>
                                <option>Collectors</option>
                            </select>
                    </div>
                    <div class="gp-price">
                        <h3><?php echo($price) ?></h3>
                    </div>
                    <div class="gp-buy">
                        <button>Pre-Order</button>
                    </div>
                </div>
            </div>
            <div class="gp-details">
                <h3>Details</h3>
                <div class="gp-detailscontainer">
                    <div class="gp-description">
                        <p><?php echo($description) ?></p>
                    </div>
                    <div class="gp-features">
                        <p><?php echo($features) ?></p>
                        <p><strong>The Game Comes With:</strong></p>
                        <ul>
                            <li>Case with game discs</li>
                            <li>World Compendium detailing the game’s setting and lore</li>
                            <li>Postcards from Night City</li>
                            <li>Map of Night City</li>
                            <li>Stickers</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="gp-videocontainer">
                <div class="gp-video">
                    <h3>Videos</h3>
                        <video src="<?php echo($video) ?>" controls poster="<?php echo($thumbnail) ?>"></video>
                </div>
            </div>            
            <div id="gp-footer">
                <footer>
                    <div id="gp-footerbar">
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Playstation 4</a></li>
                                <li><a href="#">Xbox one</a></li>
                                <li><a href="#">Switch</a></li>
                                <li><a href="#">Nintendo 3DS</a></li>
                                <li><a href="#">PC</a></li>
                            </ul>
                        </nav>
                    </div>
                </footer>
                    <?php }} ?>
            </div>
        </div>
    </body>
</html>