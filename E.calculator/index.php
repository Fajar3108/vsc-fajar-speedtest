<html>
    <head>
        <title>Calculator</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div style="margin-top: 50px">
            <form method="post" action="">
                <input name="number1" type="text" style="width: 150px; display: inline" />
                <select name="operation">
                <option value="plus">+</option>
                    <option value="minus">-</option>
                    <option value="multiply">x</option>
                    <option value="divided by">/</option>
                </select>
                <input name="number2" type="text" style="width: 150px; display: inline" />
                <input name="submit" type="submit" value="Calculate"/>
            </form>
            <?php
            if(isset($_POST['submit'])){
                if(is_numeric($_POST['number1']) && is_numeric($_POST['number2'])){
                    if($_POST['operation'] == 'plus'){
                        $total = $_POST['number1'] + $_POST['number2']; 
                    }
                    if($_POST['operation'] == 'minus'){
                        $total = $_POST['number1'] - $_POST['number2']; 
                    }
                    if($_POST['operation'] == 'multiply'){
                        $total = $_POST['number1'] * $_POST['number2']; 
                    }
                    if($_POST['operation'] == 'divided by'){
                        $total = $_POST['number1'] / $_POST['number2']; 
                    }
                    echo "<h1>result : {$total}</h1>";
                } else {
                    echo 'Value harus berupa angka';
                }
            }
            ?>
        </div>
    </body>
</html>