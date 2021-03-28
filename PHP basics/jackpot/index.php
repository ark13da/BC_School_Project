<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jackpot with php</title>
</head>

<body>

    <h1>Jackpot with php class based approach</h1>

    <?php
        
        class Jackpot{
            public $fiveArray = [];
            public $fiveString = '';

            function fiver () {
                for ($i = 0; $i < 5; $i=$i+1) {
                    array_push($this->fiveArray, rand(0,1));
                }
                $flatArray= implode(",", $this->fiveArray);
                $winningChance= 1 / 2 ** 5;
                if (in_array(0, $this->fiveArray) && in_array(1, $this->fiveArray)) {
                    $this->fiveString = "The sequence was: $flatArray and you lost. Please try again! The chance of winning was $winningChance ";
                } else if (in_array(0, $this->fiveArray) && !in_array(1, $this->fiveArray)) {
                    $this->fiveString = "The sequence was: $flatArray and you lost. But good job on getting all zeros; it is rare! Please try again! The chance of winning was $winningChance ";
                } else if (!in_array(0, $this->fiveArray) && in_array(1, $this->fiveArray)) {
                    $this->fiveString = "The sequence was: $flatArray and you Won! The chance of winning was $winningChance ";
                } else {
                    $this->fiveString = "The sequence was: $flatArray and this is a terrible code. please debug!";
                }

                echo $this->fiveString;
                $this->fiveArray = [];
                $this->fiveString = '';
            }

        };

        $jackpotClassTest= new Jackpot();
        echo $jackpotClassTest->fiver();
    ?>

</body>

</html>