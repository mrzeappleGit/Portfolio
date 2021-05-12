<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/console.css">
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
        <script>
        <?php 
            $p = $_GET['page'];

            $host = 'localhost';
            $user = 'zapplena_demo';
            $pass = 'dEq0;UQ(ly-z';
            $db = 'zapplena_gamestore';

            $conn = mysqli_connect($host, $user, $pass, $db);

            if($conn){
                $sql = "SELECT * FROM console WHERE id='$p' limit 1";
                $result = mysqli_query($conn, $sql);
                if (!$result){
                    printf("Error: %s\n", mysqli_error($conn));
                    exit();
                }
            while($rows = mysqli_fetch_array($result)){
                $img1 = $rows['img'];
                ?>  
        </script>
    </head>

    <body>
        <div class="container">
            <div id="header">
                <div id="logo">
                    <h1>Store Name</h1>
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
            <div id="banner">
                <img src="<?php echo($img1); ?>" >
            <?php }} ?>
            </div>
            <div id="products">
                <div class="productscontainer">
                    <div class="products" style="background:url(images/boxart/cyberpunk-2077.jpg); background-size: cover; background-position: center;">
                        <div class="product_text">
                        <h2>Cyberpunk 2077</h2>
                        <h3>Release Date: <br> 04/16/2020</h3>
                        </div>
                    </div>
                    <div class="productsdescript">
                        <h2>Cyberpunk 2077</h2>
                        <h3>$59.99 + Tax <br><br> <a class="buyme" href="gamepage.php?page=1">Buy Now!</a></h3>
                    </div>
                </div>
                <div class="productscontainer">
                    <div class="products" style="background:url(images/boxart/borderlands3.jpg); background-size: cover; background-position: center;">
                        <div class="product_text">
                            <h2>Borderlands 3</h2>
                            <h3>Release Date: <br> 09/12/2019</h3>
                            </div>
                    </div>
                    <div class="productsdescript">
                            <h2>Boderlands 3</h2>
                            <h3>$59.99 + Tax <br><br> <a class="buyme" href="gamepage.php?page=2">Buy Now!</a></h3>
                        </div>
                </div>
                <div class="productscontainer">
                    <div class="products" style="background:url(images/boxart/callofdutymw.jpg); background-size: cover; background-position: center;">
                        <div class="product_text">
                            <h2>Call of Duty Modern Warfare</h2>
                            <h3>Release Date: <br> 10/25/2019</h3>
                            </div>
                    </div>
                    <div class="productsdescript">
                            <h2>Call of Duty Modern Warfare</h2>
                            <h3>$59.99 + Tax <br><br> <a class="buyme" href="gamepage.php?page=4">Buy Now!</a></h3>
                        </div>
                </div>
                <div class="productscontainer">
                    <div class="products" style="background:url(images/boxart/watch_dogs_legion.jpg); background-size: cover; background-position: center;">
                        <div class="product_text">
                            <h2>Watch Dogs: Legion</h2>
                            <h3>Release Date: <br> 03/06/2020</h3>
                            </div>
                    </div>
                    <div class="productsdescript">
                            <h2>Watch Dogs: Legion</h2>
                            <h3>$59.99 + Tax <br><br> <a class="buyme" href="gamepage.php?page=5">Buy Now!</a></h3>
                        </div>
                </div>
                <div class="productscontainer">
                    <div class="products" style="background:url(images/boxart/lastofus2.jpg); background-size: cover; background-position: center;">
                        <div class="product_text">
                            <h2>The Last of Us <span>&#8545;</span></h2>
                            <h3>Release Date: <br> TBD</h3>
                            </div>
                    </div>
                    <div class="productsdescript">
                            <h2>The Last of Us <span>&#8545;</span></h2>
                            <h3>$59.99 + Tax <br><br> <a class="buyme" href="gamepage.php?page=6">Buy Now!</a></h3>
                        </div>
                </div>
                <div class="productscontainer">
                    <div class="products" style="background:url(images/boxart/outer_worlds.jpg); background-size: cover; background-position: center;">
                        <div class="product_text">
                            <h2>The Outer Worlds</h2>
                            <h3>Release Date: <br> 10/25/2019</h3>
                            </div>
                    </div>
                    <div class="productsdescript">
                            <h2>The Outer Worlds</h2>
                            <h3>$59.99 + Tax <br><br> <a class="buyme" href="gamepage.php?page=7">Buy Now!</a></h3>
                        </div>
                </div>
                <div class="productscontainer">
                    <div class="products" style="background:url(images/boxart/star-wars-jedi-fallen-order.jpg); background-size: cover; background-position: center;">
                        <div class="product_text">
                            <h2>Star Wars Jedi: Fallen Order</h2>
                            <h3>Release Date: <br> 11/15/2019</h3>
                            </div>
                    </div>
                    <div class="productsdescript">
                            <h2>Star Wars Jedi: Fallen Order</h2>
                            <h3>$59.99 + Tax <br><br> <a class="buyme" href="gamepage.php?page=8">Buy Now!</a></h3>
                        </div>
                </div>
                <div class="productscontainer">
                    <div class="products" style="background:url(images/boxart/marvels-avengers.jpg); background-size: cover; background-position: center;">
                        <div class="product_text">
                            <h2>Marvel's Avengers</h2>
                            <h3>Release Date: <br> 05/15/2020</h3>
                            </div>
                    </div>
                    <div class="productsdescript">
                            <h2>Marvel's Avengers</h2>
                            <h3>$59.99 + Tax <br><br> <a class="buyme" href="gamepage.php?page=9">Buy Now!</a></h3>
                        </div>
                </div>
                </div>
            </div>
            <div id="footer">
                <footer>
                    <div id="footerbar">
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
            </div>
        </div>
    </body>
</html>