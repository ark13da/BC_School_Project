<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>number counter</title>
</head>
<body>
    <h1>Number counter with php</h1>
    <?php
        $randNum = 0;
        $finnTranslation = '';
        
        $nums = [
            0=>'nolla',
            1=> 'yksi',
            2=> 'kaksi',
            3=> 'kolme',
            4=> 'neljä',
            5=> 'viisi',
            6=> 'kuusi',
            7=> 'seitsemän',
            8=> 'kahdeksan',
            9=> 'yhdeksan',
            10=> 'kymmenen'
        ];

        function tens ($n)  { 
            global $nums;
            if ($n - (floor($n / 10) * 10) == 0) {
                return ($nums[(floor($n / 10) * 10) / 10] . 'kymmentä');
            } else {
                return ($nums[(floor($n / 10) * 10) / 10] . 'kymmentä ' .
                    $nums[$n - (floor($n / 10) * 10)]);
            };
        }

        
        function hundreds ($n) { 
            global $nums;
             if ($n - (floor($n / 100) * 100) == 0) {
                return $nums[(floor($n / 100) * 100) / 100] . ' sataa ';
                } else if ($n - (floor($n / 100) * 100) <= 10) {
                    return $nums[(floor($n / 100) * 100) / 100] . ' sataa ' . $nums[$n - (floor($n / 100) * 100)];
                } else if ($n - (floor($n / 100) * 100) > 10 && (floor($n / 100) * 100) < 20 ) {
                    return $nums[(floor($n / 100) * 100) / 100] . ' sataa ' . $nums[($n - (floor(n / 100) * 100)) - 10] . 'toista';
                }else {
                return $nums[(floor($n / 100) * 100) / 100] . ' sataa ' .
                    tens($n - (floor($n / 100) * 100));
            };
        }

        

        function numGenerator() {
            global $nums;
            global $randNum;
            global $finnTranslation;
            $randNum = rand(0,1000);
            
            switch (true) { 
                case ($randNum <= 10):
                    $finnTranslation = $nums[$randNum];
                    break;
                case ($randNum > 10 && $randNum < 20):
                    $finnTranslation = $nums[$randNum - 10] + 'toista';
                    break;
                case ($randNum > 19 && $randNum < 100):
                    $finnTranslation = tens($randNum);
                    break;
                    case ($randNum == 100):
                        $finnTranslation = 'sata';
                        break;
                case ($randNum > 100 && $randNum < 1000):
                    $finnTranslation = hundreds($randNum);
                    break;
                case ($randNum == 1000):
                    $finnTranslation = 'tuhat';
                    break;
                
                default: 
                    $finnTranslation= "Don't know yet. Please debug me!";
            };

            

            echo '<p>'.$randNum.'</p>';
            echo '<p>'.$finnTranslation.'</p>';
            $randNum = 0;
            $finnTranslation = '';
        }
        
        numGenerator();
    ?>
</body>
</html>