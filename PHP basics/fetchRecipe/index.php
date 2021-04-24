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
    /*$url="https://api.spoonacular.com/recipes/random?apiKey=34809555e7644df28d1cfd2622dedf2d";
    $recipeList=[];

    for($i=0;$i<100;$i++){
        $data = file_get_contents($url);
        $results = json_decode($data,true);
        array_push($recipeList, $results['recipes']);
    }
    $list_json= json_encode($recipeList,JSON_UNESCAPED_SLASHES);
    file_put_contents('recipe_list.json', $list_json);
    */
    $original = file_get_contents('recipe_list.json');
    $result=json_decode($original, true);
    $id_list=[];
    $new_list=[];
    //echo $result[0][0]['id'];
    //echo '<pre>';
    //print_r($result[0]);
    // echo '</pre>';
    echo count($result);
    //foreach($result as $item){
      for ($i=0;$i<count($result);$i++){  
        if(!in_array($result[$i][0]['id'], $id_list, $strict=false)){
            array_push($id_list, $result[$i][0]['id']);
            array_push($new_list, $result[$i]);
        }
    }
    //unset($item);
    echo '<br>';
   echo count($new_list);
   $list_json= json_encode($new_list,JSON_UNESCAPED_SLASHES);
    file_put_contents('recipes_list.json', $list_json);

    ?>
    
</body>
</html>