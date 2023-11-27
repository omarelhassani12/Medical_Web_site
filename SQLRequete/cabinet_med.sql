-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           10.4.27-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Listage de la structure de la table sql9616314. appointments
CREATE TABLE IF NOT EXISTS `appointments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `DateApp` date NOT NULL,
  `idPat` int(11) NOT NULL,
  `idDoc` int(11) NOT NULL DEFAULT 93,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `HourApp` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_appointment_users` (`idDoc`),
  KEY `FK_appointment_users_2` (`idPat`),
  CONSTRAINT `FK_appointment_users` FOREIGN KEY (`idDoc`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_appointment_users_2` FOREIGN KEY (`idPat`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=385 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table sql9616314.appointments : ~71 rows (environ)
INSERT INTO `appointments` (`id`, `DateApp`, `idPat`, `idDoc`, `createdAt`, `updatedAt`, `HourApp`) VALUES
	(227, '2023-07-29', 90, 93, '2023-07-29 15:45:17', '2023-07-29 15:45:17', '08:30 - 09:00'),
	(228, '2023-07-29', 90, 93, '2023-07-29 16:20:09', '2023-07-29 16:20:09', '09:00 - 09:30'),
	(229, '2023-07-29', 90, 93, '2023-07-29 16:20:28', '2023-07-29 16:20:28', '11:30 - 12:00'),
	(230, '2023-07-29', 90, 93, '2023-07-29 16:20:41', '2023-07-29 16:20:41', '11:00 - 11:30'),
	(231, '2023-07-29', 90, 93, '2023-07-29 16:20:52', '2023-07-29 16:20:52', '09:30 - 10:00'),
	(232, '2023-07-29', 90, 93, '2023-07-29 16:21:00', '2023-07-29 16:21:00', '10:00 - 10:30'),
	(233, '2023-07-29', 90, 93, '2023-07-29 16:21:08', '2023-07-29 16:21:08', '10:30 - 11:00'),
	(234, '2023-07-29', 90, 93, '2023-07-29 16:21:15', '2023-07-29 16:21:15', '14:00 - 14:30'),
	(235, '2023-07-29', 90, 93, '2023-07-29 16:21:23', '2023-07-29 16:21:23', '17:30 - 18:00'),
	(236, '2023-07-29', 90, 93, '2023-07-29 16:21:30', '2023-07-29 16:21:30', '17:00 - 17:30'),
	(237, '2023-07-29', 90, 93, '2023-07-29 16:21:37', '2023-07-29 16:21:37', '16:30 - 17:00'),
	(238, '2023-07-29', 90, 93, '2023-07-29 16:21:44', '2023-07-29 16:21:44', '15:00 - 15:30'),
	(239, '2023-07-29', 90, 93, '2023-07-29 16:21:51', '2023-07-29 16:21:51', '14:30 - 15:00'),
	(240, '2023-07-29', 90, 93, '2023-07-29 16:21:59', '2023-07-29 16:21:59', '15:30 - 16:00'),
	(241, '2023-07-29', 90, 93, '2023-07-29 16:22:07', '2023-07-29 16:22:07', '16:00 - 16:30'),
	(242, '2023-08-18', 90, 93, '2023-08-18 01:22:42', '2023-08-18 01:22:42', '09:00 - 09:30'),
	(243, '2023-08-18', 90, 93, '2023-08-18 01:52:10', '2023-08-18 01:52:10', '10:00 - 10:30'),
	(244, '2023-08-18', 90, 93, '2023-08-18 01:57:44', '2023-08-18 01:57:44', '11:00 - 11:30'),
	(245, '2023-08-18', 90, 93, '2023-08-18 01:58:43', '2023-08-18 01:58:43', '14:00 - 14:30'),
	(246, '2023-08-18', 90, 93, '2023-08-18 01:59:39', '2023-08-18 01:59:39', '15:00 - 15:30'),
	(247, '2023-08-18', 90, 93, '2023-08-18 02:02:25', '2023-08-18 02:02:25', '16:00 - 16:30'),
	(248, '2023-08-18', 90, 93, '2023-08-18 02:04:50', '2023-08-18 02:04:50', '17:00 - 17:30'),
	(249, '2023-08-18', 90, 93, '2023-08-18 02:05:44', '2023-08-18 02:05:44', '17:30 - 18:00'),
	(250, '2023-08-18', 90, 93, '2023-08-18 02:07:12', '2023-08-18 02:07:12', '16:30 - 17:00'),
	(251, '2023-08-18', 90, 93, '2023-08-18 02:07:46', '2023-08-18 02:07:46', '15:30 - 16:00'),
	(252, '2023-08-18', 90, 93, '2023-08-18 02:12:35', '2023-08-18 02:12:35', '14:30 - 15:00'),
	(253, '2023-08-18', 90, 93, '2023-08-18 22:50:13', '2023-08-18 22:50:13', '09:30 - 10:00'),
	(254, '2023-08-19', 90, 93, '2023-08-18 23:42:54', '2023-08-18 23:42:54', '09:30 - 10:00'),
	(255, '2023-08-19', 90, 93, '2023-08-18 23:45:09', '2023-08-18 23:45:09', '10:30 - 11:00'),
	(256, '2023-08-19', 90, 93, '2023-08-18 23:46:08', '2023-08-18 23:46:08', '15:00 - 15:30'),
	(257, '2023-08-19', 90, 93, '2023-08-18 23:51:33', '2023-08-18 23:51:33', '14:00 - 14:30'),
	(258, '2023-08-19', 90, 93, '2023-08-18 23:57:50', '2023-08-18 23:57:50', '16:00 - 16:30'),
	(259, '2023-08-23', 90, 93, '2023-08-18 23:58:21', '2023-08-18 23:58:21', '09:30 - 10:00'),
	(260, '2023-08-25', 90, 93, '2023-08-19 00:00:53', '2023-08-19 00:00:53', '08:30 - 09:00'),
	(261, '2023-08-19', 90, 93, '2023-08-19 00:01:37', '2023-08-19 00:01:37', '16:30 - 17:00'),
	(262, '2023-08-19', 90, 93, '2023-08-19 00:08:39', '2023-08-19 00:08:39', '17:00 - 17:30'),
	(263, '2023-08-19', 90, 93, '2023-08-19 00:10:09', '2023-08-19 00:10:09', '15:30 - 16:00'),
	(264, '2023-08-19', 90, 93, '2023-08-19 00:14:20', '2023-08-19 00:14:20', '14:30 - 15:00'),
	(265, '2023-08-19', 90, 93, '2023-08-19 00:16:11', '2023-08-19 00:16:11', '11:30 - 12:00'),
	(266, '2023-08-19', 90, 93, '2023-08-19 00:21:29', '2023-08-19 00:21:29', '17:30 - 18:00'),
	(267, '2023-08-19', 90, 93, '2023-08-19 00:28:17', '2023-08-19 00:28:17', '11:00 - 11:30'),
	(268, '2023-08-19', 90, 93, '2023-08-19 00:29:10', '2023-08-19 00:29:10', '10:00 - 10:30'),
	(269, '2023-08-19', 90, 93, '2023-08-19 00:31:58', '2023-08-19 00:31:58', '08:30 - 09:00'),
	(270, '2023-08-19', 90, 93, '2023-08-19 00:33:05', '2023-08-19 00:33:05', '09:00 - 09:30'),
	(271, '2023-08-21', 90, 93, '2023-08-19 00:35:21', '2023-08-19 00:35:21', '08:30 - 09:00'),
	(272, '2023-08-21', 90, 93, '2023-08-19 00:36:57', '2023-08-19 00:36:57', '10:30 - 11:00'),
	(273, '2023-08-21', 90, 93, '2023-08-19 00:37:54', '2023-08-19 00:37:54', '14:30 - 15:00'),
	(274, '2023-08-21', 90, 93, '2023-08-19 00:40:25', '2023-08-19 00:40:25', '15:30 - 16:00'),
	(275, '2023-08-21', 90, 93, '2023-08-19 00:43:29', '2023-08-19 00:43:29', '16:30 - 17:00'),
	(276, '2023-08-22', 90, 93, '2023-08-19 00:44:33', '2023-08-19 00:44:33', '08:30 - 09:00'),
	(277, '2023-08-22', 90, 93, '2023-08-19 00:46:57', '2023-08-19 00:46:57', '15:00 - 15:30'),
	(278, '2023-08-21', 90, 93, '2023-08-19 00:48:08', '2023-08-19 00:48:08', '17:30 - 18:00'),
	(279, '2023-08-21', 90, 93, '2023-08-19 00:49:40', '2023-08-19 00:49:40', '11:30 - 12:00'),
	(280, '2023-08-21', 90, 93, '2023-08-19 00:51:56', '2023-08-19 00:51:56', '09:30 - 10:00'),
	(281, '2023-08-21', 90, 93, '2023-08-19 00:56:50', '2023-08-19 00:56:50', '15:00 - 15:30'),
	(282, '2023-08-23', 90, 93, '2023-08-19 01:01:04', '2023-08-19 01:01:04', '16:30 - 17:00'),
	(283, '2023-08-21', 90, 93, '2023-08-19 01:11:07', '2023-08-19 01:11:07', '14:00 - 14:30'),
	(284, '2023-08-22', 90, 93, '2023-08-19 01:11:42', '2023-08-19 01:11:42', '16:00 - 16:30'),
	(285, '2023-08-21', 90, 93, '2023-08-19 01:13:14', '2023-08-19 01:13:14', '10:00 - 10:30'),
	(286, '2023-08-21', 90, 93, '2023-08-19 01:15:06', '2023-08-19 01:15:06', '17:00 - 17:30'),
	(287, '2023-08-21', 90, 93, '2023-08-19 01:15:36', '2023-08-19 01:15:36', '16:00 - 16:30'),
	(288, '2023-08-21', 90, 93, '2023-08-19 01:17:07', '2023-08-19 01:17:07', '11:00 - 11:30'),
	(289, '2023-08-21', 90, 93, '2023-08-19 01:19:31', '2023-08-19 01:19:31', '09:00 - 09:30'),
	(290, '2023-08-22', 90, 93, '2023-08-19 01:21:20', '2023-08-19 01:21:20', '16:30 - 17:00'),
	(291, '2023-08-22', 90, 93, '2023-08-19 01:21:51', '2023-08-19 01:21:51', '17:00 - 17:30'),
	(292, '2023-08-22', 90, 93, '2023-08-19 01:23:47', '2023-08-19 01:23:47', '10:00 - 10:30'),
	(293, '2023-08-22', 90, 93, '2023-08-19 01:31:01', '2023-08-19 01:31:01', '15:30 - 16:00'),
	(294, '2023-08-22', 90, 93, '2023-08-19 01:32:45', '2023-08-19 01:32:45', '14:00 - 14:30'),
	(295, '2023-08-22', 90, 93, '2023-08-19 01:33:25', '2023-08-19 01:33:25', '11:00 - 11:30'),
	(296, '2023-08-22', 90, 93, '2023-08-19 01:34:19', '2023-08-19 01:34:19', '14:30 - 15:00'),
	(384, '2023-11-25', 90, 93, '2023-11-25 22:13:01', '2023-11-25 22:13:01', '09:30 - 10:00');

-- Listage de la structure de la table sql9616314. avoir
CREATE TABLE IF NOT EXISTS `avoir` (
  `idMed` int(11) NOT NULL,
  `idPat` int(11) DEFAULT NULL,
  KEY `FK__AvoirMed` (`idMed`),
  KEY `FK2_AvoirPat` (`idPat`),
  CONSTRAINT `FK2_AvoirPat` FOREIGN KEY (`idPat`) REFERENCES `users` (`id`),
  CONSTRAINT `FK__AvoirMed` FOREIGN KEY (`idMed`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table sql9616314.avoir : ~0 rows (environ)

-- Listage de la structure de la table sql9616314. certificates
CREATE TABLE IF NOT EXISTS `certificates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `NameCertificate` varchar(50) NOT NULL,
  `SourceCertificate` varchar(100) NOT NULL,
  `DateCertificate` date NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table sql9616314.certificates : ~1 rows (environ)
INSERT INTO `certificates` (`id`, `NameCertificate`, `SourceCertificate`, `DateCertificate`, `createdAt`, `updatedAt`) VALUES
	(35, 'Doctor of Medicine (M.D.)', 'Medical University of Exampleville', '2023-06-14', '2023-06-13 20:50:52', '2023-06-13 20:50:52');

-- Listage de la structure de la table sql9616314. experiances
CREATE TABLE IF NOT EXISTS `experiances` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `labelExperiance` varchar(255) NOT NULL,
  `descriptionExperiance` varchar(255) NOT NULL,
  `DateStart` date NOT NULL,
  `DateEnd` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table sql9616314.experiances : ~2 rows (environ)
INSERT INTO `experiances` (`id`, `labelExperiance`, `descriptionExperiance`, `DateStart`, `DateEnd`) VALUES
	(1, 'Cardiologist', 'HeartCare Clinic', '2018-07-04', '2021-07-01'),
	(2, 'Pediatrician', ' Sunshine Children\'s Hospital', '2014-07-17', '2018-02-09');

-- Listage de la structure de la table sql9616314. messages
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idSender` int(11) NOT NULL,
  `idReceiver` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `isSee` int(11) NOT NULL DEFAULT 0,
  `dateMessage` datetime NOT NULL DEFAULT current_timestamp(),
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK2_reciever` (`idReceiver`) USING BTREE,
  KEY `FK__sender` (`idSender`),
  CONSTRAINT `FK2_reciever` FOREIGN KEY (`idReceiver`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK__sender` FOREIGN KEY (`idSender`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table sql9616314.messages : ~10 rows (environ)
INSERT INTO `messages` (`id`, `idSender`, `idReceiver`, `content`, `isSee`, `dateMessage`, `createdAt`, `updatedAt`) VALUES
	(128, 90, 95, 'Bonjour, j\'aimerais prendre rendez-vous pour une consultation médicale.', 0, '2023-06-13 16:31:59', '2023-06-13 15:31:59', '2023-06-13 15:31:59'),
	(129, 95, 90, 'Bonjour, bien sûr ! Nous proposons désormais des consultations virtuelles par messagerie intégrée. Vous n\'avez pas besoin de vous déplacer à la clinique. Pouvez-vous me donner quelques détails sur votre situation médicale ?', 0, '2023-06-13 16:32:06', '2023-06-13 15:32:06', '2023-06-13 15:32:06'),
	(130, 90, 95, 'Oui, je souffre de maux de tête persistants depuis quelques jours.', 0, '2023-06-13 16:32:12', '2023-06-13 15:32:12', '2023-06-13 15:32:12'),
	(131, 95, 90, 'Compris. Pouvez-vous me donner plus de détails sur vos symptômes ? Avez-vous d\'autres problèmes de santé dont nous devrions être conscients ?', 0, '2023-06-13 16:32:19', '2023-06-13 15:32:19', '2023-06-13 15:32:19'),
	(132, 90, 95, 'Mes maux de tête sont accompagnés de nausées légères, mais je n\'ai pas d\'autres problèmes de santé importants.', 0, '2023-06-13 16:32:23', '2023-06-13 15:32:23', '2023-06-13 15:32:23'),
	(133, 95, 90, 'Nous sommes là pour vous aider. À bientôt lors de votre consultation virtuelle !', 0, '2023-06-13 16:32:28', '2023-06-13 15:32:28', '2023-06-13 15:32:28'),
	(135, 90, 95, 'dfdgdg', 0, '2023-07-29 16:40:05', '2023-07-29 15:40:05', '2023-07-29 15:40:05'),
	(136, 90, 93, 'salam', 0, '2023-07-29 16:43:20', '2023-07-29 15:43:20', '2023-07-29 15:43:20'),
	(137, 93, 90, 'cv', 0, '2023-07-29 16:43:35', '2023-07-29 15:43:35', '2023-07-29 15:43:35'),
	(138, 90, 93, 'cv tt', 0, '2023-07-29 16:43:58', '2023-07-29 15:43:58', '2023-07-29 15:43:58');

-- Listage de la structure de la table sql9616314. test
CREATE TABLE IF NOT EXISTS `test` (
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table sql9616314.test : ~0 rows (environ)

-- Listage de la structure de la table sql9616314. users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `cni` varchar(15) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `role` int(11) DEFAULT 3,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `cni` (`cni`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table sql9616314.users : ~8 rows (environ)
INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `telephone`, `address`, `cni`, `createdAt`, `updatedAt`, `role`) VALUES
	(1, 'Omar', 'EL HASSANI', 'omar@gmail.com', '$2b$10$NZsuTSxO07v2FxNF/.t/y.TbXx1PhhjtJACfnSjk1gFXq.4b7sX8q', '0643545349', NULL, 'F4345434', '2023-06-11 23:35:28', '2023-06-11 23:36:03', 3),
	(2, 'Sec', 's', 's@gmail.com', '$2b$10$H8z9dx/CYT02rS2VeHJSAeeoygyZpWpELj3LlCJiO0hhxiwxvperC', NULL, NULL, NULL, '2023-06-11 23:37:20', '2023-06-11 23:52:42', 2),
	(87, 'aaa', 'aa', 'aa@gmail.com', '$2b$10$Ko4ljZGbvJ1fWwIcz9GQjuZOcRYNKYkNYRvJTBzYjpGFy6.Ekjchq', '0633543546', 'DDDDDDDDDddddddd', 'h453434', '2023-06-11 23:46:55', '2023-06-11 23:46:55', 3),
	(90, 'Patient', '', 'pa@gmail.com', '$2b$10$9FoItzbIucRcADqsfc1tDu.27.YW7d.GcUyjKRZPJeq9mNnytm0Qa', '0633543546', 'DDDDDDDDDddddddd', 'h45343s', '2023-06-12 00:03:54', '2023-06-16 21:13:23', 3),
	(93, 'doc', 'doc', 'dd@gmail.com', '$2b$10$eeduJydnOo/CkALpnqRn.e57GKk7gD/XSYALou6tQwLVJWJBtYe2i', '0633543546', 'DDDDDDDDDddddddd', 'h453434s', '2023-06-12 00:41:15', '2023-06-12 00:41:15', 1),
	(94, 'Patient 1', '', 'patient@gmail.com', '$2b$10$iyYINoxIE/nvwd7f2MCzEOw6y.v3wewlHGDUKqp/yTH0CgVUVqY9S', '0999999999', 'EOZEZEZ', 'K343434', '2023-06-12 03:45:07', '2023-06-12 03:45:31', 3),
	(95, 'doctor', '1', 'doc@gmail.com', '$2b$10$H8z9dx/CYT02rS2VeHJSAeeoygyZpWpELj3LlCJiO0hhxiwxvperC', NULL, NULL, NULL, '2023-06-13 15:12:19', '2023-06-13 15:12:32', 1),
	(102, 'doc', 'doctor', 'user1@2gmail.com', '$2b$10$VAxeLQWCn/r43XbqZZ714uF.S/lfiiKFOlattleUWYrgOL6GGb9vu', '0666666666', 'ssssssssss', 'HE3243s433', '2023-06-13 20:49:52', '2023-06-13 20:49:52', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
