-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: mysql.cs02noukcnjb.us-east-2.rds.amazonaws.com    Database: demo
-- ------------------------------------------------------
-- Server version	8.0.20

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `facilities`
--

DROP TABLE IF EXISTS `facilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facilities` (
  `facilityId` int NOT NULL AUTO_INCREMENT,
  `facilityName` varchar(45) NOT NULL,
  `suborgId` int DEFAULT NULL,
  `orgId` int DEFAULT NULL,
  `coordinate` point DEFAULT NULL,
  PRIMARY KEY (`facilityId`),
  KEY `suborgId_idx` (`suborgId`),
  KEY `orgId_idx` (`orgId`) /*!80000 INVISIBLE */,
  CONSTRAINT `suborgId` FOREIGN KEY (`suborgId`) REFERENCES `suborganization` (`suborgId`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facilities`
--

LOCK TABLES `facilities` WRITE;
/*!40000 ALTER TABLE `facilities` DISABLE KEYS */;
INSERT INTO `facilities` VALUES (1,'Jet Propulsion Lab',5,2,_binary '\0\0\0\0\0\0\0v/œ‹]À\"jG\ÕA@'),(2,'Kennedy Space Center',5,2,_binary '\0\0\0\0\0\0\0\0\0\0\à¤)TÀ\0\0\0 –<@'),(3,'Langley Research Center',4,2,_binary '\0\0\0\0\0\0\0ù\çX”\ÈSÀ\0ú\"FŒB@'),(4,'Armstrong Flight Research Center',4,2,_binary '\0\0\0\0\0\0\0º“™ˆx]À¤ö\Ç zA@'),(5,'Stennis Space Center',4,2,_binary '\0\0\0\0\0\0\0\Ò!\Ë\ÝBfVÀ`³·\ï¬`>@');
/*!40000 ALTER TABLE `facilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organization`
--

DROP TABLE IF EXISTS `organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organization` (
  `orgId` int NOT NULL AUTO_INCREMENT,
  `orgName` varchar(45) DEFAULT NULL,
  `totalFacilities` int DEFAULT NULL,
  PRIMARY KEY (`orgId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organization`
--

LOCK TABLES `organization` WRITE;
/*!40000 ALTER TABLE `organization` DISABLE KEYS */;
INSERT INTO `organization` VALUES (1,'DHS',NULL),(2,'NASA',7),(3,'NRC',NULL);
/*!40000 ALTER TABLE `organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suborganization`
--

DROP TABLE IF EXISTS `suborganization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suborganization` (
  `suborgId` int NOT NULL,
  `suborgName` varchar(45) NOT NULL,
  `orgId` int DEFAULT NULL,
  `totalFacilities` int DEFAULT NULL,
  PRIMARY KEY (`suborgId`),
  KEY `orgId_idx` (`orgId`),
  CONSTRAINT `orgId` FOREIGN KEY (`orgId`) REFERENCES `organization` (`orgId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suborganization`
--

LOCK TABLES `suborganization` WRITE;
/*!40000 ALTER TABLE `suborganization` DISABLE KEYS */;
INSERT INTO `suborganization` VALUES (0,'SubOrg Test',2,NULL),(1,'TSA',1,NULL),(2,'Cyber Security',1,NULL),(3,'Border Patrol',1,NULL),(4,'Aeronautics Research',2,NULL),(5,'Space Technology',2,NULL);
/*!40000 ALTER TABLE `suborganization` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-03 10:22:59
