-- MySQL dump 10.13  Distrib 5.5.31, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: inv
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
-- Table structure for table `inv_bill_detail`
--

DROP TABLE IF EXISTS `inv_bill_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_bill_detail` (
  `Bill_num` char(20) NOT NULL DEFAULT '',
  `Serial_num` char(10) NOT NULL DEFAULT '',
  `Item_code` char(10) NOT NULL DEFAULT '',
  `Item_name` char(20) NOT NULL DEFAULT '',
  `Item_type` char(20) NOT NULL DEFAULT '',
  `Item_unit` char(20) NOT NULL DEFAULT '',
  `Item_spec` char(20) NOT NULL DEFAULT '',
  `Item_texture` char(20) NOT NULL DEFAULT '',
  `Item_gb` char(20) NOT NULL DEFAULT '',
  `Item_batch` char(20) NOT NULL DEFAULT '',
  `Item_qty` decimal(10,4) NOT NULL DEFAULT '0.0000',
  `Item_price` decimal(10,6) NOT NULL DEFAULT '0.000000',
  `Item_sum` decimal(10,2) NOT NULL DEFAULT '0.00',
  `Item_quality_degree` char(10) DEFAULT NULL,
  `Item_IO_type` char(10) DEFAULT NULL,
  `file_path` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Bill_num`,`Serial_num`)
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_bill_detail`
--

LOCK TABLES `inv_bill_detail` WRITE;
/*!40000 ALTER TABLE `inv_bill_detail` DISABLE KEYS */;
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200605200001','10','010000','螺母','原料','个','adljdf','金属','12','1213',10.0000,12.000000,120.00,'O','I',NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200605200001','38','010000','螺母','原料','个','adljdf','金属','12','1213',10.0000,12.000000,120.00,'O','I',NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200605200001','39','010001','天线','原料','根','xx-er','金属','12','1',12.0000,1.000000,12.00,'12','O',NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200605200001','4','010000','螺母','原料','个','adljdf','金属','12','1213',10.0000,12.000000,120.00,'1','I',NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200802100001','1','010001','天线','原料','根','xx-er','金属','','',12.0000,12.000000,144.00,'',NULL,NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200802100001','2','010001','天线','原料','根','xx-er','金属','','',10.0000,10.000000,100.00,'',NULL,NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200802100002','1','010001','天线','原料','根','xx-er','金属','','',1.0000,1.000000,1.00,'',NULL,'/nat/panther/pub/upfile/ibmrd3102P.pdf');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200802100002','2','010001','天线','原料','根','xx-er','金属','','',1.0000,1.000000,1.00,'',NULL,'');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200802100003','1','010001','天线','原料','根','xx-er','金属','','1213123',1.0000,1.000000,1.00,'',NULL,'/nat/panther/pub/upfile/malnatij_bachproj.pdf');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200802100003','2','010002','螺旋桨','原料','个','ooj','塑料','','444',222.0000,222.000000,222.00,'',NULL,NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200802120001','1','010001','天线','原料','根','xx-er','金属','','1',1.0000,1.000000,1.00,'',NULL,NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200802120001','2','010001','天线','原料','根','xx-er','金属','','2',2.0000,2.000000,2.00,'',NULL,NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200802120001','3','010001','天线','原料','根','xx-er','金属','','3',3.0000,3.000000,3.00,'',NULL,NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200805310001','1','010001','天线','原料','根','xx-er','金属','','1',1.0000,1.000000,1.00,'',NULL,NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200805310001','2','010001','天线','原料','根','xx-er','金属','','',1.0000,1.000000,1.00,'',NULL,'');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200806170001','1','010001','天线','原料','根','xx-er','金属','','',1.0000,1.000000,1.00,'',NULL,'');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200806240001','1','010000','螺母','原料','个','adljdf','金属','','',1.0000,1.000000,1.00,'',NULL,'');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200806240002','1','010001','天线','原料','根','xx-er','金属','','',1.0000,1.000000,1.00,'',NULL,'/nat/panther/pub/upfile/4bb7859401038qmc.jpg');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200806250001','1','010000','螺母','原料','个','adljdf','金属','','1',1.0000,1.000000,1.00,'',NULL,'');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200806250001','2','010002','螺旋桨','原料','个','ooj','塑料','','1',1.0000,1.000000,1.00,'',NULL,'');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200806250001','3','010000','螺母','原料','个','adljdf','金属','','',3.0000,1.000000,3.00,'',NULL,'');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200807290001','1','010000','螺母','原料','个','adljdf','金属','','1',1.0000,1.000000,1.00,'',NULL,'');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200807290002','1','010002','螺旋桨','原料','个','ooj','塑料','','1',1.0000,23.000000,23.00,'',NULL,'');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200808060001','1','010000','螺母','原料','个','adljdf','金属','','',1.0000,1.000000,1.00,'',NULL,' ');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200808060002','1','010000','螺母','原料','个','adljdf','金属','','1',1.0000,1.000000,1.00,'',NULL,NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200808060003','1','010000','螺母','原料','个','adljdf','金属','','',1.0000,1.000000,1.00,'',NULL,NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200808060004','1','010000','螺母','原料','个','adljdf','金属','','1',1.0000,1.000000,1.00,'',NULL,NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200808060004','2','010002','螺旋桨','原料','个','ooj','塑料','','1',1.0000,1.000000,1.00,'',NULL,NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200808060005','1','010001','天线','原料','根','xx-er','金属','','1',1.0000,1.000000,1.00,'',NULL,NULL);
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200808060006','1','010000','螺母','原料','个','adljdf','金属','','',1.0000,1.000000,1.00,'',NULL,' ');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200808060006','2','010002','螺旋桨','原料','个','ooj','塑料','','',1.0000,1.000000,1.00,'',NULL,' ');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200808100002','1','010000','螺母','原料','个','adljdf','金属','','',1.0000,1.000000,1.00,'',NULL,' ');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW00HLL0200808100003','1','010002','螺旋桨','原料','个','ooj','塑料','','',1.0000,2.000000,2.00,'',NULL,' ');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW000201406140000001','','','','','','','','','',0.0000,0.000000,0.00,'','','');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW000201406150000001','','','','','','','','','',0.0000,0.000000,0.00,'','','');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW000201607150000001','','','','','','','','','',0.0000,0.000000,0.00,'','','');
INSERT INTO `inv_bill_detail` (`Bill_num`, `Serial_num`, `Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_batch`, `Item_qty`, `Item_price`, `Item_sum`, `Item_quality_degree`, `Item_IO_type`, `file_path`) VALUES ('IW000203607150000001','','','','','','','','','',0.0000,0.000000,0.00,'','','');
/*!40000 ALTER TABLE `inv_bill_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_bill_main`
--

DROP TABLE IF EXISTS `inv_bill_main`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_bill_main` (
  `Bill_num` varchar(20) NOT NULL DEFAULT '',
  `Make_date` date NOT NULL DEFAULT '1900-01-01',
  `Ware_id` varchar(10) NOT NULL DEFAULT '',
  `Ware_name` varchar(20) NOT NULL DEFAULT '',
  `Bin_id` varchar(10) NOT NULL DEFAULT '',
  `Bin_name` varchar(20) NOT NULL DEFAULT '',
  `Ware_empid` varchar(10) NOT NULL DEFAULT '',
  `Ware_empname` varchar(20) NOT NULL DEFAULT '',
  `Make_empid` varchar(10) DEFAULT NULL,
  `Make_empname` varchar(20) DEFAULT NULL,
  `Audit_empid` varchar(10) DEFAULT NULL,
  `Audit_empname` varchar(20) DEFAULT NULL,
  `Post_empid` varchar(10) DEFAULT NULL,
  `Post_empname` varchar(20) DEFAULT NULL,
  `Sup_name` varchar(20) DEFAULT NULL,
  `Apply_deptid` varchar(10) DEFAULT NULL,
  `Apply_deptname` varchar(20) DEFAULT NULL,
  `Bill_audit_state` char(1) DEFAULT NULL,
  `Bill_state` char(1) DEFAULT NULL,
  `IO_type` char(1) NOT NULL DEFAULT 'A',
  `Checkflow_id` varchar(20) DEFAULT NULL,
  `Check_notes` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Bill_num`)
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_bill_main`
--

LOCK TABLES `inv_bill_main` WRITE;
/*!40000 ALTER TABLE `inv_bill_main` DISABLE KEYS */;
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200605200001','2007-05-22','WM03','三号原料库','','','hll','胡伶俐','ddl','董德亮','hll_hll','胡伶俐_胡伶俐',NULL,NULL,'哈尔滨电机厂',NULL,NULL,NULL,'P','I','inv_bill_in_01',NULL);
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200605200002','2007-05-15','WM01','','7',' 12','ddl','董德亮','ddl','董德亮','hll_hll','胡伶俐_胡伶俐',NULL,NULL,'哈尔滨电机厂',NULL,NULL,NULL,'R','I','inv_bill_in_01','aaa');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200605200003','2007-05-10','WM01','一号原料库','8',' 0','ddl','董德亮','hll','胡伶俐','hll','胡伶俐',NULL,NULL,'哈尔滨电机厂',NULL,NULL,'的','R','O','d','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200802100001','2008-02-10','WM02','二号原料','0','0','cameran','刘旭东','cameran','刘旭东','hll_hll','胡伶俐_胡伶俐','hll','null','哈尔滨电机厂',NULL,NULL,NULL,'F','I','inv_bill_in_01','大大大');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200802100002','2008-02-10','WM01','一号原料库','2','2','cameran','刘旭东','cameran','刘旭东',NULL,NULL,NULL,NULL,'哈尔滨电机厂',NULL,NULL,NULL,'R','I','inv_bill_in_01',NULL);
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200802100003','2008-02-10','WM02','二号原料','2','2','cameran','刘旭东','cameran','刘旭东','hll','胡伶俐','hll','null','哈尔滨电机厂',NULL,NULL,NULL,'C','I','inv_bill_in_01','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200802120001','2008-02-12','WM01','一号原料库','0','0','cameran','刘旭东','cameran','刘旭东','hll','胡伶俐','hll','null','哈尔滨电机厂',NULL,NULL,NULL,'F','I','inv_bill_in_01','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200805310001','2008-05-31','WM02','二号原料','0','0','cameran','刘旭东','cameran','刘旭东','hll','胡伶俐','hll','null','哈尔滨电机厂',NULL,NULL,NULL,'C','I','inv_bill_in_01','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200806170001','2008-06-17','WM02','二号原料','0','0','cameran','刘旭东','cameran','刘旭东','hll','胡伶俐','hll','null','',NULL,NULL,NULL,'C','I','inv_bill_in_01','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200806220001','2008-06-22','WM01','一号原料库','0','0','cameran','刘旭东','cameran','刘旭东',NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,'A','I','inv_bill_in_01',NULL);
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200806240001','2008-06-24','WM01','一号原料库','0','0','cameran','刘旭东','cameran','刘旭东','hll','胡伶俐','hll','null','',NULL,NULL,NULL,'C','I','inv_bill_in_01','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200806240002','2008-06-24','WM01','一号原料库','0','0','cameran','刘旭东','cameran','刘旭东','hll_hll','胡伶俐_胡伶俐',NULL,NULL,'',NULL,NULL,NULL,'P','I','inv_bill_in_01','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200806250001','2008-06-25','WM01','一号原料库','0','0','cameran','刘旭东','cameran','刘旭东','hll','胡伶俐','hll','null','',NULL,NULL,NULL,'C','I','inv_bill_in_01','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200806250002','2008-06-25','WM01','一号原料库','0','0','cameran','刘旭东','cameran','刘旭东',NULL,NULL,NULL,NULL,'哈尔滨电机厂',NULL,NULL,NULL,'A','I','inv_bill_in_01',NULL);
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200807290001','2008-07-29','WM01','一号原料库','0','0','cameran','刘旭东','cameran','刘旭东','hll','胡伶俐','hll','null','',NULL,NULL,NULL,'C','I','inv_bill_in_01','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200807290002','2008-07-29','WM01','一号原料库','0','0','cameran','刘旭东','hll','胡伶俐','hll','胡伶俐','hll','null','哈尔滨电机厂',NULL,NULL,NULL,'C','I','inv_bill_in_01','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200808060001','2008-08-06','WM01','一号原料库','0','0','cameran','刘旭东','hll','胡伶俐','hll','胡伶俐','hll','null','哈尔滨电机厂',NULL,NULL,NULL,'C','I','inv_bill_in_01','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200808060002','2008-08-06','WM01','一号原料库','','','hll','胡伶俐','hll','胡伶俐','hll','胡伶俐',NULL,NULL,'哈尔滨电机厂',NULL,NULL,NULL,'P','O','inv_bill_out_01','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200808060003','2008-08-06','WM01','一号原料库','','','hll','胡伶俐','hll','胡伶俐','hll','胡伶俐',NULL,NULL,'',NULL,NULL,NULL,'P','O','inv_bill_out_01','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200808060004','2008-08-06','WM01','一号原料库','','','hll','胡伶俐','hll','胡伶俐',NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,'W','O','inv_bill_out_01',NULL);
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200808060005','2008-08-06','WM01','一号原料库','','','hll','胡伶俐','hll','胡伶俐',NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,'A','O','inv_bill_out_01',NULL);
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200808060006','2008-08-06','WM01','一号原料库','0','0','cameran','刘旭东','hll','胡伶俐','hll','胡伶俐',NULL,NULL,'哈尔滨电机厂',NULL,NULL,NULL,'','I','inv_bill_in_02','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200808100001','2008-08-10','WM01','一号原料库','0','0','cameran','刘旭东','hll','胡伶俐',NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,'A','I','inv_bill_in_01',NULL);
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200808100002','2008-08-10','WM01','一号原料库','0','0','cameran','刘旭东','hll','胡伶俐','hll','胡伶俐',NULL,NULL,'',NULL,NULL,NULL,'P','I','inv_bill_in_01','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW00HLL0200808100003','2008-08-10','WM01','一号原料库','0','0','cameran','刘旭东','hll','胡伶俐',NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,'A','I','inv_bill_in_01',NULL);
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IWHLL020060518000001','2007-05-15','WM01','3','0','','ddl','董德亮','','胡伶俐','_hll_hll_h','_胡伶俐_胡伶俐_胡伶俐_胡伶俐_胡伶俐','hll','胡伶俐','哈尔滨电机厂',NULL,NULL,NULL,'C','I','inv_bill_in_01',NULL);
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IWHLL020060519000001','2007-05-15','WM01','2','0',' 0','hll','胡伶俐','hll','胡伶俐','hll_hll','胡伶俐_胡伶俐','hll','胡伶俐','哈尔滨电机厂',NULL,NULL,NULL,'P','O','inv_bill_out_01',NULL);
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW000203607150000001','2022-01-01','WM03','三号原料库','123','strange bin','22','','11','','333','','1','','131','','','','R','','','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW000201406130000001','2014-06-12','WM02','二号原料','asfd','','','','','','','','','','','','','','','','','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW000201406030000001','0000-00-00','','','','','','','','','','','','','','','','','','','','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('','0000-00-00','','','','','','','','','','','','','','','','','','','','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW000201406140000001','0000-00-00','','','','','','','','','','','','','','','','','R','','','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW000201406150000001','2014-06-15','WM02','二号原料','8','ggggg','2','','32','','23','','3','','3','43','','','R','','','');
INSERT INTO `inv_bill_main` (`Bill_num`, `Make_date`, `Ware_id`, `Ware_name`, `Bin_id`, `Bin_name`, `Ware_empid`, `Ware_empname`, `Make_empid`, `Make_empname`, `Audit_empid`, `Audit_empname`, `Post_empid`, `Post_empname`, `Sup_name`, `Apply_deptid`, `Apply_deptname`, `Bill_audit_state`, `Bill_state`, `IO_type`, `Checkflow_id`, `Check_notes`) VALUES ('IW000201607150000001','2012-01-01','WM02','二号原料','11','123123123a','22','','22','','33','','33','','33','11','','','E','','','');
/*!40000 ALTER TABLE `inv_bill_main` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_bin`
--

DROP TABLE IF EXISTS `inv_bin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_bin` (
  `Ware_id` varchar(10) NOT NULL DEFAULT '',
  `Bin_id` varchar(10) NOT NULL DEFAULT '',
  `Bin_name` varchar(20) NOT NULL DEFAULT '',
  `Bin_desc` varchar(30) NOT NULL DEFAULT '',
  `Note` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Ware_id`,`Bin_id`)
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_bin`
--

LOCK TABLES `inv_bin` WRITE;
/*!40000 ALTER TABLE `inv_bin` DISABLE KEYS */;
INSERT INTO `inv_bin` (`Ware_id`, `Bin_id`, `Bin_name`, `Bin_desc`, `Note`) VALUES ('WM01','0','0','','');
INSERT INTO `inv_bin` (`Ware_id`, `Bin_id`, `Bin_name`, `Bin_desc`, `Note`) VALUES ('WM01','1','1','','');
INSERT INTO `inv_bin` (`Ware_id`, `Bin_id`, `Bin_name`, `Bin_desc`, `Note`) VALUES ('WM01','2','2','','');
/*!40000 ALTER TABLE `inv_bin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_department`
--

DROP TABLE IF EXISTS `inv_department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_department` (
  `dept_id` char(30) NOT NULL DEFAULT 'default',
  `dept_name` char(20) NOT NULL DEFAULT '',
  `dept_father` char(30) DEFAULT NULL,
  `dept_flag` char(5) DEFAULT 'N',
  `dept_admin_id` char(30) DEFAULT NULL,
  `dept_stafflist_id` char(30) DEFAULT NULL,
  `dept_begin_date` date NOT NULL DEFAULT '1900-01-01',
  PRIMARY KEY (`dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_department`
--

LOCK TABLES `inv_department` WRITE;
/*!40000 ALTER TABLE `inv_department` DISABLE KEYS */;
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('1','管理部门','root','N','12',NULL,'1900-01-01');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('11','财政管理部门','1','N','12','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('111','收入管理部门','11','Y','12','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('112','支出管理部门','1','Y','12','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('113','预算管理部门','11','Y','12','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('12','行政管理部门','1','N','19','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('121','法务管理部门','12','Y','','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('122','票务管理部门','12','Y','','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('13','商务管理部门','1','N','16','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('131','策划管理部门','13','Y','','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('132','销售管理部门','13','N','16','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('1321','销售地区管理部门','132','Y','16','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('1322','销售人员直属管理部门','132','Y','5','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('1323','销售地区安排部门','132','Y','16','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('14','人事管理部门','1','N','12','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('15','活动管理部门','1','N','11','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('151','节假日活动部门','15','Y','11','','0000-00-00');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('2','执行部门','root','N','13',NULL,'1900-01-01');
INSERT INTO `inv_department` (`dept_id`, `dept_name`, `dept_father`, `dept_flag`, `dept_admin_id`, `dept_stafflist_id`, `dept_begin_date`) VALUES ('root','部门管理','','N','11',NULL,'1900-01-01');
/*!40000 ALTER TABLE `inv_department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_item`
--

DROP TABLE IF EXISTS `inv_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_item` (
  `Item_code` varchar(10) NOT NULL DEFAULT '',
  `Item_name` varchar(20) NOT NULL DEFAULT '',
  `Item_type` varchar(20) NOT NULL DEFAULT '',
  `Item_unit` varchar(20) NOT NULL DEFAULT '',
  `Item_spec` varchar(20) NOT NULL DEFAULT '',
  `Item_texture` varchar(20) NOT NULL DEFAULT '',
  `Item_gb` varchar(20) NOT NULL DEFAULT '',
  `Item_plan_price` decimal(10,6) NOT NULL DEFAULT '0.000000',
  PRIMARY KEY (`Item_code`)
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_item`
--

LOCK TABLES `inv_item` WRITE;
/*!40000 ALTER TABLE `inv_item` DISABLE KEYS */;
INSERT INTO `inv_item` (`Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_plan_price`) VALUES (' 010000','螺母','原料','个',' adljdf','金属',' 1201300',0.000000);
INSERT INTO `inv_item` (`Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_plan_price`) VALUES ('010001','天线','原料','根','xx-er','金属','21025011',0.000000);
INSERT INTO `inv_item` (`Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_plan_price`) VALUES ('010002','螺旋桨','原料','个','ooj','塑料','24510361',0.000000);
INSERT INTO `inv_item` (`Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_plan_price`) VALUES ('1','1','1','1','1','111','12',0.000000);
INSERT INTO `inv_item` (`Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_plan_price`) VALUES ('2','2','1','1','1','111','12',0.000000);
INSERT INTO `inv_item` (`Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_plan_price`) VALUES ('3','3','1','3','3','311','32',0.000000);
INSERT INTO `inv_item` (`Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_plan_price`) VALUES ('4','4','4','4','4','41','4',0.000000);
INSERT INTO `inv_item` (`Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_plan_price`) VALUES ('5','5','4','5','5','51','5',0.000000);
INSERT INTO `inv_item` (`Item_code`, `Item_name`, `Item_type`, `Item_unit`, `Item_spec`, `Item_texture`, `Item_gb`, `Item_plan_price`) VALUES ('6','6','4','6','5','61','6',0.000000);
/*!40000 ALTER TABLE `inv_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_period`
--

DROP TABLE IF EXISTS `inv_period`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_period` (
  `Period_id` varchar(10) NOT NULL DEFAULT '',
  `Begin_date` date NOT NULL DEFAULT '0000-00-00',
  `End_date` date NOT NULL DEFAULT '0000-00-00',
  `Flag` char(1) NOT NULL DEFAULT '',
  PRIMARY KEY (`Period_id`)
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_period`
--

LOCK TABLES `inv_period` WRITE;
/*!40000 ALTER TABLE `inv_period` DISABLE KEYS */;
INSERT INTO `inv_period` (`Period_id`, `Begin_date`, `End_date`, `Flag`) VALUES (' 200605','2006-05-01','2006-05-31','N');
INSERT INTO `inv_period` (`Period_id`, `Begin_date`, `End_date`, `Flag`) VALUES (' 200608','2006-08-01','2006-08-31','N');
INSERT INTO `inv_period` (`Period_id`, `Begin_date`, `End_date`, `Flag`) VALUES ('200603','2006-02-03','2006-02-28','N');
INSERT INTO `inv_period` (`Period_id`, `Begin_date`, `End_date`, `Flag`) VALUES ('200806','2008-06-18','2008-06-28','N');
INSERT INTO `inv_period` (`Period_id`, `Begin_date`, `End_date`, `Flag`) VALUES ('200807','2008-07-01','2008-07-31','N');
INSERT INTO `inv_period` (`Period_id`, `Begin_date`, `End_date`, `Flag`) VALUES ('200808','2008-08-01','2008-08-31','N');
INSERT INTO `inv_period` (`Period_id`, `Begin_date`, `End_date`, `Flag`) VALUES ('200809','2008-09-01','2008-09-30','N');
INSERT INTO `inv_period` (`Period_id`, `Begin_date`, `End_date`, `Flag`) VALUES ('200810','2008-10-01','2008-10-31','N');
/*!40000 ALTER TABLE `inv_period` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_supplier`
--

DROP TABLE IF EXISTS `inv_supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_supplier` (
  `Sup_code` varchar(10) NOT NULL DEFAULT '',
  `Sup_name` varchar(20) NOT NULL DEFAULT '',
  `Sup_address` varchar(50) NOT NULL DEFAULT '',
  `Post_code` varchar(10) NOT NULL DEFAULT '',
  `Linkman_name` varchar(20) NOT NULL DEFAULT '',
  `Sup_tel` varchar(20) NOT NULL DEFAULT '',
  `Sup_tax` varchar(20) NOT NULL DEFAULT '',
  `Sup_type` varchar(20) NOT NULL DEFAULT '',
  `Sup_legal_man` varchar(20) NOT NULL DEFAULT '',
  `Sup_bank_name` varchar(20) NOT NULL DEFAULT '',
  `Sup_bank_account` varchar(20) NOT NULL DEFAULT '',
  `Notes` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Sup_code`)
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_supplier`
--

LOCK TABLES `inv_supplier` WRITE;
/*!40000 ALTER TABLE `inv_supplier` DISABLE KEYS */;
INSERT INTO `inv_supplier` (`Sup_code`, `Sup_name`, `Sup_address`, `Post_code`, `Linkman_name`, `Sup_tel`, `Sup_tax`, `Sup_type`, `Sup_legal_man`, `Sup_bank_name`, `Sup_bank_account`, `Notes`) VALUES ('S01','哈尔滨电机厂','哈尔滨道外24号','150001','王玉','52146254','0451-52146255','原料供应','耿宁','工行','12345678998745',' ');
INSERT INTO `inv_supplier` (`Sup_code`, `Sup_name`, `Sup_address`, `Post_code`, `Linkman_name`, `Sup_tel`, `Sup_tax`, `Sup_type`, `Sup_legal_man`, `Sup_bank_name`, `Sup_bank_account`, `Notes`) VALUES ('S02','哈尔滨空调机厂','哈尔滨道里24号','150001','312','86413750','0451-52146255','配件供应','张三丰','建行','1230987654321','');
/*!40000 ALTER TABLE `inv_supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_warehouse`
--

DROP TABLE IF EXISTS `inv_warehouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_warehouse` (
  `Ware_id` varchar(10) NOT NULL DEFAULT '',
  `Ware_name` varchar(20) NOT NULL DEFAULT '',
  `Ware_address` varchar(30) NOT NULL DEFAULT '',
  `Item_type` char(1) NOT NULL DEFAULT '',
  `Admin_mode` char(1) NOT NULL DEFAULT '',
  `Price_mode` char(1) NOT NULL DEFAULT '',
  `Curr_period` varchar(10) NOT NULL DEFAULT '',
  `Batch_flag` char(1) NOT NULL DEFAULT '',
  `Inv_emp_code` varchar(10) NOT NULL DEFAULT '',
  `Inv_emp_name` varchar(20) NOT NULL DEFAULT '',
  `Note` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Ware_id`)
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_warehouse`
--

LOCK TABLES `inv_warehouse` WRITE;
/*!40000 ALTER TABLE `inv_warehouse` DISABLE KEYS */;
INSERT INTO `inv_warehouse` (`Ware_id`, `Ware_name`, `Ware_address`, `Item_type`, `Admin_mode`, `Price_mode`, `Curr_period`, `Batch_flag`, `Inv_emp_code`, `Inv_emp_name`, `Note`) VALUES ('WM01','一号原料库','哈尔滨市西大直街92号','Y','A','A','2014-06-16','Y','24','廖乘民',' ');
INSERT INTO `inv_warehouse` (`Ware_id`, `Ware_name`, `Ware_address`, `Item_type`, `Admin_mode`, `Price_mode`, `Curr_period`, `Batch_flag`, `Inv_emp_code`, `Inv_emp_name`, `Note`) VALUES ('WM02','二号原料','哈尔滨市西大直街92号','B','W','A','2014-06-26','Y','','','');
INSERT INTO `inv_warehouse` (`Ware_id`, `Ware_name`, `Ware_address`, `Item_type`, `Admin_mode`, `Price_mode`, `Curr_period`, `Batch_flag`, `Inv_emp_code`, `Inv_emp_name`, `Note`) VALUES ('WM03','三号原料库','哈尔滨市西大直街92号','B','B','B','2014-06-30','Y','','','');
/*!40000 ALTER TABLE `inv_warehouse` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('INV','01','基础数据',1,1,'root','','N','N','');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('INV','0101','核算期定义',2,1,'01','inv0101.do','Y','N','');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('INV','0102','仓库定义',2,2,'01','inv0102.do','Y','N','');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('INV','0103','物料属性定义',2,3,'01','inv0103.do','Y','N','');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('INV','0104','供应商定义',2,4,'01','inv0104.do','Y','N','');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('INV','03','采购入库',1,3,'root','','N','N','');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('INV','0301','录入入库单',2,1,'03','inv0301.do','Y','Y','select count(*) from inv.inv_bill_main');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('INV','0302','入库单审批',2,2,'03','inv0302.do','Y','N','');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('INV','0303','入库单过帐',2,3,'03','inv0303.do','Y','N','');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('INV','0304','入库单查询',2,4,'03','inv0304.do','Y','N',' ');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('SYS','99','系统管理',1,99,'root','','N','N','');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('SYS','9901','菜单定义',2,3,'99','menuDef.do','Y','N','');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('SYS','9902','角色定义',2,2,'99','roleDef.do','Y','N','');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('SYS','9903','用户定义',2,1,'99','userDef.do','Y','N','');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('SYS','9904','系统授权',2,4,'99','roleAuth.do','Y','N','');
INSERT INTO `menu` (`sys_code`, `menu_code`, `menu_name`, `menu_level`, `menu_index`, `menu_father`, `prog_url`, `leaf_flag`, `task_flag`, `count_task_sql`) VALUES ('SYS','root','企业智能计算中心',0,1,'','','N','N','');
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
INSERT INTO `role` (`role_code`, `role_name`) VALUES ('admin','管理员');
INSERT INTO `role` (`role_code`, `role_name`) VALUES ('role1','角色1');
INSERT INTO `role` (`role_code`, `role_name`) VALUES ('role2','角色2');
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
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','01');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','0101');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','0102');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','0103');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','0104');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','03');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','0301');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','0302');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','0303');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','0304');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','99');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','9901');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','9902');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','9903');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','9904');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('admin','root');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('role1','01');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('role1','0103');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('role1','0104');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('role1','0105');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('role2','99');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('role2','9901');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('role2','9902');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('role2','9903');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('role2','9904');
INSERT INTO `role_auth` (`role_code`, `menu_code`) VALUES ('role2','root');
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
INSERT INTO `sfc_bom` (`proj_code`, `parent_code`, `child_code`, `use_num`, `lot_size`, `lead_time`, `offset_days`, `ma_flag`, `ma_note`) VALUES ('F06-123','B1','L1',2.0000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` (`proj_code`, `parent_code`, `child_code`, `use_num`, `lot_size`, `lead_time`, `offset_days`, `ma_flag`, `ma_note`) VALUES ('F06-123','B1','L2',1.0000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` (`proj_code`, `parent_code`, `child_code`, `use_num`, `lot_size`, `lead_time`, `offset_days`, `ma_flag`, `ma_note`) VALUES ('F06-123','B2','C3',5.0000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` (`proj_code`, `parent_code`, `child_code`, `use_num`, `lot_size`, `lead_time`, `offset_days`, `ma_flag`, `ma_note`) VALUES ('F06-123','B2','L1',1.0000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` (`proj_code`, `parent_code`, `child_code`, `use_num`, `lot_size`, `lead_time`, `offset_days`, `ma_flag`, `ma_note`) VALUES ('F06-123','L1','C1',2.5000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` (`proj_code`, `parent_code`, `child_code`, `use_num`, `lot_size`, `lead_time`, `offset_days`, `ma_flag`, `ma_note`) VALUES ('F06-123','L2','C2',2.5000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` (`proj_code`, `parent_code`, `child_code`, `use_num`, `lot_size`, `lead_time`, `offset_days`, `ma_flag`, `ma_note`) VALUES ('F06-123','P1','B1',2.0000,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `sfc_bom` (`proj_code`, `parent_code`, `child_code`, `use_num`, `lot_size`, `lead_time`, `offset_days`, `ma_flag`, `ma_note`) VALUES ('F06-123','P1','B2',1.0000,NULL,NULL,NULL,NULL,NULL);
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
INSERT INTO `sys_user` (`group_id`, `user_id`, `user_pwd`, `user_name`, `user_ip`, `user_mac`, `user_note`, `valid_flag`, `exceed_flag`, `dept_code`, `dept_name`, `current_role`) VALUES ('X','sht','','石海涛','',NULL,' ','N','N','HIT','哈工大','admin');
INSERT INTO `sys_user` (`group_id`, `user_id`, `user_pwd`, `user_name`, `user_ip`, `user_mac`, `user_note`, `valid_flag`, `exceed_flag`, `dept_code`, `dept_name`, `current_role`) VALUES ('X','cameran','cameran','刘旭东','192.168.1.2','192.168.1.2','','N','N','HIT','哈工大','role1');
INSERT INTO `sys_user` (`group_id`, `user_id`, `user_pwd`, `user_name`, `user_ip`, `user_mac`, `user_note`, `valid_flag`, `exceed_flag`, `dept_code`, `dept_name`, `current_role`) VALUES ('X','ddl','ddl','董德亮','192.168.1.3',NULL,'','N','N','XA','西安',NULL);
INSERT INTO `sys_user` (`group_id`, `user_id`, `user_pwd`, `user_name`, `user_ip`, `user_mac`, `user_note`, `valid_flag`, `exceed_flag`, `dept_code`, `dept_name`, `current_role`) VALUES ('X','wql','wql','王青亮','192.168.1.4',NULL,'','N','N','BJ','北京',NULL);
INSERT INTO `sys_user` (`group_id`, `user_id`, `user_pwd`, `user_name`, `user_ip`, `user_mac`, `user_note`, `valid_flag`, `exceed_flag`, `dept_code`, `dept_name`, `current_role`) VALUES ('X','hll','lily','胡伶俐','192.168.1.5',NULL,'','N','N','SZ','深圳','admin');
INSERT INTO `sys_user` (`group_id`, `user_id`, `user_pwd`, `user_name`, `user_ip`, `user_mac`, `user_note`, `valid_flag`, `exceed_flag`, `dept_code`, `dept_name`, `current_role`) VALUES ('X','lec','','廖尔崇','192.168.1.6',NULL,'','N','N','SJZ','石家庄',NULL);
INSERT INTO `sys_user` (`group_id`, `user_id`, `user_pwd`, `user_name`, `user_ip`, `user_mac`, `user_note`, `valid_flag`, `exceed_flag`, `dept_code`, `dept_name`, `current_role`) VALUES ('X','sxq','','商小奇','192.168.1.7',NULL,'','N','N','BJ','北京',NULL);
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
INSERT INTO `user_role` (`user_id`, `role_code`) VALUES ('cameran','admin');
INSERT INTO `user_role` (`user_id`, `role_code`) VALUES ('cameran','role1 ');
INSERT INTO `user_role` (`user_id`, `role_code`) VALUES ('cameran','role2 ');
INSERT INTO `user_role` (`user_id`, `role_code`) VALUES ('ddl','role2');
INSERT INTO `user_role` (`user_id`, `role_code`) VALUES ('hll','admin');
INSERT INTO `user_role` (`user_id`, `role_code`) VALUES ('hll','role1');
INSERT INTO `user_role` (`user_id`, `role_code`) VALUES ('hll','role2');
INSERT INTO `user_role` (`user_id`, `role_code`) VALUES ('lec','role1');
INSERT INTO `user_role` (`user_id`, `role_code`) VALUES ('sht','admin ');
INSERT INTO `user_role` (`user_id`, `role_code`) VALUES ('sxq','role1');
INSERT INTO `user_role` (`user_id`, `role_code`) VALUES ('sxq','role2');
INSERT INTO `user_role` (`user_id`, `role_code`) VALUES ('wql','role1');
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

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
  `role_name` tinyint NOT NULL
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
-- Dumping routines for database 'inv'
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
-- Final view structure for view `user_role_sys_v`
--

/*!50001 DROP TABLE IF EXISTS `user_role_sys_v`*/;
/*!50001 DROP VIEW IF EXISTS `user_role_sys_v`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = gbk */;
/*!50001 SET character_set_results     = gbk */;
/*!50001 SET collation_connection      = gbk_chinese_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `user_role_sys_v` AS select `a`.`user_id` AS `user_id`,`a`.`role_code` AS `role_code`,`b`.`role_name` AS `role_name` from (`user_role` `a` join `role` `b`) where (`a`.`role_code` = `b`.`role_code`) */;
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

-- Dump completed on 2014-06-16 16:32:25
