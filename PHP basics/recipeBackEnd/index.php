
    <?php
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        $data= file_get_contents("recipes.json");
        $request_method=$_SERVER["REQUEST_METHOD"];
        $uri = $_SERVER["REQUEST_URI"];
        $parts= parse_url($uri);
        parse_str($parts['query'],$params);
        $exploded_parts=explode('/', $parts['path']);
        $decoded_data= json_decode($data,true);
        
        /*
        echo $parts;
        echo '<br>';
        print_r($parts);
        echo '<br>';
        */
        switch($request_method){
            case 'GET':
                get_recipes();
                break;
            case 'POST':
                add_new_recipe();
            case 'PUT':
                update_recipe();
                break;
            case 'DELETE':
                remove_recipe();
                break;
            default:
             echo json_encode(array('message'=>'An error occured'));
             break;
        }

        function get_recipes(){
            // so far it works with id but more complicated solution can be implemented to work with any field
            if (!isset($GLOBALS['exploded_parts'][2])){
                echo $GLOBALS['data'];
            }else{
                
                for ($i=0;$i<count($GLOBALS['decoded_data']['recipes']);$i++){
                   if ($GLOBALS['decoded_data']['recipes'][$i]['id']==$GLOBALS['exploded_parts'][2]){
                      $response= json_encode($GLOBALS['decoded_data']['recipes'][$i],JSON_UNESCAPED_SLASHES);
                      echo $response;
                   }
                }
                
            }
        }

        function add_new_recipe(){
            if (isset($_GET['id']) && isset($_GET['title'])){

                $test_duplicate= array_filter($GLOBALS['decoded_data']['recipes'], function($i){
                return $i['id']==$_GET['id'] || $i['title']==$_GET['title'];
                });

                if (count($test_duplicate)>0){
                        echo json_encode(array('message'=>'Duplicate entry is not allowed'));
                }else{
                       $next_index=count($GLOBALS['decoded_data']['recipes']);
                       $GLOBALS['decoded_data']['recipes'][$next_index]['id']= $_GET['id'];
                       $GLOBALS['decoded_data']['recipes'][$next_index]['title']= $_GET['title'];
                       $GLOBALS['decoded_data']['recipes'][$next_index]['image']= $_GET['image'];
                       $response= json_encode($GLOBALS['decoded_data']['recipes'],JSON_UNESCAPED_SLASHES);
                      //i would like to avoide mutating data but at this point i want to see results of my actions
                       $new_array= array();
                       $new_array['recipes']=$GLOBALS['decoded_data']['recipes'];
                       //file_put_contents('new_data.json', json_encode($new_array));
                       file_put_contents('recipes.json', json_encode($new_array));
                       echo $response;
                   }
            }else{
                echo json_encode(array('message'=>'Incomplete request'));
            }

        }


        function update_recipe(){
            if (isset($_GET['id']) && isset($_GET['name'])){

                $test_exists= array_filter($GLOBALS['decoded_data']['recipes'], function($i){
                return $i['id']==$_GET['id'];
                });

                if (!count($test_exists)>0){
                        echo json_encode(array('message'=>'Item does not exist'));
                }else{
                       for($i=0;$i<count($GLOBALS['decoded_data']['recipes']);$i++){
                           if($GLOBALS['decoded_data']['recipes'][$i]['id']== $_GET['id']){
                               $GLOBALS['decoded_data']['recipes'][$i]['name']= $_GET['name'];
                           }
                       }
                       $response= json_encode($GLOBALS['decoded_data']['recipes']);
                      //i would like to avoide mutating data but at this point i want to see results of my actions
                       $new_array= array();
                       $new_array['recipes']=$GLOBALS['decoded_data']['recipes'];
                       //file_put_contents('new_data.json', json_encode($new_array));
                       file_put_contents('data.json', json_encode($new_array));
                       echo $response;
                   }
            }else{
                echo json_encode(array('message'=>'Incomplete request'));
            }
        }

        function remove_recipe(){
              if (isset($_GET['id'])){

                $test_exists= array_filter($GLOBALS['decoded_data']['recipes'], function($i){
                return $i['id']==$_GET['id'];
                });
                $modified_array= array();
                if (!count($test_exists)>0){
                        echo json_encode(array('message'=>'Item does not exist'));
                }else{
                       $modified_array= array_filter($GLOBALS['decoded_data']['recipes'], function($i){
                        return $i['id']!==$_GET['id'];
                        });
                    }
                       $response= json_encode($modified_array);
                      //i would like to avoide mutating data but at this point i want to see results of my actions
                       $new_array= array();
                       $new_array['recipes']=$modified_array;
                       //file_put_contents('new_data.json', json_encode($new_array));
                       file_put_contents('data.json', json_encode($new_array));
                       echo $response;
                   }
            else{
                echo json_encode(array('message'=>'Incomplete request'));
            }
        }

    ?>