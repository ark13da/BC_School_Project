<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contact form </title>
</head>
<body>
    <form action="contact.php" method="POST">
    <input type="text" name="username" id="username" placeholder="username">
    <br>
    <input type="password" name="password" id="password" placeholder="password">
    <br>
    <input type="email" name="email" id="email" placeholder="email">
    <br>
    <input type="text" name="subject" id="subject" placeholder="subject">
    <br>
    <textarea name="message" id="message" cols="30" rows="10" placeholder="message"></textarea>
    <br>
    <input type="submit" value="Send email">
    </form>
    <br>
  
</body>
</html>