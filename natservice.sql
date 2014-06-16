-- MySQL dump 10.13  Distrib 5.5.31, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: natservice
-- ------------------------------------------------------
-- Server version	5.5.31-0+wheezy1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES gbk */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `sys_code` varchar(10) DEFAULT NULL,
  `menu_code` varchar(30) NOT NULL DEFAULT '',
  `menu_name` varchar(30) DEFAULT NULL,
  `menu_level` smallint(6) DEFAULT '1',
  `menu_index` smallint(6) DEFAULT '1',
  `menu_father` varchar(30) DEFAULT NULL,
  `prog_url` varchar(50) DEFAULT NULL,
  `leaf_flag` varchar(5) DEFAULT 'N',
  `task_flag` char(1) DEFAULT 'N',
  `count_task_sql` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`menu_code`)
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES ('INV','01','基础数据',1,1,'root','','N','N','');
INSERT INTO `menu` VALUES ('INV','0101','核算期定义',2,1,'01','inv0101.do','Y','N','');
INSERT INTO `menu` VALUES ('INV','0102','仓库定义',2,2,'01','inv0102.do','Y','N','');
INSERT INTO `menu` VALUES ('INV','0103','物料属性定义',2,3,'01','inv0103.do','Y','N','');
INSERT INTO `menu` VALUES ('INV','0104','供应商定义',2,4,'01','inv0104.do','Y','N','');
INSERT INTO `menu` VALUES ('INV','03','采购入库',1,3,'root','','N','N','');
INSERT INTO `menu` VALUES ('INV','0301','录入入库单',2,1,'03','inv0301.do','Y','Y','select count(*) from inv.inv_bill_main');
INSERT INTO `menu` VALUES ('INV','0302','入库单审批',2,2,'03','inv0302.do','Y','N','');
INSERT INTO `menu` VALUES ('INV','0303','入库单过帐',2,3,'03','inv0303.do','Y','N','');
INSERT INTO `menu` VALUES ('INV','0304','入库单查询',2,4,'03','inv0304.do','Y','N',' ');
INSERT INTO `menu` VALUES ('SYS','99','系统管理',1,99,'root','','N','N','');
INSERT INTO `menu` VALUES ('SYS','9901','菜单定义',2,3,'99','menuDef.do','Y','N','');
INSERT INTO `menu` VALUES ('SYS','9902','角色权限定义',2,2,'99','roleDef.do','Y','N','');
INSERT INTO `menu` VALUES ('SYS','9903','用户权限定义',2,1,'99','userDef.do','Y','N','');
INSERT INTO `menu` VALUES ('SYS','9904','系统授权',2,4,'99','roleAuth.do','Y','N','');
INSERT INTO `menu` VALUES ('SYS','root','企业智能计算中心',0,1,'','','N','N','');
INSERT INTO `menu` VALUES ('INV','0105','部门定义',2,5,'01','','Y','','');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `role_code` varchar(30) NOT NULL DEFAULT '',
  `role_name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`role_code`)
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES ('admin','管理员');
INSERT INTO `role` VALUES ('role1','角色1');
INSERT INTO `role` VALUES ('role2','角色2');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_auth`
--

