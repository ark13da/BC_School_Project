<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pokemon form</title>
</head>
<body>
    <a href="index.php">Back to home page</a>
     <form action="formatted_pokemon.php" method="POST">
         <input type="text" name="id" placeholder="ID">
         <br>
         <input type="text" name="name" placeholder="Name">
         <br>
         <select name="type">
             <option value="normal">Normal</option>
             <option value="fire">Fire</option>
             <option value="water">Water</option>
         </select>
         <br>
         <input type="submit" value="Add Pokemon">
     </form>
   
</body>
</html>