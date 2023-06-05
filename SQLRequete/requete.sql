-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           8.0.30 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour sql9616314
CREATE DATABASE IF NOT EXISTS `sql9616314` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sql9616314`;

-- Listage de la structure de table sql9616314. test
CREATE TABLE IF NOT EXISTS `test` (
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table sql9616314.test : ~0 rows (environ)

-- Listage de la structure de table sql9616314. users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `telephone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cni` varchar(15) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `cni` (`cni`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table sql9616314.users : ~7 rows (environ)
REPLACE INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `telephone`, `cni`, `createdAt`, `updatedAt`) VALUES
	(1, 'John', 'Doe', 'johndoe@example.com', 'sffffffffffs', '1234567890', NULL, '2023-05-11 17:45:00', '2023-05-11 17:45:00'),
	(8, 'John', 'Doe', 'johndorrre@example.com', 'sffffffffffs', '1234567890', NULL, '2023-05-11 19:03:49', '2023-05-11 19:03:49'),
	(33, '12222', '2222', 'johndoe@sccc.com', 'sssssssssss', '1234567890', '1222222222', '2023-05-12 00:06:37', '2023-05-12 00:06:37'),
	(45, '12222', '2222', 'johndoe@exemple.com', 'sssssssssss', '1234567890', '4444444444', '2023-05-12 00:58:47', '2023-05-12 00:58:47'),
	(55, '12222', '2222', 'johndoe@exempe.com', 'sssssssssss', '1234567890', '12222229992', '2023-05-12 03:12:50', '2023-05-12 03:12:50'),
	(65, '12222', '2222', 'johndoe@exemhpe.com', '$2b$10$dRTr8NQTofK9zudeYn8cqO8vR/.Fw3A/xviKkfho0mxH2UBbaD0.m', '1234567890', '122222829992', '2023-05-12 03:25:48', '2023-05-12 03:25:48'),
	(70, '12222', '2222', 'johndoe@exee.com', '$2b$10$wnKrX8VkK5VMrnTHovdHoe0T3iFX17Sf4U9RER.5Ibj2Ex2Rf78uO', '1234567890', '1222228299092', '2023-05-12 03:53:50', '2023-05-12 03:53:50');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;


ALTER TABLE appointments
MODIFY deletedAt TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP


SELECT   DATE(DateApp)  FROM appointments  GROUP BY DateApp HAVING COUNT(*) >= 15
SELECT DATE(DateApp), HourApp   FROM appointments WHERE DateApp = "2023-05-25"   GROUP BY HourApp HAVING COUNT(*) > 0 


SELECT COUNT(*) FROM appointments  where DateApp="2022-02-10"
SELECT COUNT(*) FROM appointments  where DateApp=NOW()sql9616314usersusersusersusersusers

ALTER TABLE messages
ALTER COLUMN isSee SET DEFAULT false;
