<?php

  define(‘HOST’,’localhost’);//host

  define(‘USER’,’your_user_name’);//user

  define(‘PASS’,’your_password);//pass

  define(‘DB’,database_name’);//base de datos

  $con = mysqli_connect(HOST,USER,PASS,DB);

   if (!$con){

        die(mysqli_connect_error());

  }

?>