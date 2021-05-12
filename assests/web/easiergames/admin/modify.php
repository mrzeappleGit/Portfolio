<?php 
session_start();

$host = 'localhost';
$user = 'zapplena_demo';
$pass = 'dEq0;UQ(ly-z';
$db = 'zapplena_gamestore';

$conn = mysqli_connect($host, $user, $pass, $db);

if($conn){
   $username = $_SESSION['username'];

   $sql = "SELECT * FROM users WHERE username ='$username' limit 1";
   $result = mysqli_query($conn, $sql);
   $rows = mysqli_num_rows($result);
    while($rows){
        if($rows['admin'] == 1){
            echo ("Welcome");
        }else{
            header("Location: http://www.matthewstevens.design");
        }
}
}
?>

<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/loginregister.css">
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
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
                <div id="searchbar">
                    <form>
                        <input name="search" type="search" placeholder="Search" height="100px;">
                        <button name="go"><ion-icon name="search"></ion-icon></button>
                    </form>
                </div>
            </div>
            <div class="loginregisterform">
                <div id="loginform">
                    <form action="../php/modify.php" method="POST" enctype="multipart/form-data">
                        <select name="game">
                            <option value="null">Select a game</option>
                            <?php
                                $query = "SELECT * from products";
                                $result = mysqli_query($conn, $query);

                                while($row = $result->fetch_assoc()){
                                    echo "<option value='".$row['id']."'>".$row['name']."</option>";
                                }
                                
                            ?>
                        </select>
                        <div>
                        <input type="text" placeholder="Game Name" name="name"><br><br>
                        <input type="text" placeholder="Company Name" name="company"><br><br>
                        <input type="text" placeholder="Price" name="price" value="0.00"><br><br>
                        <input type="date" min="2000-01-01" name="date" value="2000-01-01"><br><br>
                        <input type="textarea" placeholder="Description" name="description"><br><br>
                        <input type="textarea" placeholder="Features" name="features"><br><br>
                        <input type="submit" value="Create" style="cursor:pointer;" id="loginbtn"><br><br>
                        </div>
                    </form>
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