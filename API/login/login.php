<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myclublife";

session_start();    


function checkAccount($username, $password)
{
    $servername = "localhost";
    $db_username = "root";
    $db_password = "";
    $dbname = "myclublife";

    $conn = mysqli_connect($servername, $db_username, $db_password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT studentID, student_username, student_password FROM student WHERE student_username = '$username' AND student_password = '$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        mysqli_close($conn);
        return $row;
    } else {
        mysqli_close($conn);
        return array();
    }
}




if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header("Content-Type: application/json");


    // Takes raw data from the request
    $json = file_get_contents('php://input');

    // Converts it into a PHP object
    $data = json_decode($json, true);
    if (isset($data['studenusername']) and isset($data['password'])) {
        $username = $data['username'];
        $pw = $data['password'];
        $row = checkAccount($username, $pw);
        if ($row) {
            $_SESSION['loggedin'] = True;
            $_SESSION['username'] = $row["student_username"];
            //setSessionProfileInfo($email);
            //header("Location: /home");
            $response['data'] = "Successfully logged in";
            $response['status_code'] = 200;
            $json_response = json_encode($response);
            echo $json_response;
        } else {
            $response['status_code'] = 401;
            $response['error_message'] = "Wrong email or password.";
            $json_response = json_encode($response);
            http_response_code(401);
            echo $json_response;
        }
    }
}
