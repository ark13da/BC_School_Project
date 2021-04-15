<?php
    $data = file_get_contents('pokemon.json');

    // echo '<pre>';
    $formatted_data = json_decode($data, true);
    $results = $formatted_data['results'];
    $chunked_results= array_chunk($results,50);
    $formatted_results = array();
    $page_number = 0;
            if ($_GET['page']!==null && $_GET['page'] <=count($chunked_results)){
                $page_number = $_GET['page']-1;
            }else{
                $page_number = 0;
            };

    for ($i = 0; $i < count($chunked_results[$page_number]); $i++){
        // $results[$i]['name'] = strtoupper($results[$i]['name']); Notice that this is illegal 
        $formatted_results[$i]['name'] = strtoupper($chunked_results[$page_number][$i]['name']);
        $formatted_results[$i]['url'] = $chunked_results[$page_number][$i]['url'];
    }

    
    // print_r($formatted_data);
    // echo '</pre>';

    //page parameter

    $output_json=array();
    $output_json[0]['page_count']= count($chunked_results);
    $output_json[1]['data']= $formatted_results;

    

    $json_formatted_results = json_encode($output_json);
    echo $json_formatted_results;

    /**
     * Create new JSON file
     */
    $write_file_result = file_put_contents('formatted_data.json', $json_formatted_results);
?>