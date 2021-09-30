<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database_name = "sgpa-cgpa_calculator";

    $conn = mysqli_connect($servername, $username, $password, $database_name);

    if(!$conn)
    {
        die("Connection Failed :" . mysqli_connect_error());

    }
    if(isset($_POST['go']))
    {
        $gp1 = $_POST['gp1'];
        $gp2 = $_POST['gp2'];
        $gp3 = $_POST['gp3'];
        $gp4 = $_POST['gp4'];
        $gp5 = $_POST['gp5'];
        $gp6 = $_POST['gp6'];
        $gp7 = $_POST['gp7'];
        $gp8 = $_POST['gp8'];
        $gp9 = $_POST['gp9'];
        $gp10 = $_POST['gp10'];

        $cp1 = $_POST['cp1'];
        $cp2 = $_POST['cp2'];
        $cp3 = $_POST['cp3'];
        $cp4 = $_POST['cp4'];
        $cp5 = $_POST['cp5'];
        $cp6 = $_POST['cp6'];
        $cp7 = $_POST['cp7'];
        $cp8 = $_POST['cp8'];
        $cp9 = $_POST['cp9'];
        $cp10 = $_POST['cp10'];


        $sql_query = "INSERT INTO sgpa (gp1, cp1, gp2, cp2, gp3, cp3, gp4, cp4, gp5, cp5, gp6, cp6, gp7, cp7, gp8, cp8, gp9, cp9, gp10, cp10)
        VALUES ('$gp1','$cp1','$gp2','$cp2','$gp3','$cp3','$gp4','$cp4','$gp5','$cp5','$gp6','$cp6','$gp7','$cp7','$gp8','$cp8','$gp9','$cp9','$gp10','$cp10')";

        if(mysqli_query($conn, $sql_query))
        {
            echo "New Details Entered Successfully !";
        }
        else
        {
            echo "Error :" . $sql . "" . mysqli_error($conn);
        }
        mysqli_close($conn);
    }


?>