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
CREATE DATABASE IF NOT EXISTS `sql9616314` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
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
  CONSTRAINT `FK_appointment_users` FOREIGN KEY (`idDoc`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_appointment_users_2` FOREIGN KEY (`idPat`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table sql9616314.appointments : ~39 rows (environ)
REPLACE INTO `appointments` (`id`, `DateApp`, `idPat`, `idDoc`, `createdAt`, `updatedAt`, `HourApp`) VALUES
	(1, '2023-05-25', 2, 2, '2023-05-17 07:48:41', '2023-05-17 07:48:41', '12:11'),
	(2, '2023-05-25', 2, 2, '2023-05-17 07:48:42', '2023-05-17 07:48:42', '12:11'),
	(3, '2023-05-25', 2, 2, '2023-05-17 07:48:43', '2023-05-17 07:48:43', '12:11'),
	(4, '2023-05-25', 2, 2, '2023-05-17 07:48:43', '2023-05-17 07:48:43', '12:11'),
	(5, '2023-05-25', 2, 2, '2023-05-17 07:48:44', '2023-05-17 07:48:44', '12:11'),
	(6, '2023-05-25', 2, 2, '2023-05-17 07:48:44', '2023-05-17 07:48:44', '12:11'),
	(7, '2023-05-25', 2, 2, '2023-05-17 07:48:44', '2023-05-17 07:48:44', '12:11'),
	(8, '2023-05-25', 2, 2, '2023-05-17 07:48:45', '2023-05-17 07:48:45', '12:11'),
	(9, '2023-05-25', 2, 2, '2023-05-17 07:48:45', '2023-05-17 07:48:45', '12:11'),
	(10, '2023-05-25', 2, 2, '2023-05-17 07:48:46', '2023-05-17 07:48:46', '12:11'),
	(11, '2023-05-25', 2, 2, '2023-05-17 07:48:46', '2023-05-17 07:48:46', '12:11'),
	(12, '2023-05-25', 2, 2, '2023-05-17 07:48:46', '2023-05-17 07:48:46', '12:11'),
	(13, '2023-05-25', 2, 2, '2023-05-17 07:48:46', '2023-05-17 07:48:46', '12:11'),
	(14, '2023-05-25', 2, 2, '2023-05-17 07:48:47', '2023-05-17 07:48:47', '12:11'),
	(15, '2023-05-25', 2, 2, '2023-05-17 07:48:47', '2023-05-17 07:48:47', '12:11'),
	(16, '2023-05-25', 2, 2, '2023-05-17 07:48:47', '2023-05-17 07:48:47', '12:11'),
	(17, '2023-05-25', 2, 2, '2023-05-17 07:48:48', '2023-05-17 07:48:48', '12:11'),
	(18, '2023-05-25', 2, 2, '2023-05-17 14:18:24', '2023-05-17 14:18:24', '20:11'),
	(19, '2023-05-25', 2, 2, '2023-05-17 14:18:25', '2023-05-17 14:18:25', '20:11'),
	(20, '2023-05-25', 2, 2, '2023-05-17 14:18:32', '2023-05-17 14:18:32', '19:11'),
	(21, '2023-05-25', 2, 2, '2023-05-17 14:18:40', '2023-05-17 14:18:40', '22:11'),
	(22, '2023-05-25', 2, 2, '2023-05-17 14:18:41', '2023-05-17 14:18:41', '22:11'),
	(23, '2023-05-20', 2, 2, '2023-05-17 15:00:21', '2023-05-17 15:00:21', '22:11'),
	(24, '2023-05-20', 2, 2, '2023-05-17 15:00:22', '2023-05-17 15:00:22', '22:11'),
	(25, '2023-05-20', 2, 2, '2023-05-17 15:00:22', '2023-05-17 15:00:22', '22:11'),
	(26, '2023-05-20', 2, 2, '2023-05-17 15:00:23', '2023-05-17 15:00:23', '22:11'),
	(27, '2023-05-20', 2, 2, '2023-05-17 15:09:03', '2023-05-17 15:09:03', '12:11'),
	(28, '2023-05-20', 2, 2, '2023-05-17 15:09:06', '2023-05-17 15:09:06', '11:11'),
	(29, '2023-05-20', 2, 2, '2023-05-17 15:09:11', '2023-05-17 15:09:11', '15:11'),
	(30, '2023-05-20', 2, 2, '2023-05-17 15:28:49', '2023-05-17 15:28:49', '08:30 - 09:00'),
	(31, '2023-05-20', 2, 2, '2023-05-17 15:28:51', '2023-05-17 15:28:51', '08:30 - 09:00'),
	(32, '2023-05-20', 2, 2, '2023-05-17 15:28:52', '2023-05-17 15:28:52', '08:30 - 09:00'),
	(33, '2023-05-20', 2, 2, '2023-05-17 15:42:09', '2023-05-17 15:42:09', '15:00 - 15:30'),
	(34, '2023-05-20', 2, 2, '2023-05-17 15:42:10', '2023-05-17 15:42:10', '15:00 - 15:30'),
	(35, '2023-05-20', 2, 2, '2023-05-17 17:21:01', '2023-05-17 17:21:01', '16:00 - 16:30'),
	(36, '2023-05-20', 2, 2, '2023-05-17 22:23:33', '2023-05-17 22:23:33', '16:00 - 16:30'),
	(37, '2023-05-20', 2, 2, '2023-05-17 22:24:41', '2023-05-17 22:24:41', '16:00 - 16:30'),
	(38, '2023-05-18', 71, 2, '2023-05-17 22:51:31', '2023-05-17 22:51:31', '10:00 - 10:30'),
	(39, '2023-05-18', 71, 2, '2023-05-17 22:53:12', '2023-05-17 22:53:12', '09:00 - 09:30');

-- Listage de la structure de table sql9616314. avoir
CREATE TABLE IF NOT EXISTS `avoir` (
  `idMed` int NOT NULL,
  `idPat` int DEFAULT NULL,
  KEY `FK__AvoirMed` (`idMed`),
  KEY `FK2_AvoirPat` (`idPat`),
  CONSTRAINT `FK2_AvoirPat` FOREIGN KEY (`idPat`) REFERENCES `users` (`id`),
  CONSTRAINT `FK__AvoirMed` FOREIGN KEY (`idMed`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table sql9616314.avoir : ~0 rows (environ)

-- Listage de la structure de table sql9616314. certificate
CREATE TABLE IF NOT EXISTS `certificate` (
  `id` int NOT NULL,
  `idMed` int NOT NULL,
  `NameCertificate` varchar(50) NOT NULL,
  `SourceCertificate` varchar(100) NOT NULL,
  `DateCertificate` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_certificate_users` (`idMed`),
  CONSTRAINT `FK_certificate_users` FOREIGN KEY (`idMed`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table sql9616314.certificate : ~0 rows (environ)

-- Listage de la structure de table sql9616314. experiance
CREATE TABLE IF NOT EXISTS `experiance` (
  `id` int NOT NULL,
  `idMed` int NOT NULL,
  `labelExperiance` varchar(255) NOT NULL,
  `descriptionExperiance` varchar(255) NOT NULL,
  `DateStart` date NOT NULL,
  `DateEnd` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__users` (`idMed`),
  CONSTRAINT `FK__users` FOREIGN KEY (`idMed`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table sql9616314.experiance : ~0 rows (environ)

-- Listage de la structure de table sql9616314. message
CREATE TABLE IF NOT EXISTS `message` (
  `id` int NOT NULL,
  `idSender` int NOT NULL,
  `idreciever` int NOT NULL,
  `content` varchar(255) NOT NULL,
  `isSee` int NOT NULL DEFAULT '0',
  `dateMessage` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK__sender` (`idSender`),
  KEY `FK2_reciever` (`idreciever`),
  CONSTRAINT `FK2_reciever` FOREIGN KEY (`idreciever`) REFERENCES `users` (`id`),
  CONSTRAINT `FK__sender` FOREIGN KEY (`idSender`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table sql9616314.message : ~0 rows (environ)

-- Listage de la structure de table sql9616314. test
CREATE TABLE IF NOT EXISTS `test` (
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table sql9616314.test : ~0 rows (environ)

-- Listage de la structure de table sql9616314. users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `telephone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `cni` varchar(15) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `role` int DEFAULT '3',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `cni` (`cni`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table sql9616314.users : ~9 rows (environ)
REPLACE INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `telephone`, `address`, `cni`, `createdAt`, `updatedAt`, `role`) VALUES
	(1, 'John', 'Doe', 'johndoe@example.com', 'sffffffffffs', '1234567890', NULL, NULL, '2023-05-11 17:45:00', '2023-05-11 17:45:00', 3),
	(2, 'soufiane', 'chajjaoui', 'schajjaoui2003@gmail.com', '$2b$10$omsLFfOEDXPkgaLegMveUupPKhkUcb5c7F2/BNQLNp9KdnxXZHBEy', '0607025329', 'rue 19 okba bnou nafia safi  42', 'dd233864ss', '2023-05-15 05:34:45', '2023-05-15 05:34:45', 3),
	(8, 'John', 'Doe', 'johndorrre@example.com', 'sffffffffffs', '1234567890', NULL, NULL, '2023-05-11 19:03:49', '2023-05-11 19:03:49', 3),
	(33, '12222', '2222', 'johndoe@sccc.com', 'sssssssssss', '1234567890', NULL, '1222222222', '2023-05-12 00:06:37', '2023-05-12 00:06:37', 3),
	(45, '12222', '2222', 'johndoe@exemple.com', 'sssssssssss', '1234567890', NULL, '4444444444', '2023-05-12 00:58:47', '2023-05-12 00:58:47', 3),
	(55, '12222', '2222', 'johndoe@exempe.com', 'sssssssssss', '1234567890', NULL, '12222229992', '2023-05-12 03:12:50', '2023-05-12 03:12:50', 3),
	(65, '12222', '2222', 'johndoe@exemhpe.com', '$2b$10$dRTr8NQTofK9zudeYn8cqO8vR/.Fw3A/xviKkfho0mxH2UBbaD0.m', '1234567890', NULL, '122222829992', '2023-05-12 03:25:48', '2023-05-12 03:25:48', 3),
	(70, '12222', '2222', 'johndoe@exee.com', '$2b$10$wnKrX8VkK5VMrnTHovdHoe0T3iFX17Sf4U9RER.5Ibj2Ex2Rf78uO', '1234567890', NULL, '1222228299092', '2023-05-12 03:53:50', '2023-05-12 03:53:50', 3),
	(71, 'soufiane', 'chajjaoui', 'schajjaoui@gmail.com', '$2b$10$3MCUv5dSBuiJsSrYA/t3z.DU3aRTI/PjhQp3H1FLTy93F6AGFM8S2', '0607025329', 'rue 19 okba bnou nafia safi  42', 'fffffff', '2023-05-16 18:02:48', '2023-05-16 18:02:48', 3);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
