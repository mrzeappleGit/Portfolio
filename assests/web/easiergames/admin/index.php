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
            </div>
            <div class="loginregisterform">
                <div id="loginform">
                    <h2>Welcome <?php echo $_SESSION['uname']; ?></h2>
                    <br>
                    <p>What would you like to do?</p>
                    <div class="panel">
                        <div class="adminbutton">
                            <a href="newgame.php">New game</a>
                        </div>
                        <div class="adminbutton">
                            <a href="modify.php">Modify game</a>
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