DROP TABLE IF EXISTS `role_auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_auth` (
  `role_code` varchar(30) NOT NULL DEFAULT '',
  `menu_code` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`role_code`,`menu_code`)
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_auth`
--

LOCK TABLES `role_auth` WRITE;
/*!40000 ALTER TABLE `role_auth` DISABLE KEYS */;
INSERT INTO `role_auth` VALUES ('admin','01');
INSERT INTO `role_auth` VALUES ('admin','0101');
INSERT INTO `role_auth` VALUES ('admin','0102');
INSERT INTO `role_auth` VALUES ('admin','0103');
INSERT INTO `role_auth` VALUES ('admin','0104');
INSERT INTO `role_auth` VALUES ('admin','03');
INSERT INTO `role_auth` VALUES ('admin','0301');
INSERT INTO `role_auth` VALUES ('admin','0302');
INSERT INTO `role_auth` VALUES ('admin','0303');
INSERT INTO `role_auth` VALUES ('admin','0304');
INSERT INTO `role_auth` VALUES ('admin','99');
INSERT INTO `role_auth` VALUES ('admin','9901');
INSERT INTO `role_auth` VALUES ('admin','9902');
INSERT INTO `role_auth` VALUES ('admin','9903');
INSERT INTO `role_auth` VALUES ('admin','9904');
INSERT INTO `role_auth` VALUES ('admin','root');
INSERT INTO `role_auth` VALUES ('role1','01');
INSERT INTO `role_auth` VALUES ('role1','0103');
INSERT INTO `role_auth` VALUES ('role1','0104');
INSERT INTO `role_auth` VALUES ('role1','0105');
INSERT INTO `role_auth` VALUES ('role2','99');
INSERT INTO `role_auth` VALUES ('role2','9901');
INSERT INTO `role_auth` VALUES ('role2','9902');
INSERT INTO `role_auth` VALUES ('role2','9903');
INSERT INTO `role_auth` VALUES ('role2','9904');
INSERT INTO `role_auth` VALUES ('role2','root');
/*!40000 ALTER TABLE `role_auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sfc_bom`
--

DROP TABLE IF EXISTS `sfc_bom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sfc_bom` (
  `proj_code` varchar(20) NOT NULL DEFAULT '',
  `parent_code` varchar(50) NOT NULL DEFAULT '',
  `child_code` varchar(50) NOT NULL DEFAULT '',
  `use_num` decimal(12,4) NOT NULL DEFAULT '0.0000',
  `lot_size` decimal(12,4) DEFAULT NULL,
  `lead_time` int(11) DEFAULT NULL,
  `offset_days` int(11) DEFAULT NULL,
  `ma_flag` char(1) DEFAULT NULL,
  `ma_note` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`proj_code`,`parent_code`,`child_code`)
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sfc_bom`
--

