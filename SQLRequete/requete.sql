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

-- Listage de la structure de table sql9616314. appointments
CREATE TABLE IF NOT EXISTS `appointments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `DateApp` date NOT NULL,
  `idPat` int NOT NULL,
  `idDoc` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `HourApp` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_appointment_users` (`idDoc`),
  KEY `FK_appointment_users_2` (`idPat`),
  CONSTRAINT `FK_appointment_users` FOREIGN KEY (`idDoc`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_appointment_users_2` FOREIGN KEY (`idPat`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table sql9616314.appointments : ~2 rows (environ)
REPLACE INTO `appointments` (`id`, `DateApp`, `idPat`, `idDoc`, `createdAt`, `updatedAt`, `HourApp`) VALUES
	(24, '2023-06-15', 54, 54, '2023-06-10 11:21:35', '2023-06-10 11:21:35', '15:00 - 15:30'),
	(26, '2023-06-21', 81, 54, '2023-06-11 16:01:42', '2023-06-11 16:01:42', '17:00 - 17:30');

-- Listage de la structure de table sql9616314. avoir
CREATE TABLE IF NOT EXISTS `avoir` (
  `idMed` int NOT NULL,
  `idPat` int DEFAULT NULL,
  KEY `FK__AvoirMed` (`idMed`),
  KEY `FK2_AvoirPat` (`idPat`),
  CONSTRAINT `FK2_AvoirPat` FOREIGN KEY (`idPat`) REFERENCES `users` (`id`),
  CONSTRAINT `FK__AvoirMed` FOREIGN KEY (`idMed`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table sql9616314.avoir : ~0 rows (environ)

-- Listage de la structure de table sql9616314. certificates
CREATE TABLE IF NOT EXISTS `certificates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NameCertificate` varchar(50) NOT NULL,
  `SourceCertificate` varchar(100) NOT NULL,
  `DateCertificate` date NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table sql9616314.certificates : ~1 rows (environ)
REPLACE INTO `certificates` (`id`, `NameCertificate`, `SourceCertificate`, `DateCertificate`, `createdAt`, `updatedAt`) VALUES
	(34, 'dddddd', 'ddddddddddd', '2023-06-14', '2023-06-11 15:59:17', '2023-06-11 15:59:17');

-- Listage de la structure de table sql9616314. experiances
CREATE TABLE IF NOT EXISTS `experiances` (
  `id` int NOT NULL AUTO_INCREMENT,
  `labelExperiance` varchar(255) NOT NULL,
  `descriptionExperiance` varchar(255) NOT NULL,
  `DateStart` date NOT NULL,
  `DateEnd` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table sql9616314.experiances : ~1 rows (environ)
REPLACE INTO `experiances` (`id`, `labelExperiance`, `descriptionExperiance`, `DateStart`, `DateEnd`) VALUES
	(3, 'ddddddd', '888888888881133', '2023-06-22', '2023-06-01');

-- Listage de la structure de table sql9616314. messages
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idSender` int NOT NULL,
  `idReceiver` int NOT NULL,
  `content` varchar(255) NOT NULL,
  `isSee` int NOT NULL DEFAULT '0',
  `dateMessage` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK2_reciever` (`idReceiver`) USING BTREE,
  KEY `FK__sender` (`idSender`),
  CONSTRAINT `FK2_reciever` FOREIGN KEY (`idReceiver`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK__sender` FOREIGN KEY (`idSender`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table sql9616314.messages : ~11 rows (environ)
REPLACE INTO `messages` (`id`, `idSender`, `idReceiver`, `content`, `isSee`, `dateMessage`, `createdAt`, `updatedAt`) VALUES
	(97, 54, 81, 'ggggggggggg', 0, '2023-06-11 12:40:21', '2023-06-11 11:40:21', '2023-06-11 11:40:21'),
	(98, 81, 54, 'ssss', 0, '2023-06-11 12:42:57', '2023-06-11 11:42:57', '2023-06-11 11:42:57'),
	(99, 81, 54, 'ssss', 0, '2023-06-11 12:43:19', '2023-06-11 11:43:19', '2023-06-11 11:43:19'),
	(100, 54, 81, 'http://localhost:8000/user_profile.png', 0, '2023-06-11 12:43:23', '2023-06-11 11:43:23', '2023-06-11 11:43:23'),
	(101, 81, 54, 'eeeee', 0, '2023-06-11 12:43:27', '2023-06-11 11:43:27', '2023-06-11 11:43:27'),
	(102, 81, 54, 'wwwwwwww', 0, '2023-06-11 12:43:35', '2023-06-11 11:43:35', '2023-06-11 11:43:35'),
	(103, 54, 81, 'ddddddddd', 0, '2023-06-11 12:43:38', '2023-06-11 11:43:38', '2023-06-11 11:43:38'),
	(104, 54, 81, 'ddddddddd', 0, '2023-06-11 12:43:40', '2023-06-11 11:43:40', '2023-06-11 11:43:40'),
	(105, 54, 81, 'cc', 0, '2023-06-11 12:43:45', '2023-06-11 11:43:45', '2023-06-11 11:43:45'),
	(106, 81, 54, 'ccc', 0, '2023-06-11 12:43:50', '2023-06-11 11:43:50', '2023-06-11 11:43:50'),
	(107, 81, 83, 'dddddd', 0, '2023-06-11 17:00:34', '2023-06-11 16:00:34', '2023-06-11 16:00:34');

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
  `telephone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `cni` varchar(15) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `role` int DEFAULT '3',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `cni` (`cni`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table sql9616314.users : ~3 rows (environ)
REPLACE INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `telephone`, `address`, `cni`, `createdAt`, `updatedAt`, `role`) VALUES
	(54, 'soufianeqqqq', 'chajjaoui', 'schajjaoui22@gmail.com', '$2b$10$YiCasJS4FB2JzqrOIl2ZRuwgSflOEZl7bZHVQF/BLdPQ7z4MPxtaO', '0607025329', 'rue 19 okba bnou nafia safi  42', 'dd233864', '2023-06-03 18:30:07', '2023-06-10 11:38:07', 1),
	(81, 'soufiane', 'chajjaoui', 'schajjaoui@gmail.com', '$2b$10$NZsuTSxO07v2FxNF/.t/y.TbXx1PhhjtJACfnSjk1gFXq.4b7sX8q', '0607025329', 'rue 19 okba bnou nafia safi  42', 'dd233864a', '2023-06-11 00:12:28', '2023-06-11 11:42:02', 3),
	(83, 'soufiane', 'chajjaoui', 'schajjaouwqwi@gmail.com', '$2b$10$NpdU1Sw0..EGApFOebMCDOYYvnbewSw5CWYQE21LLW5.6fqXz3bYO', '0607025323', 'rue 19 okba bnou nafia safi  42', 'dd233864w', '2023-06-11 15:50:32', '2023-06-11 15:50:32', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
