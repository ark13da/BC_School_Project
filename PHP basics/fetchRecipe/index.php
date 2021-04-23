<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $url="https://api.spoonacular.com/recipes/random?apiKey=34809555e7644df28d1cfd2622dedf2d";
    $recipeList=[];

    for($i=0;$i<100;$i++){
        $data = file_get_contents($url);
        $results = json_decode($data,true);
        array_push($recipeList, $results['recipes']);
    }
    $list_json= json_encode($recipeList,JSON_UNESCAPED_SLASHES);
    file_put_contents('recipe_list.json', $list_json);

    ?>
    
</body>
</html>