LOCK TABLES `sfc_bom` WRITE;
/*!40000 ALTER TABLE `sfc_bom` DISABLE KEYS */;
INSERT INTO `sfc_bom` VALUES ('F06-123','B1','L1',2.0000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` VALUES ('F06-123','B1','L2',1.0000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` VALUES ('F06-123','B2','C3',5.0000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` VALUES ('F06-123','B2','L1',1.0000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` VALUES ('F06-123','L1','C1',2.5000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` VALUES ('F06-123','L2','C2',2.5000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` VALUES ('F06-123','P1','B1',2.0000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` VALUES ('F06-123','P1','B2',1.0000,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `sfc_bom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_user`
--

DROP TABLE IF EXISTS `sys_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_user` (
  `group_id` varchar(20) NOT NULL DEFAULT 'X',
  `user_id` varchar(20) DEFAULT NULL,
  `user_pwd` varchar(20) DEFAULT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `user_ip` varchar(20) NOT NULL DEFAULT '',
  `user_mac` varchar(20) DEFAULT NULL,
  `user_note` varchar(50) DEFAULT NULL,
  `valid_flag` char(1) DEFAULT 'N',
  `exceed_flag` char(1) DEFAULT 'N',
  `dept_code` varchar(20) DEFAULT NULL,
  `dept_name` varchar(50) DEFAULT NULL,
  `current_role` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`user_ip`)
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_user`
--

LOCK TABLES `sys_user` WRITE;
/*!40000 ALTER TABLE `sys_user` DISABLE KEYS */;
INSERT INTO `sys_user` VALUES ('X','sht','','石海涛','',NULL,' ','N','N','HIT','哈工大','admin');
INSERT INTO `sys_user` VALUES ('X','cameran','cameran','刘旭东','192.168.1.2','192.168.1.2','','N','N','HIT','哈工大','role1');
INSERT INTO `sys_user` VALUES ('X','ddl','ddl','董德亮','192.168.1.3',NULL,'','N','N','XA','西安',NULL);
INSERT INTO `sys_user` VALUES ('X','wql','wql','王青亮','192.168.1.4',NULL,'','N','N','BJ','北京',NULL);
INSERT INTO `sys_user` VALUES ('X','hll','lily','胡伶俐','192.168.1.5',NULL,'','N','N','SZ','深圳','admin');
INSERT INTO `sys_user` VALUES ('X','lec','','廖尔崇','192.168.1.6',NULL,'','N','N','SJZ','石家庄',NULL);
INSERT INTO `sys_user` VALUES ('X','sxq','','商小奇','192.168.1.7',NULL,'','N','N','BJ','北京',NULL);
/*!40000 ALTER TABLE `sys_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `user_auth_v`
--

DROP TABLE IF EXISTS `user_auth_v`;
/*!50001 DROP VIEW IF EXISTS `user_auth_v`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `user_auth_v` (
  `user_id` tinyint NOT NULL,
  `user_name` tinyint NOT NULL,
  `menu_code` tinyint NOT NULL,
  `menu_name` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `user_menu_v`
--

DROP TABLE IF EXISTS `user_menu_v`;
/*!50001 DROP VIEW IF EXISTS `user_menu_v`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `user_menu_v` (
  `sys_code` tinyint NOT NULL,
  `menu_code` tinyint NOT NULL,
  `menu_father` tinyint NOT NULL,
  `menu_level` tinyint NOT NULL,
  `leaf_flag` tinyint NOT NULL,
  `menu_name` tinyint NOT NULL,
  `prog_url` tinyint NOT NULL,
  `menu_index` tinyint NOT NULL,
  `user_id` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `user_id` varchar(30) NOT NULL DEFAULT '',
  `role_code` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`user_id`,`role_code`)
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES ('cameran','admin');
INSERT INTO `user_role` VALUES ('cameran','role1 ');
INSERT INTO `user_role` VALUES ('cameran','role2 ');
INSERT INTO `user_role` VALUES ('ddl','role2');
INSERT INTO `user_role` VALUES ('hll','admin');
INSERT INTO `user_role` VALUES ('hll','role1');
INSERT INTO `user_role` VALUES ('hll','role2');
INSERT INTO `user_role` VALUES ('lec','role1');
INSERT INTO `user_role` VALUES ('sht','admin ');
INSERT INTO `user_role` VALUES ('sxq','role1');
INSERT INTO `user_role` VALUES ('sxq','role2');
INSERT INTO `user_role` VALUES ('wql','role1');
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `user_role_menu_v`
--

DROP TABLE IF EXISTS `user_role_menu_v`;
/*!50001 DROP VIEW IF EXISTS `user_role_menu_v`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `user_role_menu_v` (
  `sys_code` tinyint NOT NULL,
  `menu_code` tinyint NOT NULL,
  `menu_father` tinyint NOT NULL,
  `menu_level` tinyint NOT NULL,
  `leaf_flag` tinyint NOT NULL,
  `menu_name` tinyint NOT NULL,
  `prog_url` tinyint NOT NULL,
  `menu_index` tinyint NOT NULL,
  `user_id` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `user_role_sys_v`
--

DROP TABLE IF EXISTS `user_role_sys_v`;
/*!50001 DROP VIEW IF EXISTS `user_role_sys_v`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `user_role_sys_v` (
  `user_id` tinyint NOT NULL,
  `role_code` tinyint NOT NULL,
  `role_name` tinyint NOT NULL,
  `menu_code` tinyint NOT NULL,
  `menu_name` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `user_role_v`
--

DROP TABLE IF EXISTS `user_role_v`;
/*!50001 DROP VIEW IF EXISTS `user_role_v`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `user_role_v` (
  `user_id` tinyint NOT NULL,
  `role_code` tinyint NOT NULL,
  `role_name` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'natservice'
--

--
-- Final view structure for view `user_auth_v`
--

/*!50001 DROP TABLE IF EXISTS `user_auth_v`*/;
/*!50001 DROP VIEW IF EXISTS `user_auth_v`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `user_auth_v` AS select distinct `b`.`user_id` AS `user_id`,`b`.`user_name` AS `user_name`,`c`.`menu_code` AS `menu_code`,`c`.`menu_name` AS `menu_name` from (((`user_role` `a` join `sys_user` `b`) join `role_auth` `d`) join `menu` `c`) where ((`a`.`user_id` = `b`.`user_id`) and (`a`.`role_code` = `d`.`role_code`) and (`d`.`menu_code` = `c`.`menu_code`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `user_menu_v`
--

/*!50001 DROP TABLE IF EXISTS `user_menu_v`*/;
/*!50001 DROP VIEW IF EXISTS `user_menu_v`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = gbk */;
/*!50001 SET character_set_results     = gbk */;
/*!50001 SET collation_connection      = gbk_chinese_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `user_menu_v` AS select `a`.`sys_code` AS `sys_code`,`a`.`menu_code` AS `menu_code`,`a`.`menu_father` AS `menu_father`,`a`.`menu_level` AS `menu_level`,`a`.`leaf_flag` AS `leaf_flag`,`a`.`menu_name` AS `menu_name`,`a`.`prog_url` AS `prog_url`,`a`.`menu_index` AS `menu_index`,`c`.`user_id` AS `user_id` from ((`menu` `a` join `role_auth` `b`) join `user_role` `c`) where ((`a`.`menu_code` = `b`.`menu_code`) and (`b`.`role_code` = `c`.`role_code`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `user_role_menu_v`
--

/*!50001 DROP TABLE IF EXISTS `user_role_menu_v`*/;
/*!50001 DROP VIEW IF EXISTS `user_role_menu_v`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `user_role_menu_v` AS select `a`.`sys_code` AS `sys_code`,`a`.`menu_code` AS `menu_code`,`a`.`menu_father` AS `menu_father`,`a`.`menu_level` AS `menu_level`,`a`.`leaf_flag` AS `leaf_flag`,`a`.`menu_name` AS `menu_name`,`a`.`prog_url` AS `prog_url`,`a`.`menu_index` AS `menu_index`,`c`.`user_id` AS `user_id` from ((`menu` `a` join `role_auth` `b`) join `sys_user` `c`) where ((`a`.`menu_code` = `b`.`menu_code`) and (`b`.`role_code` = `c`.`current_role`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `user_role_sys_v`
--

/*!50001 DROP TABLE IF EXISTS `user_role_sys_v`*/;
/*!50001 DROP VIEW IF EXISTS `user_role_sys_v`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `user_role_sys_v` AS select `a`.`user_id` AS `user_id`,`a`.`role_code` AS `role_code`,`b`.`role_name` AS `role_name`,`c`.`menu_code` AS `menu_code`,`c`.`menu_name` AS `menu_name` from (((`user_role` `a` join `role` `b`) join `role_auth` `d`) join `menu` `c`) where (((`a`.`role_code` = `b`.`role_code`) = `d`.`role_code`) and (`d`.`menu_code` = `c`.`menu_code`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `user_role_v`
--

/*!50001 DROP TABLE IF EXISTS `user_role_v`*/;
/*!50001 DROP VIEW IF EXISTS `user_role_v`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = gbk */;
/*!50001 SET character_set_results     = gbk */;
/*!50001 SET collation_connection      = gbk_chinese_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `user_role_v` AS select `a`.`user_id` AS `user_id`,`a`.`role_code` AS `role_code`,`b`.`role_name` AS `role_name` from (`user_role` `a` join `role` `b`) where (`a`.`role_code` = `b`.`role_code`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-06-16 16:28:32
