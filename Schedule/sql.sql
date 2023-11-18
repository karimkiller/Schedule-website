CREATE DATABASE IF NOT EXISTS schedule_db;
USE schedule_db;

CREATE TABLE IF NOT EXISTS selected_dates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    selected_datetime DATETIME
);
