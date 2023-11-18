<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the selected date and time from the POST data
    $selectedDateTime = $_POST["selectedDateTime"];

    // Connect to the database (replace these values with your database credentials)
    $servername = "localhost";
    $username = "your_username";
    $password = "your_password";
    $dbname = "schedule_db";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and execute the SQL query to insert the selected date and time into the database
    $stmt = $conn->prepare("INSERT INTO selected_dates (selected_datetime) VALUES (?)");
    $stmt->bind_param("s", $selectedDateTime);
    $stmt->execute();

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
