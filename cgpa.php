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
    if(isset($_POST['save']))
    {
        $sem1 = $_POST['sem1'];
        $sem2 = $_POST['sem2'];
        $sem3 = $_POST['sem3'];
        $sem4 = $_POST['sem4'];
        $sem5 = $_POST['sem5'];
        $sem6 = $_POST['sem6'];
        $sem7 = $_POST['sem7'];
        $sem8 = $_POST['sem8'];
        

        $sql_query = "INSERT INTO cgpa (sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8)
        VALUES ('$sem1','$sem2','$sem3','$sem4','$sem5','$sem6','$sem7','$sem8')";

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