<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myclublife";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $username = $data['username'];
    $password = $data['password'];
    $fullName = $data['fullName'];
    $studyField = $data['studyField'];
    $email = $data['email'];

    // Check if the email already exists in the database
    $email_query = "SELECT * FROM student WHERE student_email = '$email'";
    $email_result = mysqli_query($conn, $email_query);

    $username_query = "SELECT * FROM student WHERE student_username = '$username'";
    $username_result = mysqli_query($conn, $username_query);


    if (mysqli_num_rows($email_result) > 0 || mysqli_num_rows($username_result) > 0) {
        if (mysqli_num_rows($email_result) > 0){
            $response['data'] = "Email already exists";
            $response['status_code'] = 400;
            $json_response = json_encode($response);
            echo $json_response;
        }
        if (mysqli_num_rows($username_result) > 0){
            $response['data'] = "Username already exists";
            $response['status_code'] = 400;
            $json_response = json_encode($response);
            echo $json_response;
        }
    } 
    else {
        // If the email does not exist, create a new student record in the database
        $sql = "INSERT INTO student (student_username, student_password, student_name, student_grade, student_email)
                VALUES ('$username', '$password', '$fullName', '$studyField', '$email')";

        if (mysqli_query($conn, $sql)) {
            $response['data'] = "Account created successfully";
            $response['status_code'] = 200;
            $json_response = json_encode($response);
            echo $json_response;
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }

    mysqli_close($conn);
}
