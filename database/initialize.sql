### DROP EXISTING TABLES
#Deletion order of tables matters due to foreign key dependencies.
DROP TABLE IF EXISTS `tag`;
DROP TABLE IF EXISTS `inspo`;
DROP TABLE IF EXISTS `plant`;
DROP TABLE IF EXISTS `user`;

### CREATE USER TABLE
CREATE TABLE
    `user` (
        `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
        `username` VARCHAR(100) NOT NULL,
        `password` VARCHAR(1000) NOT NULL,
        `firstname` VARCHAR(20) DEFAULT NULL,
        `lastname` VARCHAR(25) DEFAULT NULL,
        `base_zone` VARCHAR(25) DEFAULT NULL,
        `email` VARCHAR(30) DEFAULT NULL,
        PRIMARY KEY (`id`)
    );

### CREATE PLANT TABLE
CREATE TABLE
    `plant` (
        `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
        `common_name` VARCHAR(50) DEFAULT NULL,
        `botanical_name` VARCHAR(50) DEFAULT NULL,
        `zone` VARCHAR(15) DEFAULT NULL,
        `sun_exposure` VARCHAR(50) DEFAULT NULL,
        `height` VARCHAR(50) DEFAULT NULL,
        `width` VARCHAR(50) DEFAULT NULL,
        PRIMARY KEY (`id`)
    );

### CREATE INSPO TABLE
CREATE TABLE
    `inspo` (
        `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
        `user_id` INT UNSIGNED NOT NULL,
        `description` VARCHAR(1000) DEFAULT NULL,
        `image_url` VARCHAR(1000) NOT NULL,
        `submit_date` DATETIME DEFAULT NULL,
        `image_date` DATETIME DEFAULT NULL,
        `zone` VARCHAR(20) DEFAULT NULL,
        `country` VARCHAR(30) DEFAULT NULL,
        `state` VARCHAR(50) DEFAULT NULL,
        `sun_exposure` VARCHAR(50) DEFAULT NULL,
        `soil_type` VARCHAR(50) DEFAULT NULL,
        `fertilizer_schedule` VARCHAR(50) DEFAULT NULL,
        `additional_notes` TEXT DEFAULT NULL,
        `featured` BOOLEAN DEFAULT FALSE,
        PRIMARY KEY (id),
        FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
    );

### CREATE TAG TABLE
CREATE TABLE
    `tag` (
        `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
        `inspo_id` INT UNSIGNED DEFAULT NULL,
        `plant_id` INT UNSIGNED DEFAULT NULL,
        `x_coord` DECIMAL(10, 0) DEFAULT NULL,
        `y_coord` DECIMAL(10, 0) DEFAULT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (`inspo_id`) REFERENCES `inspo`(`id`),
        FOREIGN KEY (`plant_id`) REFERENCES `plant`(`id`)
    );
