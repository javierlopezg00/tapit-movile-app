-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: Main
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `platforms`
--

DROP TABLE IF EXISTS `platforms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `platforms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `platform` varchar(50) DEFAULT NULL,
  `icon_url` tinytext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `platform_UNIQUE` (`platform`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platforms`
--

LOCK TABLES `platforms` WRITE;
/*!40000 ALTER TABLE `platforms` DISABLE KEYS */;
INSERT INTO `platforms` VALUES (1,'Facebook','https://louisville.edu/mcconnellcenter/images/facebook_logos_PNG19748.png/image'),(2,'Instagram','https://static-00.iconduck.com/assets.00/social-instagram-icon-512x512-6mp2zfl3.png'),(3,'LinkedIn','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fcdsIUPUgmbvGaP-RC4RbHYdVtoN_fM8aya_8gOXI2BRtClESO-0_jgWTtKtIVmOQKs&usqp=CAU'),(4,'Resume','https://cdn-icons-png.flaticon.com/512/85/85047.png'),(5,'Phone Number','https://cdn-icons-png.flaticon.com/512/455/455705.png'),(6,'Discord','https://static-00.iconduck.com/assets.00/discord-icon-2048x2048-nnt62s2u.png'),(7,'Skype','https://static-00.iconduck.com/assets.00/skype-icon-2048x2048-i1tcgitm.png'),(8,'Teams','https://cdn.icon-icons.com/icons2/3053/PNG/512/microsoft_teams_alt_macos_bigsur_icon_189961.png'),(9,'VSCO','https://i.pinimg.com/originals/46/fb/36/46fb365ab8e09f413fe8c55ca32226b5.png'),(10,'Quora','https://play-lh.googleusercontent.com/EAVZzDs5jPuXJaR-zNoD3rzYYUu9VcdXciQYq1w2-n55QQeN3yo_krmM__rMjk4GR5FX'),(11,'imo','https://cdn-icons-png.flaticon.com/512/3536/3536465.png'),(12,'Spotify','https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png'),(13,'Reddit','https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-reddit-circle-512.png'),(14,'WhatsApp','https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360'),(15,'Twitter','https://play-lh.googleusercontent.com/J8k5q78xv4R8Smi4vOE6iUphLvOz0efC-0lzoyGfd0KRUlAv4ekuCtlss6KBN-tMvEw'),(16,'Telegram','https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/telegram-512.png'),(17,'Twitch','https://cdn.iconscout.com/icon/free/png-256/free-twitch-11-461838.png?f=webp'),(18,'Snapchat','https://seeklogo.com/images/S/snapchat-logo-2D9C3E7ADA-seeklogo.com.png'),(19,'Pinterest','https://cdn-icons-png.flaticon.com/512/145/145808.png'),(20,'Mail','https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/2560px-Gmail_Icon_%282013-2020%29.svg.png'),(21,'Youtube','https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png'),(22,'Github','https://cdn-icons-png.flaticon.com/512/25/25231.png'),(23,'TikTok','https://static-00.iconduck.com/assets.00/tik-tok-icon-2048x2048-mmnsrcbe.png');
/*!40000 ALTER TABLE `platforms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_platforms`
--

DROP TABLE IF EXISTS `user_platforms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_platforms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `platform_id` int DEFAULT NULL,
  `url_platform` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`platform_id`),
  KEY `user_platforms_ibfk_2` (`platform_id`),
  CONSTRAINT `user_platforms_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_platforms_ibfk_2` FOREIGN KEY (`platform_id`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_platforms`
--

LOCK TABLES `user_platforms` WRITE;
/*!40000 ALTER TABLE `user_platforms` DISABLE KEYS */;
INSERT INTO `user_platforms` VALUES (15,17,1,'www.facebook.com'),(21,17,2,'www.holaprueba.com'),(22,17,3,'www.linkedin.com'),(23,17,4,'www.javierlopezdev.com');
/*!40000 ALTER TABLE `user_platforms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(80) NOT NULL,
  `last_name` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `created_at` date NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (17,'Javier','Lopez','javierlopezguzman00@gmail.com','123','2023-07-04','javierlopezg00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_info`
--

DROP TABLE IF EXISTS `users_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `country` varchar(70) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `url_profile_photo` longtext,
  `url_cover_photo` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idnew_table_UNIQUE` (`id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_info`
--

LOCK TABLES `users_info` WRITE;
/*!40000 ALTER TABLE `users_info` DISABLE KEYS */;
INSERT INTO `users_info` VALUES (5,17,'Guatemala','2000-10-05','https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg','https://cdna.artstation.com/p/users/covers/000/432/702/default/e129c6405e08f1c85db8e59182a399d8.jpg?1586801088');
/*!40000 ALTER TABLE `users_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-09  1:09:53
