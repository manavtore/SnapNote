<?php

    require_once ('./connection.php');

    include 'DbConnect.php';
    $objDb = new DbConnect();
    $conn = $objDb->connect();
    var_dump($conn);

    print_r(file_get_contents('php://input'));
    $method = $_SERVER['REQUEST_METHOD'];

    switch($method){
        case "GET":
            $sql = "SELECT * FROM notes";
            $stmt = $conn->query($sql);
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(isset($_GET['id'])){
                $sql = "SELECT * FROM notes WHERE id = :id";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $_GET['id']);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }

            echo json_encode($users);
            break;
        case "POST":
            $user = file_get_contents('php://input');
            $sql = "INSERT INTO notes(id, title, note ) VALUES (NULL, :title, :note)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':title', $user['title']);
            $stmt->bindParam(':note', $user['note']);

            if ($stmt->execute()) {
              $response = ['status' => 1, 'message' => 'Record created successfully.'];
            } else {
              $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($response);
            break;

        case "PUT":
            $user = json_decode(file_get_contents('php://input'));
            $sql = "UPDATE notes SET title = :title, note = :note WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':title', $user['title']);
            $stmt->bindParam(':note', $user['note']);
            $stmt->bindParam(':id', $user['id']);

            if ($stmt->execute()) {
              $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
              $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

        case "DELETE":
            $sql = "DELETE FROM notes WHERE id = :id";
            $path = explode('/', $_SERVER['REQUEST_URI']);

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[2]);

            if ($stmt->execute()) {
                 $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                 $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }

            echo json_encode($response);
            break;

    }
?>