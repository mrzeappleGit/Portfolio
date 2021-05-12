<?php
    session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/loginregister.css">
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    </head>

    <body>
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
            </div>
            <div class="loginregisterform">
                <div id="loginform">
                    <form action="php/login.php" method="POST">
                        <h1>Login</h1><br>
                        <input type="text" placeholder="Username" name="username"><br><br>
                        <input type="password" placeholder="Password" name="password"><br><br>
                        <input type="submit" value="Login" style="cursor:pointer;" id="loginbtn"><br><br>
                        <a href="register.html">Register</a>
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