<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pokemon API with php</title>
</head>
<body>
    <?php

        $json_pokemon= json_decode(file_get_contents("pokemon.json"));
        

        class Get_pokemons {
            public $my_url='';

            function lets_print (){
                $poke_count= $GLOBALS['json_pokemon']->count;
                $max_page= floor($poke_count/50);
                
                $page_number = 3;
                if ($_GET['page']!==null && $_GET['page'] <=$max_page){
                    $page_number = $_GET['page'];
                }else{
                    $page_number = 3;
                };
                
                $fifty_pack= $page_number * 50;
                if (($page_number * 50)< $poke_count){
                    $fifty_pack = $page_number * 50;
                }else{
                    $fifty_pack = 150;
                };
                
                echo '<h1>Pokemon list</h1>';
                echo "<h3>In total we have $poke_count pokemons and each page contains 50 pokemons<h3>";
                echo "<h4>Type /?page=page number after url to change the page (max $max_page pages)</h4>";
                echo "<h4>Current page: $page_number</h4>";


                for ($i=$fifty_pack; $i<$fifty_pack+50 && $i<$poke_count ;$i=$i+1){
                    echo "<p>";
                    echo $i .'- '. $GLOBALS['json_pokemon']->results[$i]->name;
                    echo "</p>";
                    echo "<a>";
                    echo $GLOBALS['json_pokemon']->results[$i]->url;
                    echo "</a>";
                    echo "<br>";
                };
            }
            
        };

        $my_test= new Get_pokemons();
        echo $my_test->lets_print();
    
    ?>
</body>
</html>