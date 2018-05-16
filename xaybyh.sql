/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50553
 Source Host           : localhost:3306
 Source Schema         : xaybyh

 Target Server Type    : MySQL
 Target Server Version : 50553
 File Encoding         : 65001

 Date: 15/05/2018 09:11:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `sex` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '男',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pass` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `last_login_ip` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `last_login_time` int(11) NOT NULL,
  `is_lock` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1启用2禁用',
  `salt` int(11) NOT NULL,
  `num` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES (1, '男', 'adminuser', 'd055093539e591fe149d83dd0ea7321f', '127.0.0.1', 1526288688, 1, 1524455674, 13);

-- ----------------------------
-- Table structure for ads
-- ----------------------------
DROP TABLE IF EXISTS `ads`;
CREATE TABLE `ads`  (
  `id` int(1) UNSIGNED NOT NULL AUTO_INCREMENT,
  `alt` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `path` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pid` int(11) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_show` tinyint(1) NOT NULL DEFAULT 1,
  `sort` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of ads
-- ----------------------------
INSERT INTO `ads` VALUES (1, '', '', 'upload/ads/1.jpg', 1, '', 1, 0);
INSERT INTO `ads` VALUES (2, '', '', 'upload/ads/2.jpg', 1, '', 1, 0);
INSERT INTO `ads` VALUES (3, '', '', 'upload/ads/3.jpg', 1, '', 1, 0);
INSERT INTO `ads` VALUES (4, '', '', 'upload/ads/4.jpg', 1, '', 1, 0);
INSERT INTO `ads` VALUES (5, '', '', 'upload/ads/5.jpg', 1, '', 1, 0);
INSERT INTO `ads` VALUES (6, '', '', 'upload/ads/ys1.jpg', 0, '', 1, 0);
INSERT INTO `ads` VALUES (7, '', '', 'upload/ads/ys2.jpg', 0, '', 1, 0);
INSERT INTO `ads` VALUES (8, '', '', 'upload/ads/ys3.jpg', 0, '', 1, 0);
INSERT INTO `ads` VALUES (9, '', '', 'upload/ads/gw2wm.png', 2, '公司官网二维码', 1, 0);
INSERT INTO `ads` VALUES (10, '', '', 'upload/ads/wx2wm.png', 2, '公司微信二维码', 1, 0);
INSERT INTO `ads` VALUES (11, '西安一笔一画官网', '', 'upload/ads/gwxct.jpg', 0, '西安一笔一画', 1, 0);
INSERT INTO `ads` VALUES (12, '企业资质-西安一笔一画官网', '', 'upload/ads/qyzz1.jpg', 0, '软件著作权登记证书', 1, 0);
INSERT INTO `ads` VALUES (13, '企业资质-西安一笔一画官网', '', 'upload/ads/qyzz2.jpg', 0, '软件著作权登记证书', 1, 0);
INSERT INTO `ads` VALUES (14, '企业资质-西安一笔一画官网', '', 'upload/ads/qyzz3.jpg', 0, '企业营业执照', 1, 0);
INSERT INTO `ads` VALUES (15, '企业资质-西安一笔一画官网', '', 'upload/ads/qyzz4.jpg', 0, 'ROLY区域授权代理商证明', 1, 0);
INSERT INTO `ads` VALUES (16, '企业资质-西安一笔一画官网', '', 'upload/ads/qyzz5.jpg', 0, '航天（广电）陕西办事处', 1, 0);
INSERT INTO `ads` VALUES (17, '企业资质-西安一笔一画官网', '', 'upload/ads/qyzz6.jpg', 0, '安全生产许可证', 1, 0);
INSERT INTO `ads` VALUES (18, '企业资质-西安一笔一画官网', '', 'upload/ads/qyzz7.jpg', 0, '建筑业企业资质证书', 1, 0);

-- ----------------------------
-- Table structure for ads_cate
-- ----------------------------
DROP TABLE IF EXISTS `ads_cate`;
CREATE TABLE `ads_cate`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_show` tinyint(1) NOT NULL DEFAULT 1,
  `sort` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of ads_cate
-- ----------------------------
INSERT INTO `ads_cate` VALUES (1, '首页大屏图片', 1, 0);
INSERT INTO `ads_cate` VALUES (2, '联系我们', 1, 0);

-- ----------------------------
-- Table structure for anli
-- ----------------------------
DROP TABLE IF EXISTS `anli`;
CREATE TABLE `anli`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `pid` int(11) UNSIGNED NOT NULL,
  `is_show` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1显示',
  `alt` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `addtime` int(11) NOT NULL,
  `thumb` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `btime` int(11) NOT NULL,
  `etime` int(11) NOT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `keys` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `keywords` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of anli
-- ----------------------------
INSERT INTO `anli` VALUES (1, 3, 1, '陇西县禁毒教育；多媒体禁毒动画制作；西安一笔一画有限公司', '陇西县禁毒教育基地', 1525251661, 'upload\\anli\\thumb/5ae97c262a8a2.jpg', '甘肃省定西市陇西县禁毒教育基地展示', 1522512000, 1525104000, '陇西县禁毒教育基地  禁毒教育馆设计方案  禁毒数字教育馆  西安一笔一画', '陇西县禁毒教育基地  西安一笔一画', '陇西县禁毒教育基地  禁毒教育馆设计方案  禁毒数字教育馆  西安一笔一画');
INSERT INTO `anli` VALUES (2, 3, 1, '江西省上饶市信州区禁毒教育；多媒体禁毒动画制作；西安一笔一画有限公司', '江西省上饶市信州区禁毒教育基地', 1525252042, 'upload\\anli\\thumb/5ae97e92a975a.jpg', '江西省上饶市信州区禁毒教育基地展示', 1525104000, 1527091200, '江西省上饶市信州区禁毒教育基地  数字禁毒展览馆设计  西安一笔一画', '江西省上饶市信州区禁毒教育基地  西安一笔一画', '江西省上饶市信州区禁毒教育基地  数字禁毒展览馆设计  西安一笔一画');
INSERT INTO `anli` VALUES (3, 3, 1, '四川省阆中市禁毒教育基地；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司', '四川省阆中市禁毒教育基地', 1525252588, 'upload\\anli\\thumb/5ae981456ac8d.jpg', '四川省阆中市禁毒教育基地展示', 1526659200, 1527955200, '四川省阆中市禁毒教育基地  数字化教育禁毒展厅设计  西安一笔一画', '四川省阆中市禁毒教育基地  西安一笔一画', '四川省阆中市禁毒教育基地  数字化教育禁毒展厅设计  西安一笔一画');
INSERT INTO `anli` VALUES (4, 3, 1, '重庆永川区综合教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司', '重庆永川区综合教育基地', 1525252855, 'upload\\anli\\thumb/5ae982397b2b6.jpg', '重庆永川区综合教育基地展示', 1522512000, 1523980800, '重庆永川区综合教育基地  禁毒科普馆设计 西安一笔一画', '重庆永川区综合教育基地  西安一笔一画', '重庆永川区综合教育基地  禁毒科普馆设计 西安一笔一画');
INSERT INTO `anli` VALUES (5, 3, 1, '黑龙江省花园强制戒毒所禁毒教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司', '黑龙江省花园强制戒毒所禁毒教育基地', 1525253088, 'upload\\anli\\thumb/5ae983606ad88.jpg', '黑龙江省花园强制戒毒所禁毒教育基地展示', 1524326400, 1524844800, '黑龙江省花园强制戒毒所禁毒教育基地  数字化禁毒教育基地设计  西安一笔一画', '黑龙江省花园强制戒毒所禁毒教育基地  西安一笔一画', '黑龙江省花园强制戒毒所禁毒教育基地  数字化禁毒教育基地设计  西安一笔一画');
INSERT INTO `anli` VALUES (6, 3, 1, '青海格尔木青少年禁毒教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司', '青海格尔木青少年禁毒教育基地', 1525253246, 'upload\\anli\\thumb/5ae9842bd7dc6.jpg', '青海格尔木青少年禁毒教育基地展示', 1525795200, 1527177600, '青海格尔木青少年禁毒教育基地  声光电禁毒教育展厅设计  西安一笔一画', '青海格尔木青少年禁毒教育基地  西安一笔一画', '青海格尔木青少年禁毒教育基地  声光电禁毒教育展厅设计  西安一笔一画');

-- ----------------------------
-- Table structure for anli_cate
-- ----------------------------
DROP TABLE IF EXISTS `anli_cate`;
CREATE TABLE `anli_cate`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sort` int(11) NOT NULL,
  `is_show` int(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of anli_cate
-- ----------------------------
INSERT INTO `anli_cate` VALUES (1, '数字规划馆', 1, 1);
INSERT INTO `anli_cate` VALUES (2, '数字企业展厅', 2, 1);
INSERT INTO `anli_cate` VALUES (3, '主题公共安全展厅', 3, 1);
INSERT INTO `anli_cate` VALUES (4, '博物馆/校史馆', 4, 1);
INSERT INTO `anli_cate` VALUES (5, '医疗康复中心/军事虚拟展厅', 5, 1);

-- ----------------------------
-- Table structure for anli_dtl
-- ----------------------------
DROP TABLE IF EXISTS `anli_dtl`;
CREATE TABLE `anli_dtl`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `anli_id` int(11) NOT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of anli_dtl
-- ----------------------------
INSERT INTO `anli_dtl` VALUES (1, 1, '<p style=\"text-indent: 28px;\"><span style=\"font-family:宋体\">甘肃省定西市陇西县禁毒教育基地总建筑面积为</span>200<span style=\"font-family:宋体\">平方米，装修及多媒体电子产品总投入资金</span>160<span style=\"font-family:宋体\">万。采用展板、模型等传统展示手段基础上，大量使用了高科技手段，将</span>360<span style=\"font-family:宋体\">°幻影成像、电子翻书、多通道投影等多项声光电技术融入多项展示环节</span></p><p style=\"text-align:center\"><span style=\"font-family: 宋体;\"><img src=\"/static/upload/imgs/20180502/1525251596872770.jpg\" title=\"西安一笔一画有限公司\" alt=\"陇西县禁毒教育；多媒体禁毒动画制作；西安一笔一画有限公司\" width=\"600\" height=\"450\"/><br/></span></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525251611133605.jpg\" title=\"西安一笔一画有限公司\" alt=\"陇西县禁毒教育；多媒体禁毒动画制作；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525251621407855.jpg\" title=\"西安一笔一画有限公司\" alt=\"陇西县禁毒教育；多媒体禁毒动画制作；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><span style=\"font-family: 宋体;\"></span><br/></p><p style=\"text-indent: 28px;\"><br/></p>');
INSERT INTO `anli_dtl` VALUES (2, 2, '<p style=\"text-indent:28px\"><span style=\"font-family:宋体\">江西省上饶市禁毒教育基地是竣工于</span>2017<span style=\"font-family:宋体\">年</span>9<span style=\"font-family:宋体\">月份，总建筑面积</span>450<span style=\"font-family:宋体\">平方米，多媒体产品总投入资金</span>150<span style=\"font-family:宋体\">万。采用展板、模型等传统展示手段基础上，添加了毒品漫画，和多媒体电子禁毒产品，运用到全息投影、投影融合、投影互动、</span>3D<span style=\"font-family:宋体\">视频等多种高科技技术。</span></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525251757463882.jpg\" title=\"西安一笔一画有限公司\" alt=\"江西省上饶市信州区禁毒教育；多媒体禁毒动画制作；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525251882165930.jpg\" title=\"西安一笔一画有限公司\" alt=\"江西省上饶市信州区禁毒教育；多媒体禁毒动画制作；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525251917110221.jpg\" title=\"西安一笔一画有限公司\" alt=\"江西省上饶市信州区禁毒教育；多媒体禁毒动画制作；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p>');
INSERT INTO `anli_dtl` VALUES (3, 3, '<p style=\"text-indent:28px\"><span style=\"font-family:宋体\">四川省阆中市禁毒教育基地总建筑面积</span>200<span style=\"font-family:宋体\">平方，多媒体禁毒电子产品总投入</span>60<span style=\"font-family:宋体\">万。我们运用传统展板和多媒体声光电产品相融合，多媒体产品有：罪恶之花、多通道投影融合影视厅、</span>3D<span style=\"font-family:宋体\">警钟长鸣光影秀等。打造了一个警示效果明显、视觉冲击力强、教育意义深刻的高科技展厅。</span></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525252434134775.jpg\" title=\"西安一笔一画有限公司\" alt=\"四川省阆中市禁毒教育基地；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525252451562941.jpg\" title=\"西安一笔一画有限公司\" alt=\"四川省阆中市禁毒教育基地；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525252463530495.jpg\" title=\"西安一笔一画有限公司\" alt=\"四川省阆中市禁毒教育基地；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p>');
INSERT INTO `anli_dtl` VALUES (4, 4, '<p style=\"text-indent:28px\"><span style=\"font-family:宋体\">重庆永川区综合教育基地总建筑面积</span>1370<span style=\"font-family:宋体\">平方米，装修和多媒体电子产品总投入资金</span>700<span style=\"font-family:宋体\">万元。展厅包括禁毒教育、交通安全、消防安全、生产安全教育、反邪教教育基地等，除了传统的展板和漫画，用到了很多高科技产品，如</span>9D<span style=\"font-family:宋体\">毒驾体验、</span>3D<span style=\"font-family:宋体\">演示吸毒对身体的危害、虚拟现实</span>VR<span style=\"font-family:宋体\">、毒品深渊等。用多种技术相融合做出了一个视觉、触觉、听觉多重震撼的高科技的综合展厅。</span></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525252687386855.jpg\" title=\"西安一笔一画有限公司\" alt=\"重庆永川区综合教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525252697938824.jpg\" title=\"西安一笔一画有限公司\" alt=\"重庆永川区综合教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525252706934951.jpg\" title=\"西安一笔一画有限公司\" alt=\"重庆永川区综合教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525252714131720.jpg\" title=\"西安一笔一画有限公司\" alt=\"重庆永川区综合教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p>');
INSERT INTO `anli_dtl` VALUES (5, 5, '<p style=\"text-indent:28px\"><span style=\"font-family:宋体\">黑龙江省花园强制戒毒所禁毒教育基地总建筑面积</span>300<span style=\"font-family:宋体\">平方米，装修和多媒体电子产品总投入资金</span>300<span style=\"font-family:宋体\">万元。采用展板、模型等传统展示手段基础上，大量使用了高科技手段，将全息投影，裸眼</span>3D<span style=\"font-family:宋体\">、魔幻鬼屋、多通道投影融合技术等多项声光电技术融入多项展示环节，互动性强，趣味性高，让参观者参观后印象深刻，教育意思不语言表。</span></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525252912105733.jpg\" title=\"西安一笔一画有限公司\" alt=\"黑龙江省花园强制戒毒所禁毒教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525252921126070.jpg\" title=\"西安一笔一画有限公司\" alt=\"黑龙江省花园强制戒毒所禁毒教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525252928925183.jpg\" title=\"西安一笔一画有限公司\" alt=\"黑龙江省花园强制戒毒所禁毒教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525252938756541.jpg\" title=\"西安一笔一画有限公司\" alt=\"黑龙江省花园强制戒毒所禁毒教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p>');
INSERT INTO `anli_dtl` VALUES (6, 6, '<p style=\"text-indent:32px\"><span style=\"font-size:16px;font-family:宋体\">青海格尔木青少年禁毒教育基地将投影互动、全息等高科技技术手段与传统展示方式相结合，以互动性、趣味性的方式让参观者直观、深刻的体会学习到毒品的危害性。</span></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525253174919287.jpg\" title=\"西安一笔一画有限公司\" alt=\"青海格尔木青少年禁毒教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525253182139530.jpg\" title=\"西安一笔一画有限公司\" alt=\"青海格尔木青少年禁毒教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180502/1525253189570730.jpg\" title=\"西安一笔一画有限公司\" alt=\"青海格尔木青少年禁毒教育基地展示；多媒体禁毒动画制作；数字禁毒展厅；西安一笔一画有限公司\" width=\"600\" height=\"450\"/></p><p><br/></p>');

-- ----------------------------
-- Table structure for contact
-- ----------------------------
DROP TABLE IF EXISTS `contact`;
CREATE TABLE `contact`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_show` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1 显示',
  `company` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tel` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cz` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '传真',
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `site` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `fzr` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of contact
-- ----------------------------
INSERT INTO `contact` VALUES (1, 1, '西安一笔一画科技有限公司', '高翔', '029-84503374', '029-84503374', 'xaybyh@163.com', 'http://www.xaybyh.com', '陕西省西安市太白南路上上国际2号楼', '', '高翔', '17791351090');

-- ----------------------------
-- Table structure for exhib
-- ----------------------------
DROP TABLE IF EXISTS `exhib`;
CREATE TABLE `exhib`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `alt` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `thumb` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_show` tinyint(1) NOT NULL DEFAULT 1,
  `addtime` bigint(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of exhib
-- ----------------------------
INSERT INTO `exhib` VALUES (10, 1, '反恐防暴教育馆', '反恐防暴教育馆', '反恐防暴教育馆，西安一笔一划', 'upload\\exhib\\thumb/5ae1a438562d1.png', 1, 1524737086);
INSERT INTO `exhib` VALUES (11, 1, '反恐防暴教育馆', '反恐防暴教育馆', '反恐防暴教育馆，西安一笔一划', 'upload\\exhib\\thumb/5ae1a438562d1.png', 1, 1524737142);

-- ----------------------------
-- Table structure for exhib_cate
-- ----------------------------
DROP TABLE IF EXISTS `exhib_cate`;
CREATE TABLE `exhib_cate`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_show` tinyint(1) NOT NULL DEFAULT 1,
  `sort` int(11) NOT NULL,
  `alt` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `thumb` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of exhib_cate
-- ----------------------------
INSERT INTO `exhib_cate` VALUES (1, '数字规划馆', 1, 2, '', '');
INSERT INTO `exhib_cate` VALUES (2, '数字企业展厅', 1, 1, '', '');
INSERT INTO `exhib_cate` VALUES (3, '主题公共安全展厅', 1, 0, '', '');
INSERT INTO `exhib_cate` VALUES (4, '博物馆/校史馆', 1, 3, '', '');
INSERT INTO `exhib_cate` VALUES (5, '医疗康复中心/军事虚拟展厅', 1, 4, '', '');

-- ----------------------------
-- Table structure for exhib_dtl
-- ----------------------------
DROP TABLE IF EXISTS `exhib_dtl`;
CREATE TABLE `exhib_dtl`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `e_id` int(11) NOT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of exhib_dtl
-- ----------------------------
INSERT INTO `exhib_dtl` VALUES (1, 10, '<p><span style=\"color: rgb(0, 176, 240);\"><strong>这是一条测试数据</strong></span><strong><span style=\"color: rgb(255, 0, 0);\"></span></strong><br/></p>');
INSERT INTO `exhib_dtl` VALUES (2, 11, '<p><span style=\"color: rgb(0, 176, 240);\"><strong>这是一条测试数据</strong></span><strong><span style=\"color: rgb(255, 0, 0);\"></span></strong><br/></p>');
INSERT INTO `exhib_dtl` VALUES (3, 12, '');

-- ----------------------------
-- Table structure for imgs
-- ----------------------------
DROP TABLE IF EXISTS `imgs`;
CREATE TABLE `imgs`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `path` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `alt` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 50 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of imgs
-- ----------------------------
INSERT INTO `imgs` VALUES (1, '禁毒互动游戏 禁毒产品销售 数字化禁毒西安一笔一画科技有限公司', '', 'index/imgs/pro1.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (2, '数字化禁毒 数字化禁毒教育 数字化禁毒教育基地.西安一笔一画科技有限公司', '', 'index/imgs/pro2.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (3, '社区禁毒展览 多媒体禁毒 声光电禁毒教育 西安一笔一画科技有限公司', '', 'index/imgs/pro3.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (4, '模拟吸毒教育警示 强制戒毒教育基地 预防禁毒教育.西安一笔一画科技有限公司', '', 'index/imgs/pro4.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (5, '交通安全教育西安一笔一画科技有限公司', '', 'index/imgs/pro5.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (6, '交通安全展览馆', '', 'index/imgs/pro6.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (7, '', '', 'index/imgs/pro7.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (8, '互动警史馆展厅', '', 'index/imgs/pro8.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (9, '青少年反邪教警示基地', '', 'index/imgs/pro9.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (10, '数字化反邪教安全教育', '', 'index/imgs/pro10.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (11, '纪委反腐警示教育', '', 'index/imgs/pro11.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (12, '多媒体地震体验馆', '', 'index/imgs/pro12.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (13, '消防科普教育基地', '', 'index/imgs/pro13.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (14, '消防安全教育馆', '', 'index/imgs/pro14.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (15, '校园科技馆解决方案', '', 'index/imgs/pro15.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (16, '廉政文化展示厅', '', 'index/imgs/pro16.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (17, '安全教育体验馆', '', 'index/imgs/pro17.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (18, '安全警示教育基地', '', 'index/imgs/pro18.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (19, '市道路交通安全警示教育基地', '', 'index/imgs/pro19.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (20, '预防职务犯罪多媒体展厅', '', 'index/imgs/pro20.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (21, '公安局警示教育展厅', '', 'index/imgs/pro21.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (22, '反恐防暴教育馆', '', 'index/imgs/pro22.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (23, '预防青少年犯罪教育基地', '', 'index/imgs/pro23.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (24, '反腐倡廉警示基地', '', 'index/imgs/pro24.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (25, '反腐倡廉教育基地建设方案', '', 'index/imgs/pro25.jpg', '多媒体禁毒教育展厅', '');
INSERT INTO `imgs` VALUES (26, '投影拼接融合/软件硬件融合/多通道融合系统', '', 'index/imgs/pro26.jpg', '拼接融合', '');
INSERT INTO `imgs` VALUES (27, '户外楼体秀/室外光影秀/室外投影秀', '', 'index/imgs/pro27.jpg', '拼接融合', '');
INSERT INTO `imgs` VALUES (28, '内投球幕/外投球幕/多媒体球幕', '', 'index/imgs/pro28.jpg', '拼接融合', '');
INSERT INTO `imgs` VALUES (29, '液晶拼接墙/多屏显示/多媒体显示大屏幕', '', 'index/imgs/pro29.jpg', '拼接融合', '');
INSERT INTO `imgs` VALUES (30, '沉浸式/沉浸式cave/沉浸式VR', '', 'index/imgs/pro30.jpg', '拼接融合', '');
INSERT INTO `imgs` VALUES (31, '液晶投影游戏', '', 'index/imgs/pro31.jpg', '拼接融合', '');
INSERT INTO `imgs` VALUES (32, '液晶拼接屏', '', 'index/imgs/pro32.jpg', '拼接融合', '');
INSERT INTO `imgs` VALUES (33, '球幕投影', '', 'index/imgs/pro33.jpg', '拼接融合', '');
INSERT INTO `imgs` VALUES (34, '户外楼体秀', '', 'index/imgs/pro34.jpg', '拼接融合', '');
INSERT INTO `imgs` VALUES (35, '大屏幕投影融合', '', 'index/imgs/pro35.jpg', '拼接融合', '');
INSERT INTO `imgs` VALUES (36, '地面互动/动感地面/地面投影互动', '', 'index/imgs/pro36.jpg', '投影互动', '');
INSERT INTO `imgs` VALUES (37, '魔法绘画/互动涂鸦/神笔画画', '', 'index/imgs/pro37.jpg', '投影互动', '');
INSERT INTO `imgs` VALUES (38, '魔法球投影互动/砸球互动/互动墙面', '', 'index/imgs/pro38.jpg', '投影互动', '');
INSERT INTO `imgs` VALUES (39, '互动沙箱|魔幻沙丘|互动沙箱游戏', '', 'index/imgs/pro39.jpg', '投影互动', '');
INSERT INTO `imgs` VALUES (40, '体感互动/人体互动/肢体互动', '', 'index/imgs/pro40.jpg', '投影互动', '');
INSERT INTO `imgs` VALUES (41, '体感互动', '', 'index/imgs/pro41.jpg', '投影互动', '');
INSERT INTO `imgs` VALUES (42, '魔幻沙箱', '', 'index/imgs/pro42.jpg', '投影互动', '');
INSERT INTO `imgs` VALUES (43, '魔法球投影互动', '', 'index/imgs/pro43.jpg', '投影互动', '');
INSERT INTO `imgs` VALUES (44, '', '', 'index/imgs/pro44.jpg', '投影互动', '');
INSERT INTO `imgs` VALUES (45, '', '', 'index/imgs/pro45.jpg', '投影互动', '');
INSERT INTO `imgs` VALUES (46, '', '', 'index/imgs/pro46.jpg', '投影互动', '');
INSERT INTO `imgs` VALUES (47, '', '', 'index/imgs/pro47.jpg', '投影互动', '');
INSERT INTO `imgs` VALUES (48, '', '', 'index/imgs/pro48.jpg', '投影互动', '');
INSERT INTO `imgs` VALUES (49, '', '', 'index/imgs/pro49.jpg', '投影互动', '');

-- ----------------------------
-- Table structure for museum
-- ----------------------------
DROP TABLE IF EXISTS `museum`;
CREATE TABLE `museum`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `alt` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_show` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1显示',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '展馆' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of museum
-- ----------------------------
INSERT INTO `museum` VALUES (1, '博物馆', '', '', 1);
INSERT INTO `museum` VALUES (2, '农业馆', '', '', 1);
INSERT INTO `museum` VALUES (3, '科技馆', '', '', 1);
INSERT INTO `museum` VALUES (4, '禁毒馆', '', '', 1);
INSERT INTO `museum` VALUES (5, '教育馆', '', '', 1);

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `thumb` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_show` tinyint(1) NOT NULL DEFAULT 1,
  `url` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `addtime` bigint(11) NOT NULL,
  `alt` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `fbr` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '发布人',
  `zy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '摘要',
  `pid` int(11) NOT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `keys` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `keywords` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES (1, 'upload/news/thumb/gs1.jpg', 1, '', 1524455674, '多媒体技术打造陇西县禁毒教育基地视觉新体验', '多媒体技术打造陇西县禁毒教育基地视觉新体验', '西安一笔一画', '2017年6月16日，陇西县禁毒教育基地揭牌成立。陇西县县长、县禁毒委主任陈彦吉，市禁毒办副主任张建民共同为禁毒教育基地揭牌。县人大常委会副主任郭建民，县政协副主席栾国泰出席揭牌仪式。', 1, '', '多媒体技术打造陇西县禁毒教育基地视觉新体验  禁毒展览馆设计  西安一笔一画', '', '');
INSERT INTO `news` VALUES (2, 'upload/news/thumb/gs2.jpg', 1, '', 1524462173, '江西信州区禁毒教育基全省领先的智能化禁毒教育基地 怎么做到让信州安全感跃居全市第一西安一笔一划', '全省领先的智能化禁毒教育基地 怎么做到让信州安全感跃居全市第一', '西安一笔一画', '2017年，信州公安分局共查破各类涉毒案件347起，缴毒4.32公斤，抓获涉毒人员528人。禁毒工作成效助力压发案成效全面凸显。2017年，凭借科学预防和严厉打击毒品犯罪，我区刑事犯罪同比下降41.2%，各类案件总量下降38.1%，公众安全感大幅上升。2017年下半年，信州区安全感跃居全市第一，全省第十七位。', 1, '', '全省领先的智能化禁毒教育基地  禁毒教育展览馆  怎么做到让信州安全感跃居全市第一 西安一笔一画', '', '');
INSERT INTO `news` VALUES (3, 'upload/news/thumb/gs3.jpg', 1, '', 1524462545, '邱木兴深入玉山、信州督导检查禁毒工作', '邱木兴深入玉山、信州督导检查禁毒工作', '西安一笔一画', '信息索取号: E00070/2017-00419	责任部门:市公安局	\r\n12月20日至21日，副市长、市禁毒委主任、市公安局长邱木兴先后深入玉山县、信州区督导检查禁毒工作。市公安局党委委员、副局长童建明，禁毒支队支队长杨卫国陪同督导。\r\n', 1, '', '邱木兴深入玉山、信州督导检查禁毒工作  禁毒馆设计  西安一笔一画', '', '');
INSERT INTO `news` VALUES (4, 'upload/news/thumb/hy1.jpg', 1, '', 1524462905, '为什么你的产品要使用多媒体展厅设计', '为什么你的产品要使用多媒体展厅设计', '西安一笔一画', '当今世界人们处在无所不在的竞争时期，数以百计的展出者们正在破费上百万美圆的巨资，在寻觅更有效的途径来到达梦寐以求顾客、展出者最大的问题就是：如何吸收和抓什有价值的潜在客户，怎样使他们记忆你展出的内容顾客来看展览，是要在尽短的时间里尽可能多地理解你的产品和业务。他们宁愿看到产品的运用过程， 而不是听产品内容，所以多媒体展厅设计 突出产品就十分重要。', 2, '', '为什么你的产品要使用多媒体展厅设计  禁毒法制教育馆  西安一笔一画', '', '');
INSERT INTO `news` VALUES (5, 'upload/news/thumb/hy2.jpg', 1, '', 1524463083, '如何设计好企业数字展厅', '如何设计好企业数字展厅', '西安一笔一画', '个企业如果想要长远发展，都会积建设企业文化，也让客户看到企业 好的面。因此只建设企业的内部文化已经不能满足现代社会企业的发展了，越来越多的中小企业都采用各种展示办法，把企业以透明式的状态展现在客户面前。', 2, '', '如何设计好企业数字展厅  数字化禁毒教育基地  西安一笔一画', '', '');
INSERT INTO `news` VALUES (6, 'upload/news/thumb/hy3.jpg', 1, '', 1524464891, 'VR与各大行业能擦出怎样的火花？这四大领域或能给我们一些启发', 'VR与各大行业能擦出怎样的火花？这四大领域或能给我们一些启发', '西安一笔一画', 'VR或是计算机模拟现实世界的科学都为用户提供了近乎真实的体验，因此几十年来，开发商和消费者都一直期望能将这种沉浸式体验发挥到极致。经过多次失败的尝试后，VR终于发挥其潜力，成为下一个大型计算平台，并拓展出新的市场、领域。', 2, '', 'VR与各大行业能擦出怎样的火花？这四大领域或能给我们一些启发  多媒体廉政展厅  西安一笔一画', '', '');
INSERT INTO `news` VALUES (7, 'upload/news/thumb/hy4.jpg', 1, '', 1524465106, '如何打造一个出色的企业多媒体展厅', '如何打造一个出色的企业多媒体展厅', '西安一笔一画', '近几年来，随着软硬件技术的发展，展馆展厅建设需求也日益增多，在展厅设计中，如果说空间的元素设计风格是灵魂，那多媒体的设计展项就是展厅的血肉之躯，也就是打造一个“创意和科技”的数字体验环境，灵魂和血肉的完美融合才的展厅。', 2, '多媒体展厅设计，多媒体动画展示，西安一笔一划', '如何打造一个出色的企业多媒体展厅  青少年安全教育基地  西安一笔一画', '', '');
INSERT INTO `news` VALUES (8, 'upload/news/thumb/hy5.jpg', 1, '', 1524465742, '雾幕全息投影带给您不一样的画面体验', '雾幕全息投影带给您不一样的画面体验', '西安一笔一画', '水幕投影顾名思义就是在水幕或水帘上投射影像，而雾幕投影的载体是“雾气”多数人把他们的定义混淆。他们在投射影像的效果上完全不同。', 2, '', '雾幕全息投影带给您不一样的画面体验  交通安全体验馆   西安一笔一画', '', '');
INSERT INTO `news` VALUES (9, 'upload/news/thumb/hy6.jpg', 1, '', 1524465802, '全息投影技术与3D技术相比较有哪些优势', '全息投影技术与3D技术相比较有哪些优势', '西安一笔一画', '投影技术的突飞猛进大大满足了人们对视听体验的需求，全息投影技术已然成为目前投影技术中最为先进神奇的一种。3D技术的出现让电影院迎来了又一个春天，但是与现在的全息投影技术相比较，3D技术就要处于劣势了。', 2, '', '全息投影技术与3D技术相比较有哪些优势  投影动画设计   西安一笔一画', '', '');
INSERT INTO `news` VALUES (10, 'upload/news/thumb/hy7.jpg', 1, '', 1524465958, '简述弧幕影院边缘融合技术解决方案分析', '简述弧幕影院边缘融合技术解决方案分析', '西安一笔一画', '多通道投影(弧幕影院)系统是指采用多台投影机组合而成的多通道大屏幕展示系统，它比普通的标准投影系统具备更大的显示尺寸、更宽的视野、更多的显示内容、更高的显示分辨率，以及更具冲击力和沉浸感的视觉效果。', 2, '', '简述弧幕影院边缘融合技术解决方案分析  交通安全科普馆  西安一笔一画', '', '');
INSERT INTO `news` VALUES (11, 'upload/news/thumb/hy8.jpg', 1, '', 1525856827, '你知道教育廉政展厅设计要点有哪些吗', '你知道教育廉政展厅设计要点有哪些吗', '西安一笔一画', '廉政教育的开展形式和传播载体越发的多元化，如何更加有效引导参观者认识腐败现象，培养廉洁性意识，从而弘扬正洁风气，陶冶岛的情操，让警钟长鸣是廉政教育需要首先解决的问题。推行廉政教育的一个主要形式就是廉政展厅的设计，现在也是新的一种文化宣传方式。', 2, '', '你知道教育廉政展厅设计要点有哪些吗  交通安全教育培训馆  西安一笔一画', '', '');
INSERT INTO `news` VALUES (12, 'upload/news/thumb/hy9.jpg', 1, '', 1524466129, '展厅设计怎样根据主题进行特色设计', '展厅设计怎样根据主题进行特色设计', '西安一笔一画', '特色展厅在整个商品经营生态链中处于重要环节，发挥着十分重要的作用，也是企业创造价值的重要渠道。展销厅在我们的生活之中随处可见，尤其是在服饰行业中普及率极为广泛。', 2, '', '展厅设计怎样根据主题进行特色设计  数字化城市规划馆  西安一笔一画', '', '');
INSERT INTO `news` VALUES (13, 'upload/news/thumb/hy10.jpg', 1, '', 1524466322, '观点分享：如何建立数字化形态的展览馆', '观点分享：如何建立数字化形态的展览馆', '西安一笔一画', '和传统的展览馆相比，数字化形态展览馆将使其与传统展览馆区别开来，其根本标志在于前沿科学信息技术的运用及管理上信息的数字化加工、挖掘及科学利用。', 2, '', '观点分享：如何建立数字化形态的展览馆  廉政文化展厅设计  西安一笔一画', '', '');

-- ----------------------------
-- Table structure for news_cate
-- ----------------------------
DROP TABLE IF EXISTS `news_cate`;
CREATE TABLE `news_cate`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_show` tinyint(1) NOT NULL DEFAULT 1,
  `sort` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of news_cate
-- ----------------------------
INSERT INTO `news_cate` VALUES (1, '公司新闻', 1, 1);
INSERT INTO `news_cate` VALUES (2, '行业新闻', 1, 2);

-- ----------------------------
-- Table structure for news_dtl
-- ----------------------------
DROP TABLE IF EXISTS `news_dtl`;
CREATE TABLE `news_dtl`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `news_id` int(11) UNSIGNED NOT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of news_dtl
-- ----------------------------
INSERT INTO `news_dtl` VALUES (1, 1, '<p style=\"margin-top:15px;text-align:justify;text-justify:inter-ideograph;text-indent:32px;line-height:26px\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333;background:white\">2017</span><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333;background:white\">年6月16日，陇西县禁毒教育基地揭牌成立。陇西县县长、县禁毒委主任陈彦吉，市禁毒办副主任张建民共同为禁毒教育基地揭牌。县人大常委会副主任郭建民，县政协副主席栾国泰出席揭牌仪式。</span></p><p style=\"margin-top: 15px; text-align: center; text-indent: 32px; line-height: 26px;\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333;background:white\"><img src=\"/static/upload/news/imgs/20180423/1524454688358971.png\" title=\"\" alt=\"陇西县禁毒教育基地，多媒体禁毒厅展示，3D禁毒动画展示，西安一笔一划\" width=\"554\" height=\"415\"/></span></p><p style=\"margin-top:15px;text-align:justify;text-justify:inter-ideograph;text-indent:32px;line-height:26px\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333;background:white\">据了解，该基地投资90多万元，占地500平方米，布展面积1000平方米，共分外景和室内两个板块。其中外墙窗口8个展板、12个移动展板。室内分为五个展厅，主要内容包括禁毒斗争历史，全面介绍毒品知识、宣传毒品的危害及防范常识，达到警示教育的目的。</span></p><p style=\"margin-top: 15px; text-align: center; text-indent: 32px; line-height: 26px;\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333;background:white\"><img src=\"/static/upload/news/imgs/20180423/1524454703528946.png\" title=\"\" alt=\"陇西县禁毒教育基地，多媒体禁毒厅展示，3D禁毒动画展示，西安一笔一划\" width=\"554\" height=\"415\"/></span></p><p style=\"margin-top:15px;text-align:justify;text-justify:inter-ideograph;text-indent:32px;line-height:26px\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333;background:white\">&nbsp;</span></p><p style=\"margin-top:15px;text-align:justify;text-justify:inter-ideograph;text-indent:32px;line-height:26px\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333;background:white\">室内分为五个展厅:第一展厅以灯箱形式展示领导语录、虎门销烟半景画展、毒情简要；第二展厅以“认识毒品”“展示毒品”为主题；第三展厅借助“脸部变化演示系统”展示毒患之害；第四展厅是真实体验电子模拟板块,借虚拟场景展现家破人亡、深深罪恶之感；第五展厅采用大屏幕投影融合技术,以领导关怀、警钟长鸣为题材,倡导全民参与禁毒。</span></p><p style=\"margin-top: 15px; text-align: center; text-indent: 32px; line-height: 26px;\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333;background:white\"><img src=\"/static/upload/news/imgs/20180423/1524454716530237.png\" title=\"\" alt=\"陇西县禁毒教育基地，多媒体禁毒厅展示，3D禁毒动画展示，西安一笔一划\" width=\"554\" height=\"415\"/></span></p><p style=\"margin-top:15px;text-align:justify;text-justify:inter-ideograph;text-indent:32px;line-height:26px\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333;background:white\">陇西县禁毒教育基地集成了多项多媒体系统，主要包括半景画展、脸部变化演示系统、3Ｄ幻影成像、投影电子翻书、知识竞赛抢答系统、弧幕投影显示 、互动投影、虚拟现实VR等，以上多媒体系统集成由西安一笔一画科技有限公司负责实施。</span></p><p style=\"margin-top: 15px; text-align: center; text-indent: 32px; line-height: 26px;\"><img src=\"/static/upload/news/imgs/20180423/1524454761797981.png\" title=\"\" alt=\"陇西县禁毒教育基地，多媒体禁毒厅展示，3D禁毒动画展示，西安一笔一划\" width=\"554\" height=\"415\"/></p><p><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333;background:white\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;展厅自建成后，每天都需要接待大批参观者到访，各类展项不间断进行画面展示，基地负责人表示：现代科技元素的引入，极大地丰富了展示手段，以更具沉浸感的参观体验颠覆了过去全靠人员讲解和静物展览的单一手段。同时，可靠的性能设计、便捷的维护，以及卓越的性价比，不仅降低了工作人员的维护工作量，也降低了基地的运维成本。</span></p><p><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333;background:white\"><br/></span></p>');
INSERT INTO `news_dtl` VALUES (2, 2, '<p style=\"text-align: left;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017<span style=\"font-family:宋体\">年，信州公安分局共查破各类涉毒案件</span>347<span style=\"font-family:宋体\">起，缴毒</span>4.32<span style=\"font-family:宋体\">公斤，抓获涉毒人员</span>528<span style=\"font-family:宋体\">人。禁毒工作成效助力压发案成效全面凸显。</span>2017<span style=\"font-family:宋体\">年，凭借科学预防和严厉打击毒品犯罪，我区刑事犯罪同比下降</span>41.2%<span style=\"font-family:宋体\">，各类案件总量下降</span>38.1%<span style=\"font-family:宋体\">，公众安全感大幅上升。</span>2017<span style=\"font-family:宋体\">年下半年，信州区安全感跃居全市第一，全省第十七位。</span></p><p style=\"text-align: center;\">&nbsp;<img src=\"/static/upload/news/imgs/20180423/1524456249862830.png\" title=\"江西信州区禁毒教育基地，禁毒多媒体展厅，3D禁毒动画展示，西安一笔一划，\" alt=\"江西信州区禁毒教育基地，禁毒多媒体展厅，3D禁毒动画展示，西安一笔一划，\" width=\"550\" height=\"366\"/></p><p><span style=\"font-family:宋体\">　　作为上饶市中心城区毒品预防教育的前沿阵地，信州区禁毒教育基地总投资约</span>400<span style=\"font-family:宋体\">万元，总面积</span>970<span style=\"font-family:宋体\">平米，分序厅和</span>9<span style=\"font-family:宋体\">大功能展区。该基地在科技化、智能化的投入，在全省乃至全国均处于领先地位，能全方位、多层次，立体深入的对全区禁毒打击、管理、预防、教育和宣传等五方面成效进行集中展示，让参观者直观、深刻的体会到毒品的危害，学习到毒品防范知识，提升识毒、防毒、拒毒能力，从而珍爱生命，远离毒品，积极参与到禁毒人民战争中来。</span></p><p style=\"text-align: center;\"><span style=\"font-family:宋体\"><img src=\"/static/upload/news/imgs/20180423/1524461821189684.png\" title=\"江西信州区禁毒教育基地，禁毒多媒体展厅，3D禁毒动画展示，西安一笔一划，\" alt=\"江西信州区禁毒教育基地，禁毒多媒体展厅，3D禁毒动画展示，西安一笔一划，\" width=\"550\" height=\"367\"/></span></p><p><span style=\"font-family:宋体\"></span></p><p><span style=\"font-family:宋体\">　　在信州区禁毒教育基地，除了能通过摆放的</span>24<span style=\"font-family:宋体\">种常见毒品仿真样品和仿真吸毒工具更形象、直观地了解毒品，这里还生动呈现了吸毒对个人、家庭和社会的危害。在第三展区的右边的墙上，是一个被喻为“魔镜”的屏幕，通过这面“魔镜”，可以模拟“吸毒人脸变化”，看看吸毒</span>3<span style=\"font-family:宋体\">年、</span>6<span style=\"font-family:宋体\">年、</span>9<span style=\"font-family:宋体\">年后的脸部变化。左前方是一台数字</span>3D<span style=\"font-family:宋体\">成像系统，系统分别模拟鼻吸、注射、口服等三种吸毒方式，可以直观看到人体吸毒后血液循环变化、心脏变化以及大脑的变化，可以更加直观体会到吸毒者生命力消耗殆尽的极端惨象。在这里，为了让参观者能够有切身体验，引入了一套</span>VR<span style=\"font-family:宋体\">展示系统，虚拟了一个室内场景，让参观者体验鼻吸、注射、口服等三种吸毒方式后产生的眩晕感。</span></p><p style=\"text-align: center;\"><span style=\"font-family:宋体\"></span></p><p style=\"text-align: center;\">&nbsp;<img src=\"static/upload/news/imgs/20180423/1524461898952465.png\" title=\"江西信州区禁毒教育基地，禁毒多媒体展厅，3D禁毒动画展示，西安一笔一划，\" alt=\"江西信州区禁毒教育基地，禁毒多媒体展厅，3D禁毒动画展示，西安一笔一划，\" width=\"550\" height=\"370\"/></p><p><span style=\"font-family:宋体\">　　当参观者步入最后一个展区——禁毒宣誓区，大门的空气幕帘虚拟</span>3D<span style=\"font-family:宋体\">警钟影像，警钟长鸣，入耳钻心，警醒我们，珍爱生命，远离毒品，并在钟声中庄重宣誓。</span></p><p style=\"text-align: center;\">&nbsp;<img src=\"/static/upload/news/imgs/20180423/1524461928979403.png\" title=\"江西信州区禁毒教育基地，禁毒多媒体展厅，3D禁毒动画展示，西安一笔一划，\" alt=\"江西信州区禁毒教育基地，禁毒多媒体展厅，3D禁毒动画展示，西安一笔一划，\" width=\"550\" height=\"366\"/></p><p><span style=\"font-family:宋体\">　　信州区扎实做好春节返乡人员和学校禁毒宣传活动，深入开展进校园、进社区、进单位、进场所、进农村、进家庭等六进活动，通过摆放展板、发放禁毒宣传资料、仿真毒品展示、禁毒问卷调查、禁毒签名、上禁毒宣传课等形式开展禁毒宣传。同时，在各旅社、宾馆广告屏不断播出禁毒宣传标语，创新开展全民“互联网</span>+<span style=\"font-family:宋体\">禁毒宣传”活动、组织在校学生参加全国禁毒知识竞赛，度的良好社会效果。</span></p><p style=\"margin-top:15px;text-align:center;line-height:30px\"><span style=\"font-family:宋体\"></span> <img src=\"/static/upload/news/imgs/20180423/1524461979110169.png\" title=\"江西信州区禁毒教育基地，禁毒多媒体展厅，3D禁毒动画展示，西安一笔一划，\" alt=\"江西信州区禁毒教育基地，禁毒多媒体展厅，3D禁毒动画展示，西安一笔一划，\" width=\"550\" height=\"374\"/></p><p><span style=\"font-family:宋体\">　　在春节期间，以春节返乡人员为主体，采用群众喜闻乐见的方式进行宣传。民警现场展示了多种毒品仿真样本，结合毒品祸害家庭、祸害社会、祸害个人典型案例，为群众讲解了什么是毒品，向群众宣传毒品的危害性，耐心细致地为现场群众答疑解惑，宣传国家禁毒政策、禁毒法律法规。呼吁外出务工人员在务工期间，遵纪守法，切勿沾染毒品，对毒品采取坚决拒绝的态度，切勿持侥幸心理。</span></p><p><span style=\"font-family:宋体\">　　信州区努力提高广大人民群众特别是青少年群体的识毒、防毒、拒毒意识，构建人人参与禁毒全民禁毒战争，同时强化打击毒品犯罪力度，打防并举。开展禁毒流动课堂宣传活动，吸引众多青少年的积极参与。禁毒民警给孩子们上了一堂生动的禁毒教育课，通过以案说法、播放禁毒宣传视频、发放宣传资料等丰富多彩的形式，呼吁青少年一定当好禁毒知识“宣传员”这一重要角色，向家庭成员、社区居民开展禁毒宣传。孩子们热情高涨，他们表示，“通过警察叔叔的讲解，观看图片，了解毒品的种类、危害、传播形式等，并观看了相关视频，感受到毒品的可怕，千万不能触碰，远离毒品从我做起。”</span></p><p><br/></p>');
INSERT INTO `news_dtl` VALUES (3, 3, '<p style=\"text-indent:28px\">12<span style=\"font-family:宋体\">月</span>20<span style=\"font-family:宋体\">日至</span>21<span style=\"font-family:宋体\">日，副市长、市禁毒委主任、市公安局长邱木兴先后深入玉山县、信州区督导检查禁毒工作。市公安局党委委员、副局长童建明，禁毒支队支队长杨卫国陪同督导。</span></p><p style=\"text-indent:28px\"><span style=\"font-family:宋体\">在玉山县，邱木兴视察了</span>6.26<span style=\"font-family:宋体\">服务中心和禁毒教育基地，与民警亲切交谈，对玉山县禁毒工作的创新举措及取得的成效给予了肯定。</span></p><p style=\"text-indent:28px\"><span style=\"font-family:宋体\">在信州区，邱木兴实地查看了信州区禁毒教育基地，肯定了信州区毒品预防教育工作，要求充分利用好禁毒教育基地这一有效载体和平台，组织社会各界特别是青少年学生学习参观，不断提高全民禁毒意识。</span></p><p style=\"text-indent:28px\"><span style=\"font-family:宋体\">督导检查中，邱木兴强调，禁毒工作关乎民族兴衰、国家安宁，各地公安机关要提高思想认识，切实增强责任感和使命感，全力以赴做好禁毒工作，顺应人民群众对美好生活的向往。一要继续保持全警缉毒的强劲势头，强化打好缉毒执法“攻坚战”与“持久战”思想，提升起诉毒品案件犯罪嫌疑人数。二要继续压实责任，明确目标，从“人、财、物”等方面加大投入，年底前全部完成</span>6.26<span style=\"font-family:宋体\">服务中心和禁毒教育基地建设，进一步夯实禁毒基层基础。三要建立举报奖励机制，充分发动广大干部群众参与禁毒工作，坚决打赢禁毒人民战争。</span></p><p style=\"text-indent:28px\"><span style=\"font-family:宋体\">玉山县领导胡剑飞、徐树斌、吴军攀、雷波及副县级干部、公安局政委丁国庆，市公安局党委委员、信州区副区长、信州分局局长祝少敏分别在当地陪同督导。</span></p><p><br/></p>');
INSERT INTO `news_dtl` VALUES (4, 4, '<p style=\"text-align:left;text-indent:42px\"><span style=\"font-family:宋体\">当今世界人们处在无所不在的竞争时期，数以百计的展出者们正在破费上百万美圆的巨资，在寻觅更有效的途径来到达梦寐以求顾客、展出者最大的问题就是：如何吸收和抓什有价值的潜在客户，怎样使他们记忆你展出的内容顾客来看展览，是要在尽短的时间里尽可能多地理解你的产品和业务。他们宁愿看到产品的运用过程，</span> <span style=\"font-family:宋体\">而不是听产品内容，所以多媒体展厅设计</span> <span style=\"font-family:宋体\">突出产品就十分重要。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">但是理想状况是很多企业没有本人的设计师，可供选择的表现手腕似乎不多。但我们或许能用两只能够说话而又生动心爱的鹦鹉，一只为黄色，一只为红色。展厅设计公司专业人员以为假如他们居然用天真幼稚的语调，在展览会上高谈黄色和</span>53(<span style=\"font-family:宋体\">色两种颜料，就会使一个技术性很强的展览变得轻松高兴，妙趣横生这样就增加了文娱性。有些展品能直接使观众变成顾客。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">例如向观众引见一种用于军事方面的多孔电话系统。观众拿起电话机在陈列室运用，同时让一个素描家运用投影机，将其工作程序在一个大的屏幕上投射出来，他首先卒草图上画出一个电话间，又在里面画上观众的轮廓。屏幕上的素描效果就是：观众在用电话机讲话。他们只需求花一美圆，就可将本人运用这种电话时的画像带回家，从而记住了这种电话。展品得到了更为普遍的宣传效果。展出者还可将一个复杂的实物示教仪简单明了地引见绐观众。如通讯网络实物示教仪，就是一个‘‘</span>EPCOT<span style=\"font-family:宋体\">上”的大型光学组件。要把一个与房屋大小类似的实物展现仪运到商业展览厅是不实践的。但是人们能够将重点操作过程所需求的部件用在展体上。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">我们还可将其中一个陈列体做成游戏机，吸收人们前来参观。总之不要应有尽有地引见你的产品和业务。只需给顾客提供足够有用的信息就行，如产品和业务的特征等等。我们的目的是要用文娱性来吸收观众，而观众分开后对你的产品和公司有一种积极的印象。也就是说他们经过文娱性理解到产品的作用性和牢靠性，加上表现方式的浅显易懂，停止商业实物示教就会获得好的效果。要在频繁的展览中吸收观众，最有效的决窍莫过于不时创新。一个人工喷泉加工商拜托他展览喷泉制造机。这种机器真实太大。导管从一端进入机器，加工汇集妁喷泉从另一端出来，这种机器是依据力学原理建造的，喷出的方式各异的泉水很吸收人。</span></p><p style=\"text-align: left; text-indent: 28px;\"><span style=\"font-family:宋体\">令人头痛的是不能将它运到有限的空间里停止展出。巴克先生留意到这个厂的角落里有一台老式铸铁机在吸尘。有人通知他这机器只在消费顶峰期才运用。启动它后能飞速旋转，尾部会“叭叭叭地喷出水来。巴克先生将它用作展出时的通道限制器并将它装饰一翻然后喷水。观众们没有将它看成是“老式的玩艺儿”，恰经过它而信住了这个公司加工的嘴泉设备，他们收到大量订货，致使难以对付只好在这次展出后扩展消费。</span> <span style=\"font-family:宋体\">上述种种事例给我们的启示是：停止实物示教必需表现产品的优点，其过程必需简短而重点突出，操作过程应该使围观的人得到乐趣，千方别使观众感到绝望</span>,<span style=\"font-family:宋体\">这就是数字展厅设计的精华。</span></p>');
INSERT INTO `news_dtl` VALUES (5, 5, '<p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">个企业如果想要长远发展，都会积建设企业文化，也让客户看到企业</span> <span style=\"font-family:宋体\">好的面。因此只建设企业的内部文化已经不能满足现代社会企业的发展了，越来越多的中小企业都采用各种展示办法，把企业以透明式的状态展现在客户面前，例如：公司的品、经营理念、产品信息、服务、整体形象等都展现出来，增加企业的知名度，添加客户对企业的好感，也得到了很好的宣传，举三得。那么，如何去展现这些内容呢，企业数字展厅帮助您。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">数字展厅里面包括各种以多媒体技术的为主的展项，能把企业的任何信息都展现出来，如：电子数字沙盘、虚拟翻书、地面互动投影、全息投影、屏幕、多点触控、三维动画、环幕、</span>3D<span style=\"font-family:宋体\">影院等，每种展示方式都非常受人们喜爱，对于宣传企业品、树立企业形象都好的效果。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">企业文化是企业实力的个重要基础，通过企业数字展厅把这个文化给宣传出出去，其重要性不言而喻，那么该如何去设计企业数字展厅</span>?<span style=\"font-family:宋体\">需要注意什么呢</span>?<span style=\"font-family:宋体\">壹码视界科技有限公司整理出如下建议：</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">第一：数字展厅的安全问题</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">数字展厅的所用到的地面面积较为宽广，若没有什么些活动举行的话，般情况下是不用摆放很多物品的，它主要是以空旷为主好让参观者走动自如，因此安全问题定要有保证，灭火器的摆放和警报器的设置都要在眼就能看到的位置，避免发生事故。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">第二：数字展厅的核心颜色选择</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">在数字展厅选择核心颜色四，不能太过于古板，让人觉得枯燥无味，也不能过于夸张。无论是颜色的选择、核心主题内容还是材质都应该让人感觉到气、雅、庄重，因此</span> <span style=\"font-family:宋体\">好选择单色</span>(<span style=\"font-family:宋体\">如：白色、灰色、蓝色、绿色等浅色系颜色</span>)<span style=\"font-family:宋体\">，给人留下美好的印象。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">第三：数字展厅的展示设备要适合企业所展示的物品</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">我们在前两段可以看出数字展厅中展示设备众多，每种都科技感十足，深受人们喜爱，但是不能因为每种都好，而乱用，去展示不适合的事物，因此定要慎重选择多媒体展项，这样，才能让整个数字展厅的光芒越来越。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">我们是专业的数字展厅设计制作公司，主要从事电子数字沙盘、虚拟翻书、地面互动投影、全息投影、屏幕、多点触控、三维动画、环幕、</span>3D<span style=\"font-family:宋体\">影院等制作，我们拥有尖端三维可视化创意和技术力量，以与“客户共赢”的观念为客户服务。</span></p><p><br/></p>');
INSERT INTO `news_dtl` VALUES (6, 6, '<p style=\"text-align:left;text-indent:28px\">VR<span style=\"font-family:宋体\">或是计算机模拟现实世界的科学都为用户提供了近乎真实的体验，因此几十年来，开发商和消费者都一直期望能将这种沉浸式体验发挥到极致。经过多次失败的尝试后，</span>VR<span style=\"font-family:宋体\">终于发挥其潜力，成为下一个大型计算平台，并拓展出新的市场、领域。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">目前来看，</span>VR<span style=\"font-family:宋体\">无所不在。几乎所有您能想到的领域，包括娱乐、旅游、医疗保健、房地产以及体育领域等，都在一定程度上融入了</span>VR<span style=\"font-family:宋体\">。它正在以前所未有的方式颠覆传统行业模式。</span></p><p><span style=\"font-size:14px;font-family:宋体\">以下是</span><span style=\"font-size:14px;font-family:&#39;Calibri&#39;,sans-serif\">VR</span><span style=\"font-size:14px;font-family:宋体\">应用较为广泛的一些主要行业，小编为您整理如下：</span></p><p><span style=\"font-size:14px;font-family:宋体\"></span></p><p style=\"text-align:left;text-indent:28px\">1<span style=\"font-family:宋体\">.娱乐</span></p><p style=\"text-align: center; text-indent: 28px;\"><span style=\"font-family:宋体\"><img src=\"/static/upload/news/imgs/20180423/1524463217402476.png\" title=\"多媒体展厅设计，多媒体动画展示，西安一笔一划\" alt=\"多媒体展厅设计，多媒体动画展示，西安一笔一划\" width=\"550\" height=\"343\"/><br/></span></p><p style=\"text-indent: 28px;\"><span style=\"font-family:宋体\"></span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">影视及游戏领域是首个也是最广泛应用</span>VR<span style=\"font-family:宋体\">的一大领域。在</span>90<span style=\"font-family:宋体\">年代，知名游戏厂商任天堂曾尝试用</span> Virtual Boy<span style=\"font-family:宋体\">头显将</span>VR<span style=\"font-family:宋体\">带入消费市场，但最终并未成功（这是游戏界第一次尝试融入</span>VR<span style=\"font-family:宋体\">，可惜由于理念过于前卫以及当时技术发展的局限性等原因而失败）。随后，其他公司也纷纷效仿任天堂开始推出</span>VR<span style=\"font-family:宋体\">头显，但都没能让</span>VR<span style=\"font-family:宋体\">成为技术革命的主流。而现在，随着</span>Oculus Rift<span style=\"font-family:宋体\">，索尼</span>PlayStation VR<span style=\"font-family:宋体\">和</span>HTC Vive<span style=\"font-family:宋体\">的出现，过去的梦想开始成为现实，</span>VR<span style=\"font-family:宋体\">逐渐在游戏领域普及。</span>VR<span style=\"font-family:宋体\">通过将用户完全置身于虚拟世界中（即沉浸式体验），来提升其游戏体验。目前，已经有多款</span>VR<span style=\"font-family:宋体\">游戏深受玩家喜爱，这些乐于进行新尝试的玩家正在使用这些技术来探索新世界。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">此外，其他形式的娱乐即电影，也开始尝试</span>VR<span style=\"font-family:宋体\">技术。相对来说，好莱坞还较少涉足，但派拉蒙和福克斯等主要制片公司已经开始尝试在电影中应用</span>VR<span style=\"font-family:宋体\">，比如《权力的游戏（</span>Game of Thrones<span style=\"font-family:宋体\">）》</span>VR<span style=\"font-family:宋体\">版。未来，我们有望看到</span>VR<span style=\"font-family:宋体\">在电影中更广泛的应用。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\"></span></p><p style=\"text-align:left;text-indent:28px\">2<span style=\"font-family:宋体\">.现场活动</span></p><p style=\"text-align: center; text-indent: 28px;\"><span style=\"font-family:宋体\"><img src=\"/static/upload/news/imgs/20180423/1524463294137353.png\" title=\"多媒体展厅设计，多媒体动画展示，西安一笔一划\" alt=\"多媒体展厅设计，多媒体动画展示，西安一笔一划\" width=\"550\" height=\"343\"/><br/></span></p><p style=\"text-indent: 28px;\"><span style=\"font-family:宋体\"></span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">音乐会、体育赛事、国际事务等现场活动也是</span>VR<span style=\"font-family:宋体\">可以产生巨大影响的另一大领域。在</span>VR<span style=\"font-family:宋体\">中观看某一活动，带给用户一种“身临其境”的体验。在</span>VR<span style=\"font-family:宋体\">中直播音乐会也会是一种视觉上丰富的体验，这与您在电视上观看的体验完全不同。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">在</span>VR<span style=\"font-family:宋体\">中，像“美国总统辩论会”这样的政治社交活动也会变得非常有趣。想象在</span>VR<span style=\"font-family:宋体\">中近距离地看到世界各国领导人齐聚在联合国大会，简直太不可思议了。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">就体育领域而言，</span>VR<span style=\"font-family:宋体\">可发挥的潜力是巨大的，甚至比其他任何行业都要大。运动爱好者能够以前所未有的方式观看体育比赛，在比赛进行时还可选择最佳观看视角，并前往对他们来说“遥不可及”的地方，例如中场休息的更衣室。</span></p><p style=\"text-align:left;text-indent:28px\">VR<span style=\"font-family:宋体\">已经在职业体育赛事中占据了一席之地，</span>NBA<span style=\"font-family:宋体\">、</span>NFL<span style=\"font-family:宋体\">、</span>NHL<span style=\"font-family:宋体\">和职业足球比赛都开始利用</span>VR<span style=\"font-family:宋体\">来提升观众的体验。</span></p><p style=\"text-align:left;text-indent:28px\">VR<span style=\"font-family:宋体\">赋予了体育赛事新的观看方式，让球迷仿佛置身于球赛现场。但是目前的</span>VR<span style=\"font-family:宋体\">体育对人们来说还是有些乏味和遥远。虽然通过</span>VR<span style=\"font-family:宋体\">头显观看比赛会感觉自己好像就在体育场里，但是周围并没有欢呼的球迷，没有零食和啤酒，效果也没有真实到好像自己就在球场中央一样。另外，在一些情况下，</span>VR<span style=\"font-family:宋体\">也并没有呈现出</span>360<span style=\"font-family:宋体\">º视角。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">不过，体育数字化只是刚刚开始，随着</span>VR<span style=\"font-family:宋体\">技术的进步，</span>VR<span style=\"font-family:宋体\">一定会给我们带来更多、更好的观看体验。当有一天</span>VR<span style=\"font-family:宋体\">真的可以实现我们仿佛置身在球场中央，可能就没有人会拒绝用</span>VR<span style=\"font-family:宋体\">观看体育比赛了。但在那之前，我们可能还需要给</span>VR<span style=\"font-family:宋体\">体育多一些时间和包容。</span></p><p style=\"text-align:left;text-indent:28px\">3<span style=\"font-family:宋体\">.房地产</span></p><p style=\"text-align: center; text-indent: 28px;\"><span style=\"font-family:宋体\"><img src=\"/static/upload/news/imgs/20180423/1524463347296919.png\" title=\"多媒体展厅设计，多媒体动画展示，西安一笔一划\" alt=\"多媒体展厅设计，多媒体动画展示，西安一笔一划\" width=\"550\" height=\"357\"/><br/></span></p><p style=\"text-indent: 28px;\"><span style=\"font-family:宋体\"></span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">有了</span>VR<span style=\"font-family:宋体\">技术，人们不再需要四处奔波寻找房子，只需戴上</span>VR<span style=\"font-family:宋体\">头显，静坐客厅中就可以体验新房子。想象一下，如果能够无需到达新房子就能在那里漫步，甚至可以看到房子的每个角落和布局，岂不妙哉。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">纽约的一家公司</span>VR Global<span style=\"font-family:宋体\">，正在创建虚拟的家庭漫游，以便让潜在买家远程访问房屋。因此，购房者能够在法国享用晚餐时也能“在纽约看房”。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">苏富比国际地产公司（</span>Sotheby<span style=\"font-family:宋体\">）是另一家涉足此领域的公司，该公司利用</span>VR<span style=\"font-family:宋体\">在洛杉矶、汉普顿和纽约销售价值数百万美元的住宅。房地产经纪人可以远程导游，还可以看到客户的视野。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">这个行业还有很长的路要走。仍然有很多人存在质疑，因为视频的制作成本很高，而且并不确定没有头显的买家是否会仅仅为了远程看房，而去购买一台头显。但随着</span>VR<span style=\"font-family:宋体\">变得更加主流，预计房地产</span>VR<span style=\"font-family:宋体\">也会获得推动力。</span></p><p style=\"text-align:left;text-indent:28px\">4<span style=\"font-family:宋体\">.医疗保健</span></p><p style=\"text-indent: 28px; text-align: center;\"><span style=\"font-family:宋体\"><img src=\"/static/upload/news/imgs/20180423/1524463406581574.png\" title=\"多媒体展厅设计，多媒体动画展示，西安一笔一划\" alt=\"多媒体展厅设计，多媒体动画展示，西安一笔一划\" width=\"550\" height=\"302\"/><br/></span></p><p style=\"text-indent: 28px;\"><span style=\"font-family:宋体\"></span></p><p style=\"text-align:left;text-indent:28px\">VR<span style=\"font-family:宋体\">在医疗保健领域的潜力是无限的。经过多年的研究，科学家和医疗专业人员终于可以用全新的方式进行培训、诊断和治疗。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">比如利用“</span>VR<span style=\"font-family:宋体\">暴露疗法”来治愈患有恐高症、幽闭恐惧症、社交恐惧症的人群。创造一个虚拟环境，让患者置身于令他们身心恐惧的世界，进行循序渐进的反复刺激，使他们逐渐习惯适应。更神奇的是，</span>VR<span style=\"font-family:宋体\">还可以用作老年痴呆症的延缓、运动神经的康复等等，甚至还可以用来镇痛。</span></p><p style=\"text-align:left;text-indent:28px\">VR<span style=\"font-family:宋体\">还可以被用于治疗创伤后应激障碍（</span>PTSD<span style=\"font-family:宋体\">）的士兵。</span>VR<span style=\"font-family:宋体\">提供的受控环境可帮助患者学习如何处理可能会导致破坏性行为的情况。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">利用</span>VR<span style=\"font-family:宋体\">进行培训是</span>VR<span style=\"font-family:宋体\">为医疗领域提供最多便利的一种应用。现在外科医生可以在模拟的环境中进行训练，与真实手术情况基本一致，且不会给患者带来风险。斯坦福大学开发了一种</span>VR<span style=\"font-family:宋体\">手术模拟器，可以为那些正在进行培训的人提供触觉反馈。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">这仅仅是个开始</span></p><p style=\"text-align: left; text-indent: 28px;\"><span style=\"font-family:宋体\">这些只是</span>VR<span style=\"font-family:宋体\">带来变化的一部分行业。我们仍处于计算机新时代，</span>VR<span style=\"font-family:宋体\">、</span>AR<span style=\"font-family:宋体\">和</span>MR<span style=\"font-family:宋体\">技术必将继续在未来的岁月中为我们的生活带来新的变化。</span></p>');
INSERT INTO `news_dtl` VALUES (7, 7, '<p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">近几年来，随着软硬件技术的发展，展馆展厅建设需求也日益增多，在展厅设计中，如果说空间的元素设计风格是灵魂，那多媒体的设计展项就是展厅的血肉之躯，也就是打造一个“创意和科技”的数字体验环境，灵魂和血肉的完美融合才的展厅。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">空间设计中，展厅的设计成功的关键就在吸引到了多少的参观者，这是展现出展馆展厅设计的特别，最独特的就是想要让大家都认识到咱们的展馆展厅设计的创意，是否有会打动参观者，当然这是一种外观的设计需要有新意，同时展馆展厅内的展品也是非常重要的，优秀的展馆展厅设计追求的是视觉吸引力和冲击力。同时，要能很好的与展出内容相互结合，从整个设计到内容上，都需要符合展馆展厅的主题，有效的融合为一体，这样才会引起参观者兴趣，加深记忆度和识别度！</span></p><p style=\"text-align:left\">&nbsp;</p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">多媒体展项设计是多种媒体的综合，一般包括文本，声音和图像等多种媒体形式。多媒体的应用可以将参观者带入一个全新的感知、认知领域，将时尚、科技和互动性完美的结合在一起。在企业展厅设计原有的功能区、休息区、会议区等人性化、科技化。这样，不但提高了企业文化展示范围，也增强了企业管理及规划展示效果，从而让参观者及相关领导增加对企业的深刻印象。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">在企业展厅设计中，多媒体技术可以贯穿整个软装和硬装，是企业展厅由静态向动态延伸，使得软装和硬装不再是单一孤立的，多媒体的出现，使整个企业展厅充满了生机和活力，例如地面互动，它不仅能供观众欣赏，更可以互动，将观众完全融入到该场景，融入到该展厅，乐此不彼，终身回味。</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">如果利用好时下展厅中必不可少的展项技术引起观众产生共鸣呢？</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">以绚丽的数字媒体搭建气派非凡的企业展厅，以透彻的智能演绎各种前所未有的用户体验，以往只有苹果、微软这类全球巨擘才能实现的“科技</span>+<span style=\"font-family:宋体\">创意”世界，如今随着数字环境构想的提出，正开始成为每一家企业触手可及的现实展望。</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">开放吸纳各类先进技术的数字环境还是一个良好的企业新品展示平台。通过各种增强现实技术的应用，企业展厅可以轻松实现产品实物与虚拟世界的融汇，从而全方位展示新产品的核心卖点，并且让每一个细节都变得可感知和互联互通，以变幻无穷的新奇体验加深观众对产品的认知。数字环境开创性地将数字媒体技术创新与创意高度融合，以“科技</span>+<span style=\"font-family:宋体\">创意”的深层次协调带来完美的展厅建设方案，渐渐成为展览展示革命性的符号。</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 大屏幕拼接显示系统</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 大屏幕拼接显示系统已广泛应用于指挥控制、监控显示、会商会议等复杂显示决策过程，并且在展览展示、广告、娱乐领域的应用越来越流行。经过业内厂商多年的技术开发和努力，目前大屏幕拼接显示技术已经发展到了相当成熟的阶段。多媒体、数字化企业展厅整体装修采用的是多媒体展示互动技术，远程视频展示技术，和数字化的营销系统，包括网络销售订购系统，网络推广营销系统，结合构成了一个现代的多媒体数字化展示中心，它是一个系统工程，是多媒体技术与数字化技术的有效结合，达到展示营销的目的。</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 边缘融合大屏幕</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 边缘融合大屏幕可采用多通道边缘融合技术实现六面体、圆柱形等边缘融合大屏幕，使观众从不同角度欣赏内容，立体的展现水族馆中鲨鱼游弋的乐趣。如多媒体、数字化售楼中心整体装修采用的是多媒体展示互动技术，多媒体沙盘展示技术，远程视频看房，互动地面展示技术和数字化的营销系统，相互结合构成了一个现代的多媒体数字化营销中心。</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 多屏联动系统</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 多屏联动系统采用</span>3C<span style=\"font-family:宋体\">技术，通过触控一体机联动控制多个大屏幕，即实现了人机交互，又展现了更丰富的内容。触控一体机的显示内容分为多个对象，联动多个屏幕显示同一对象的不同的相关内容，如文字、图片、视频等。</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 异形融合大屏幕系统</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 异形屏幕的灵活拼接设计越来越多的受到广泛的应用，能把它制作成我们心目中的各种规则和不规则形状来显示丰富多彩的画面，吸引参观者的眼球……</span> <span style=\"font-family:宋体\">他可以支持任意数量显示设备的任意角度，任意位置，任意混合尺寸，任意输</span> <span style=\"font-family:宋体\">出分辨率，结构上的多样性使其能够适用于各种空间、各类场合的应用需求。</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 互动大屏幕</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 互动大屏幕系统为客户提供高性价比的展览展示，采用多种显示技术，参观者只要轻轻触摸屏幕图片、文字</span>,<span style=\"font-family:宋体\">就可以进行信息观赏，即展现了布展者的主题，又让观赏者体验到互动触摸的趣味。</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 大屏全融合实物互动</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 大屏幕全媒体融合技术，实物，光键盘与触摸屏技术相结合在一起，实现即时播放的效果。互动投影系统是融合了当今世界最新科技的广告和娱乐互动系统。它可以提供多种信息，包括人们所想或所需的各种画面和图案，以其独特方式表达内容的新型广告形式。打破了传统静态广告毫无娱乐性的传统悬挂风格，真正实现了广告与受众的互动。互动影音系统能吸引人群驻足观看，并参与互动，具有很好的宣传效果。在接触表面上及交互区域内没有任何传感器件和线路，实现手指或指状物及其它物体在大屏幕上的互动，实现人机自然交互，摆脱了尺寸对人机交互的限制。</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">产品包括橱窗式投影互动，地面投影互动，桌面投影互动等系统。可以实现空中翻书，空中遥指，电子沙盘，边缘融合，互动游戏，环幕球幕等功能。提供软件技术支持，包括单套投影互动系统多媒体效果制作，互动实现，以及多投影屏幕无缝拼接技术，联动技术。</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 智能灯光系统</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">&nbsp; 采用冷光灯，避免设备等温度过高产生其他不良影响，</span>led<span style=\"font-family:宋体\">混色灯，摇头电脑灯等。以制作精细的实体模型为基础，结合声、光、电、影像，通过专业的同步控制软件对声、光、影像同步控制，实时独立展现各规划路线，配套和理念。展现出惟妙惟肖的效果和炫丽多彩的视觉冲击，以生动形象的姿态向参观者演示地方各个区域及街道、生态环境、人居，吸引参观者参与光电沙盘的互动</span>.</p><p style=\"text-align:left\">&nbsp;</p><p><br/></p>');
INSERT INTO `news_dtl` VALUES (8, 8, '<p style=\"text-align:left\"><span style=\"font-family: 宋体\">水幕投影顾名思义就是在水幕或水帘上投射影像，而雾幕投影的载体是“雾气”多数人把他们的定义混淆。他们在投射影像的效果上完全不同。</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">雾屏产品特点</span></p><p style=\"text-align:left\">&nbsp;&nbsp;&nbsp;&nbsp;1<span style=\"font-family:宋体\">、雾屏系统是使用超声集成雾化发生器产生大量微粒雾，结合空气流动学原理而制造出来的能产生形成平面雾气的屏幕。利用的微粒雾平面特性作为光路载体，再将特制的流畅生动的媒流体投射在该载体上便可以在空间中形成虚幻立体的影像，形成一种三位空间立体图像，给人一种新的立体视觉享受。人可以在这种空幻影像中随意穿梭，造成真人可进入视频画面的虚幻效果，是一种新型的展示媒体，可以进行改变传统不能穿透屏幕。介于雾屏可虚幻成像的独有特性，使其有着广阔的市场前景。</span></p><p style=\"text-align:left\">&nbsp;&nbsp;&nbsp;&nbsp;2<span style=\"font-family:宋体\">、雾屏系统</span>,<span style=\"font-family:宋体\">内部采用集成式超音波机芯</span>,<span style=\"font-family:宋体\">无机械驱动、宁静无噪音、雾化效率高、产生一定浓度负离子，故障率低、维护简单。</span></p><p style=\"text-align:left\">&nbsp;&nbsp;&nbsp;&nbsp;3<span style=\"font-family:宋体\">、箱体采用全不锈钢喷塑处理，外形美观、实用，并且配有标准补水口、放水开关及溢水口，自动控制水位等。</span></p><p style=\"text-align:left\">&nbsp;&nbsp;&nbsp;&nbsp;4<span style=\"font-family:宋体\">、雾气原材料：普通自来水，环保节能。</span></p><p style=\"text-align:left\">&nbsp;&nbsp;&nbsp;&nbsp;5<span style=\"font-family:宋体\">、每个雾屏单元可以单独使用，也可以组合使用，组成各种形状大下，如平面，弧面等。</span></p><p style=\"text-align:left\">&nbsp;&nbsp;&nbsp;&nbsp;6<span style=\"font-family:宋体\">、雾屏发生装置可将计算机、程序、红外线、激光、雷达通过投影机光速通过风场投射到雾屏上，形成多种动感、虚拟多种图像。</span></p><p style=\"text-align:left\">&nbsp;&nbsp;&nbsp;&nbsp;7<span style=\"font-family:宋体\">、计算机、</span>VCD<span style=\"font-family:宋体\">、</span>DVD<span style=\"font-family:宋体\">等通过投影机或激光机光速通过风场投射到雾屏上，形成多种图像。</span></p><p style=\"text-align:left\">&nbsp;&nbsp;&nbsp;&nbsp;8<span style=\"font-family:宋体\">、雾屏雾气无毒、无味、环保并产生负离子，对空气还有净化作用，游客可以与雾屏尽情互动。</span></p><p style=\"text-align:left\">&nbsp;&nbsp;&nbsp;&nbsp;9<span style=\"font-family:宋体\">、雾屏的雾气不会在房间聚积停留，电源关掉，完全气化。</span></p><p style=\"text-align:left\"><span style=\"font-family:宋体\"></span></p><p style=\"text-align:left\">&nbsp;&nbsp; 11<span style=\"font-family:宋体\">、设备同时具有吊式和落地式两种安装方式，既方便了设备安装，又提高了空间的使用效率。</span></p><p style=\"text-align: left;\">&nbsp;&nbsp; 12<span style=\"font-family:宋体\">、设备整体设计经过反复试验及多年实际检测，结构紧凑，搭配合理，无大功率电机，工作时无噪音。</span></p>');
INSERT INTO `news_dtl` VALUES (9, 9, '<p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">投影技术的突飞猛进大大满足了人们对视听体验的需求，全息投影技术已然成为目前投影技术中最为先进神奇的一种。</span>3D<span style=\"font-family:宋体\">技术的出现让电影院迎来了又一个春天，但是与现在的全息投影技术相比较，</span>3D<span style=\"font-family:宋体\">技术就要处于劣势了。</span></p><p style=\"text-align:left;text-indent:28px\">3D<span style=\"font-family:宋体\">技术是利用光的原理和人眼看物的原理，再加上</span>3D<span style=\"font-family:宋体\">眼镜使人产生立体感觉。但是全息投影技术时不需要佩戴设备也可以看到立体的影像，而且展示效果相当生动逼真。火米互动为大家分享一些全息投影技术的优势：</span></p><p style=\"text-align:left;text-indent:28px\">1<span style=\"font-family:宋体\">、全息投影技术有着其他投影技术无法相比的优势，最直接的一点就是直接可以通过肉眼看虚拟的事物；</span></p><p style=\"text-align:left;text-indent:28px\">2<span style=\"font-family:宋体\">、全息投影技术不再受传统的</span>3D<span style=\"font-family:宋体\">声光电的限制，投影出来的画面清晰度高，色彩鲜明，体验效果让人为之震撼；</span></p><p style=\"text-align:left;text-indent:28px\">3<span style=\"font-family:宋体\">、全息投影还有一大特点就是立体感很强，能够让人沉浸在虚拟影像中，可以</span>360<span style=\"font-family:宋体\">度感受；</span></p><p style=\"text-align:left;text-indent:28px\">4<span style=\"font-family:宋体\">、全息投影的展示不受场所的限制，可以支持多角度全息投影，以不同的形式展现出来；</span></p><p style=\"text-align: left; text-indent: 28px;\"><span style=\"font-family:宋体\">全息投影越来越多的被运用到生活中去，已经成为最受欢迎的投影方式之一。</span></p>');
INSERT INTO `news_dtl` VALUES (10, 10, '<p style=\"text-align:left\"><span style=\"font-family: 宋体\">多通道</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影</span></a>(<span style=\"font-family:宋体\">弧幕</span><a href=\"http://www.szzs360.com/szyy/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">影院</span></a>)<span style=\"font-family:宋体\">系统是指采用多台</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影机</span></a><span style=\"font-family:宋体\">组合而成的多通道大屏幕展示系统，它比普通的标准</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影</span></a><span style=\"font-family:宋体\">系统具备更大的显示尺寸、更宽的视野、更多的显示内容、更高的显示分辨率，以及更具冲击力和沉浸感的视觉效果。</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">由于</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影机</span></a><span style=\"font-family:宋体\">的工作原理，使其无法实现像素精确定位，同时由于</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影</span></a><span style=\"font-family:宋体\">显示区域的非规则问题，无缝的图像多通道</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影</span></a><span style=\"font-family:宋体\">系统在组建中一直存在如下问题：</span></p><p style=\"text-align:left\">1.<span style=\"font-family:宋体\">如果</span><a href=\"http://www.szzs360.com/product/category/2867_1.htm\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影幕</span></a><span style=\"font-family:宋体\">不是平面幕、或</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影机</span></a><span style=\"font-family:宋体\">的</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影</span></a><span style=\"font-family:宋体\">方向不正确，将导致在幕上的图像变形；</span></p><p style=\"text-align:left\">2.<span style=\"font-family:宋体\">多通道间的图像的拼接产生的白色亮带或黑缝；</span></p><p style=\"text-align:left\">3.<span style=\"font-family:宋体\">另外各个</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影机</span></a><span style=\"font-family:宋体\">的</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影</span></a><span style=\"font-family:宋体\">亮度色彩等参数不一定一致；</span></p><p style=\"text-align:left\">4.<span style=\"font-family:宋体\">图像分辨率通常较大（图像清晰的需要），图像信号源同步与切割问题；</span></p><p style=\"text-align:left\">5.<span style=\"font-family:宋体\">多通道图像融合带的产生与调整问题；</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">多通道</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影</span></a><span style=\"font-family:宋体\">光路显示效果</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">为了解决这些问题，必须进行数字图像融合，对各通道的输出图像进行非线性几何校正，</span><a href=\"http://www.szzs360.com/company/w30.htm\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">边缘融合</span></a><span style=\"font-family:宋体\">以及颜色校准，以下是双通道</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影</span></a><span style=\"font-family:宋体\">系统的几种拼接效果对比：</span></p><p style=\"text-align:left\"><span style=\"font-family: 宋体\">•</span> <span style=\"font-family:宋体\">硬边：即两台</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影</span></a><span style=\"font-family:宋体\">仪的边沿对齐，无重叠部分。显示效果上表现为整幅画面被一道缝分割开。如果</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影</span></a><span style=\"font-family:宋体\">仪边缘未做亮度增强处理，该接缝显示为黑色；如果</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333\">投影</span></a><span style=\"font-family:宋体\">仪边缘做了亮度增强处理，该接缝显示为白色。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family: 宋体\"></span><span style=\"font-family:宋体\"></span></p><p style=\"text-align: left;\"><span style=\"font-family: 宋体\">•</span>&nbsp;<a href=\"http://www.szzs360.com/company/w30.htm\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:宋体;color:windowtext;text-underline:none\">边缘融合</span></a><span style=\"font-family:宋体\">：与简单重叠方法相比，左</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:宋体;color:windowtext;text-underline:none\">投影</span></a><span style=\"font-family:宋体\">仪的右边重叠部分的亮度线性衰减，右</span><a href=\"http://www.szzs360.com/projector/\" target=\"http://www.szzs360.com/news/2016/5/_blank\"><span style=\"font-family:宋体;color:windowtext;text-underline:none\">投影</span></a><span style=\"font-family:宋体\">仪的左边重叠部分的亮度线性增加。在显示效果上表现为整幅画面亮度完全一致。</span></p>');
INSERT INTO `news_dtl` VALUES (11, 11, '<p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">廉政教育的开展形式和传播载体越发的多元化，如何更加有效引导参观者认识腐败现象，培养廉洁性意识，从而弘扬正洁风气，陶冶岛的情操，让警钟长鸣是廉政教育需要首先解决的问题。推行廉政教育的一个主要形式就是廉政展厅的设计，现在也是新的一种文化宣传方式。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">最近几年廉政展厅已经成为了廉政教育的重要窗口，因为这种展厅可以将无形变化为有形，传播形式新颖，互动性强。容易让人们在看到图文结合的展现形式之后产生共鸣，让老师们印象深刻。那么在对于廉政展厅进行设计的时候，设计的要点有哪些？</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">首先，廉政展厅能都有效地整合各种传播要素，并将其化繁为简地呈现出来。其内容更加生动，表现形式更加灵活。展厅作为一种创新的教育形式可以将不同的内容分割开来，并将其运用最合理的方式展示出来，以人为本，使传播效果最大化。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">其次，教育廉政展厅具有很多独特的特点，诸如可观，可触摸，可衡量，可感受，易于表达等等。廉政展厅是一个实体展厅，能够将廉政教育中理念政策和观点之类的东西从无形转变成有形，让参观者思想上收到启迪，心灵上有所触动，从内心里接收这种形式。</span></p><p style=\"text-align: left;\"><span style=\"font-family: 宋体\">最后，廉政教育展厅集宣传，教育，展示等多种功能于一身，展示典型，宣传文化，宣扬政策，弘扬正气，在设计的时候一定要顾及到这几个原则和大方向。</span></p>');
INSERT INTO `news_dtl` VALUES (12, 12, '<p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">特色展厅在整个商品经营生态链中处于重要环节，发挥着十分重要的作用，也是企业创造价值的重要渠道。展销厅在我们的生活之中随处可见，尤其是在服饰行业中普及率极为广泛。利用展销厅对特色商品，时令商品，潮流商品，应季商品分别进行展示，能够以点带面的让展会参观者了解全面信息。首先在展销厅之中要明确主题。主题的含义在于确定一次展销厅所展示产品的类型，基于此类型的条件下再对展销厅所展示的产品进行安排。比如某服装品牌对于“春季最新款服饰”进行展示的时候，所展示的产品一定是最符合这一展厅主题的要求，也应该是商家最想展示出的一部分内容。其次是以何种场景为媒介，以何种技术为载体是展厅的策划设计者必须要想清楚的问题。</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">展厅设计怎样根据主题进行特色设计</span></p><p style=\"text-align:left;text-indent:28px\"><span style=\"font-family:宋体\">无论是虚拟展厅，数字展厅还是实体展厅，每一种展厅都有其他展厅不具有的优势和特点。展厅的构思设计是可以相互借鉴的，同样诸如</span>3D<span style=\"font-family:宋体\">技术，互联网技术，数字模拟技术等一系列展厅特色实现的载体是可以交叉运用的。目的是将特色展厅的效果以多元素的展示方式，多角度的创新思维，多技术的运用程度展示出来。最后特色展厅在设计前应该抓住“特色”二字进行有力的宣传，为本次特色展厅造势。</span></p><p style=\"text-align: left; text-indent: 28px;\"><span style=\"font-family:宋体\">因为特色展厅并不多见，如果不大力加以宣传，可能参观者会将特色展厅当成一般性的展厅并不能很好的抓住展厅的主题，从而不能领悟到特色展厅的特色所在，这样一来特色二字便将黯然失色，也枉费了设计者的一番良苦用心。如果按照以上三点原则对特色展厅进行策划，相信会取得不错的效果。</span></p>');
INSERT INTO `news_dtl` VALUES (13, 13, '<p><span style=\"font-family:宋体\"></span><span style=\"font-family:宋体\"> </span><span style=\"font-family:宋体\"></span></p><p><span style=\"font-family:宋体\">&nbsp; 展馆的信息化建设的目标就是建立数字化形态的展览馆。</span></p><p><span style=\"font-size:14px;font-family:宋体\">　　和传统的展览馆相比，数字化形态展览馆将使其与传统展览馆区别开来，其根本标志在于前沿科学信息技术的运用及管理上信息的数字化加工、挖掘及科学利用。</span></p><p><span style=\"font-family:宋体\">　　</span><span style=\"font-family:宋体\">展馆的信息化建设，在软环境方面必须要满足展览馆数字化的条件（智能硬件、网络、数据采集、数据信息处理中心等），它是基础，也可谓是前提条件。</span></p><p><span style=\"font-family:宋体\">　　展览馆的信息化更加侧重于软环境的建设，实现了良好的软硬结合互补，打造差异化展馆创新经营的发展需求得以呼应。</span></p><p>　　1<span style=\"font-family:宋体\">、展馆的安全管理信息化</span></p><p><span style=\"font-family:宋体\">　　展馆是短时间内大量的人流量的集散聚集场地，安全将是第一要素。</span></p><p><span style=\"font-family:宋体\">　　那么在展馆的无死角监控领域、门禁系统、安防系统、消控系统、车库管理、照明控制、空气质量监控、重要物品（阀门、电闸、网关）监测等与展馆基础安全运营息息相关，利用物联网技术，将整个展馆在安全领域实现信息中心“中枢”化安全建设，统筹管理。</span></p><p>　　2<span style=\"font-family:宋体\">、稳定的数字化网络环境部署</span></p><p><span style=\"font-family:宋体\">　　在当前我国内的展馆，暂且不提网络的部署后在展馆方是否有对数据的采集，和后续的统计分析具备该意识和技术团队，单单就场馆现场的手机信号</span>4G<span style=\"font-family:宋体\">的稳定性，场馆</span>WIFI<span style=\"font-family:宋体\">环境的稳定性，便已经让组展方、参展商和观众们难以接受。</span></p><p><span style=\"font-family:宋体\">　　没有一个良好稳定的网络环境，那么对一场展会本身也好，展馆也罢，要做信息化建设，无异于天方夜谭。</span></p><p><span style=\"font-family:宋体\">展馆通过建设稳定的数字化网络环境，不但有助于展览会项目现场开展更多的信息化互动，提升展商和观众的体验，同时也将是展馆建设自身大数据中心的必备技术手段。</span></p><p>　　3<span style=\"font-family:宋体\">、对外展示系统信息化</span></p><p><span style=\"font-family:宋体\">　　对外信息化展示分为两个部分，一部分是面向互联网的信息展示；另一部分是面向来展览馆参观的观众的信息展示。</span></p><p><span style=\"font-family:宋体\">　　在互联网上展示展览馆信息，网上用户可以不受时间和空间的限制浏览网上展览馆的信息，全面的展示涉及到展览馆各个方面的信息，并可实现相对应的交互互动和促成交易。</span></p><p><span style=\"font-family:宋体\">　　面向线下展览馆参观的观众的信息展示，通过虚拟现实、三维空间、图像、声音、超文本链接等多媒体化的方式，亦或者通过与展馆微信公众号（或</span>APP<span style=\"font-family:宋体\">等）的结合，为步入展馆的参观者，做信息化的导览和咨询解答服务。</span></p><p>　　4<span style=\"font-family:宋体\">、对内办公系统自动化</span></p><p><span style=\"font-family:宋体\">　　办公自动化系统能够满足展览馆不同层次的管理者和工作人员高效率处理日常事务的工作需要，提供邮件服务、会议组织、日程安排、公文发送、个人办公、议题讨论、管理监督等功能，有效的协助展览馆领导顺利完成各项工作。</span></p><p><span style=\"font-family:宋体\">　　通过对内部的</span>OA<span style=\"font-family:宋体\">系统，</span>CRM<span style=\"font-family:宋体\">等系统的必要引入和使用，必须能够确保从高层次到低层次的各部门，以及所有有关的办公人员都可以在桌面计算机上处理日常工作，在网络上完成绝大部分公文的处理和传送工作，提高各部门之间的协作效率，及时获得各种信息和统计数据，知晓各项工作的进展情况，从而进行决策。</span></p>');
INSERT INTO `news_dtl` VALUES (14, 16, '<p>222222222222222<br/></p>');
INSERT INTO `news_dtl` VALUES (15, 17, '<p>555555555555555<br/></p>');
INSERT INTO `news_dtl` VALUES (16, 18, '<p>555555555555555<br/></p>');
INSERT INTO `news_dtl` VALUES (17, 19, '');

-- ----------------------------
-- Table structure for node
-- ----------------------------
DROP TABLE IF EXISTS `node`;
CREATE TABLE `node`  (
  `id` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1启用2禁止',
  `level` smallint(6) UNSIGNED NOT NULL COMMENT '1项目级别2模块级别3操作级别',
  `pid` smallint(6) UNSIGNED NOT NULL DEFAULT 0,
  `sort` smallint(6) UNSIGNED NOT NULL DEFAULT 0,
  `icon` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_show` tinyint(1) NOT NULL DEFAULT 1,
  `info` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '节点描述',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of node
-- ----------------------------
INSERT INTO `node` VALUES (1, 'admin', '项目后台', 1, 1, 0, 1, '&#xe68e;', 1, '');
INSERT INTO `node` VALUES (2, 'Node', '节点管理', 1, 2, 1, 10, '&#xe62e;', 1, '节点管理');
INSERT INTO `node` VALUES (3, 'add', '添加节点', 1, 3, 2, 12, '', 1, '');
INSERT INTO `node` VALUES (4, 'edit', '编辑节点', 1, 3, 2, 13, '', 2, '');
INSERT INTO `node` VALUES (5, 'del', '删除节点', 1, 3, 2, 14, '', 2, '');
INSERT INTO `node` VALUES (6, 'Pro', '服务管理', 1, 2, 1, 110, '&#xe650;', 1, '');
INSERT INTO `node` VALUES (7, 'add', '添加服务', 1, 3, 6, 114, '', 1, '');
INSERT INTO `node` VALUES (8, 'edit', '编辑服务', 1, 3, 6, 118, '', 2, '');
INSERT INTO `node` VALUES (9, 'del', '删除服务', 1, 3, 6, 119, '', 2, '');
INSERT INTO `node` VALUES (10, 'News', '新闻管理', 1, 2, 1, 90, '&#xe635;', 1, '4556');
INSERT INTO `node` VALUES (11, 'add', '添加新闻', 1, 3, 10, 92, '', 1, '');
INSERT INTO `node` VALUES (12, 'lists', '节点列表', 1, 3, 2, 11, '', 1, '');
INSERT INTO `node` VALUES (13, 'lists', '服务列表', 1, 3, 6, 113, '', 1, '');
INSERT INTO `node` VALUES (14, 'lists', '新闻列表', 1, 3, 10, 91, '', 1, '');
INSERT INTO `node` VALUES (15, 'edit', '编辑新闻', 1, 3, 10, 93, '', 2, '修改新闻内容');
INSERT INTO `node` VALUES (16, 'addcate', '添加分类', 1, 3, 6, 117, '', 1, '');
INSERT INTO `node` VALUES (17, 'Project', '案例管理', 1, 2, 1, 50, '&#xe616;', 1, '案例管理');
INSERT INTO `node` VALUES (18, 'add', '添加案列', 1, 3, 17, 52, '', 1, '');
INSERT INTO `node` VALUES (19, 'lists', '案例列表', 1, 3, 17, 51, '', 1, '');
INSERT INTO `node` VALUES (20, 'edit', '编辑案例', 1, 3, 17, 53, '', 2, '');
INSERT INTO `node` VALUES (21, 'Personnel', '招聘管理', 1, 2, 1, 60, '&#xe652;', 1, '');
INSERT INTO `node` VALUES (22, 'add', '添加招聘', 1, 3, 21, 62, '', 1, '');
INSERT INTO `node` VALUES (23, 'lists', '招聘列表', 1, 3, 21, 61, '', 1, '');
INSERT INTO `node` VALUES (24, 'Ads', '广告管理', 1, 2, 1, 70, '&#xe60b;', 1, '');
INSERT INTO `node` VALUES (25, 'add', '添加图片', 1, 3, 24, 72, '', 1, '');
INSERT INTO `node` VALUES (26, 'lists', '广告列表', 1, 3, 24, 71, '', 1, '');
INSERT INTO `node` VALUES (27, 'edit', '编辑职位', 1, 3, 21, 63, '', 2, '');
INSERT INTO `node` VALUES (28, 'edit', '编辑图片', 1, 3, 24, 73, '', 2, '编辑网站图片广告');
INSERT INTO `node` VALUES (29, 'cateList', '分类列表', 1, 3, 6, 116, '', 1, '');

-- ----------------------------
-- Table structure for pmenu
-- ----------------------------
DROP TABLE IF EXISTS `pmenu`;
CREATE TABLE `pmenu`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `alt` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_show` tinyint(1) NOT NULL DEFAULT 1,
  `img` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sort` tinyint(2) NOT NULL DEFAULT 0,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '网站描述',
  `keywords` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '网站关键词',
  `keys` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'title关键词',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pmenu
-- ----------------------------
INSERT INTO `pmenu` VALUES (1, '首页', '', 1, '', 'index/index/index', 0, ' 声光电禁毒教育展厅  数字化禁毒教育展厅  西安一笔一画', ' 声光电禁毒教育展厅  数字化禁毒教育展厅  西安一笔一画', ' 声光电禁毒教育展厅  数字化禁毒教育展厅  西安一笔一画');
INSERT INTO `pmenu` VALUES (2, '关于我们', '', 1, '', 'index/index/about', 1, '禁毒展览馆  消防教育馆  交通安全教育展览馆  西安一笔一画', '禁毒展览馆  消防教育馆  交通安全教育展览馆   西安一笔一画', '禁毒展览馆  消防博物馆  西安一笔一画');
INSERT INTO `pmenu` VALUES (4, '服务项目', '', 1, '', 'index/pro/lists', 2, '声光电禁毒教育展厅设计  禁毒数字教育馆  西安一笔一画', '声光电禁毒教育展厅设计  禁毒数字教育馆  西安一笔一画', '声光电禁毒教育展厅设计  禁毒数字教育馆  西安一笔一画');
INSERT INTO `pmenu` VALUES (5, '工程案例', '', 1, '', 'index/project/lists', 3, '数字禁毒展览馆  多媒体禁毒展馆  西安一笔一画', '数字禁毒展览馆  多媒体禁毒展馆  西安一笔一画', '数字禁毒展览馆  多媒体禁毒展馆  西安一笔一画');
INSERT INTO `pmenu` VALUES (6, '加入我们', '', 1, '', 'index/personnel/lists', 6, '人才招聘  西安一笔一画', '人才招聘  西安一笔一画', '人才招聘  西安一笔一画');
INSERT INTO `pmenu` VALUES (7, '新闻中心', '', 1, '', 'index/news/lists', 4, '多媒体禁毒趋势  禁毒教育基地设计  西安一笔一画', '多媒体禁毒趋势  禁毒教育基地设计  西安一笔一画', '多媒体禁毒趋势  禁毒教育基地设计  西安一笔一画');
INSERT INTO `pmenu` VALUES (8, '联系我们', '', 1, '', 'index/index/contact', 7, '联系我们  西安一笔一画', '联系我们  西安一笔一画', '联系我们  西安一笔一画');
INSERT INTO `pmenu` VALUES (9, '展厅设计', '', 2, '', 'index/exhib/lists', 5, '', '', '');

-- ----------------------------
-- Table structure for pro
-- ----------------------------
DROP TABLE IF EXISTS `pro`;
CREATE TABLE `pro`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `alt` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `thumb` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_show` tinyint(1) NOT NULL DEFAULT 1,
  `addtime` bigint(11) NOT NULL,
  `keys` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `keywords` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pro
-- ----------------------------
INSERT INTO `pro` VALUES (1, 1, '电子翻书', '12', '34', 'upload\\pro\\thumb/5aebcba3f1cd1.png', 1, 1525417699, '电子翻书  西安一笔一画', '', '');
INSERT INTO `pro` VALUES (2, 2, '互动投影', '', '', 'upload\\pro\\thumb/5aec0a5489b1e.png', 1, 1526289716, '互动投影 西安一笔一画', '', '');
INSERT INTO `pro` VALUES (3, 2, '球面互动投影', '', '', 'upload\\pro\\thumb/5aec0cfd82f97.png', 1, 1526288945, '球面互动投影  西安一笔一画', '', '');
INSERT INTO `pro` VALUES (4, 4, '环幕/弧幕影院', '', '', 'upload\\pro\\thumb/5aec10ac78574.png', 1, 1525420523, '环幕/弧幕影院  西安一笔一画', '', '');
INSERT INTO `pro` VALUES (5, 4, '中央控制系统', '', '', 'upload\\pro\\thumb/5aec121b8c433.png', 1, 1526289642, '中央控制系统  西安一笔一画', '', '');
INSERT INTO `pro` VALUES (6, 4, '360度全息幻影成像', '', '', 'upload\\pro\\thumb/5aec17842b52d.png', 1, 1526289927, '全息成像  西安一笔一画', '', '');
INSERT INTO `pro` VALUES (7, 4, '虚拟讲解', '', '', 'upload\\pro\\thumb/5aec1aa7e2ec4.png', 1, 1525422762, '虚拟讲解  西安一笔一画', '', '');
INSERT INTO `pro` VALUES (8, 4, '空气雾幕立体成像', '', '', 'upload\\pro\\thumb/5aec1acd7910c.png', 1, 1525423085, '空气雾幕立体成像  西安一笔一画', '', '');
INSERT INTO `pro` VALUES (9, 4, '互动投影沙盘', '', '', 'upload\\pro\\thumb/5aec1da6a5dbb.png', 1, 1526290008, '互动投影沙盘  西安一笔一画', '', '');
INSERT INTO `pro` VALUES (10, 4, '全息数字沙盘', '', '', 'upload\\pro\\thumb/5aec1ed10de6f.png', 1, 1526290035, '全息数字沙盘  西安一笔一画', '', '');
INSERT INTO `pro` VALUES (11, 4, '三维立体数字沙盘', '', '', 'upload\\pro\\thumb/5aec20ff442e9.png', 1, 1526290060, '三维立体数字沙盘  西安一笔一画', '', '');
INSERT INTO `pro` VALUES (12, 4, '虚拟沙盘', '', '', 'upload\\pro\\thumb/5aec234d77a79.png', 1, 1526290090, '虚拟沙盘  西安一笔一画', '', '');
INSERT INTO `pro` VALUES (13, 3, '军事仿真沙盘', '', '', 'upload/pro/thumb/al1.jpg', 2, 1525424977, '军事仿真沙盘  西安一笔一画', '', '');
INSERT INTO `pro` VALUES (14, 4, '虚拟漫游系统', '', '', 'upload/pro/thumb/al1.jpg', 2, 1525422251, '虚拟漫游  西安一笔一画', '', '');
INSERT INTO `pro` VALUES (15, 4, '增强现实AR', '', '', 'upload/pro/thumb/al1.jpg', 2, 1525417699, '虚拟现实  西安一笔一画', '', '');

-- ----------------------------
-- Table structure for pro_cate
-- ----------------------------
DROP TABLE IF EXISTS `pro_cate`;
CREATE TABLE `pro_cate`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_show` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1显示',
  `thumb` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `alt` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sort` int(11) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `info` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pro_cate
-- ----------------------------
INSERT INTO `pro_cate` VALUES (1, '数字展厅', 1, 'upload\\thumb/5af95168ae4aa.jpg', '', 1, '', '数字展厅');
INSERT INTO `pro_cate` VALUES (2, '全息投影', 1, 'upload\\thumb/5af951830d845.jpg', '', 2, '', '全息投影');
INSERT INTO `pro_cate` VALUES (4, '虚拟现实', 1, 'upload\\thumb/5af9519804233.jpg', '', 3, '', '虚拟现实');
INSERT INTO `pro_cate` VALUES (5, '三维动画', 1, 'upload\\thumb/5af94ebd696b7.jpg', '', 4, '', '三维动画');
INSERT INTO `pro_cate` VALUES (9, '网络安全', 1, 'upload\\thumb/5af94eebb7623.jpg', '', 6, '', '网络安全');
INSERT INTO `pro_cate` VALUES (10, '软件开发', 1, 'upload\\thumb/5af94e2b9f7db.jpg', '', 5, '', '软件开发');

-- ----------------------------
-- Table structure for pro_dtl
-- ----------------------------
DROP TABLE IF EXISTS `pro_dtl`;
CREATE TABLE `pro_dtl`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pro_id` int(11) NOT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pro_dtl
-- ----------------------------
INSERT INTO `pro_dtl` VALUES (1, 1, '<h4 style=\"text-align: left;\">虚拟电子翻书定义</h4><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;虚拟电子翻书（又可称空中翻书、隔空翻书、虚拟翻书、魔幻书）外形犹如一本打开的书，在参观者面前呈现一本等离子电视方式或以投影机投影成像方式的虚拟书，参观者只需站在展台前方，用手在空中挥动做出翻书的动作，电子书就会随着手臂的左右挥动进行前后的翻页，同时也可以触摸投影画面上设置的书签进行查询浏览。书中包括有文字、图片、声音、图像、视频等多媒体信息。展厅可以将展馆的介绍和珍贵照片放入其中，供参观者浏览。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的产品区别于市场上同类产品的优势在于，不单可以通过人的挥手产生翻页效果，同时还能通过页面上的书签。当人的手放在书签上方时，书本将会按照书签的触发信号做出相应的反应，这一优点可以避免在一个很多页的书本上操作时，一次翻页过多而使人失去兴趣的问题。参观者可以通过书签自由跳转到所要了解的目录。</p><p><br/></p><p style=\"text-align: center;\"><img src=\"/static/upload/imgs/20180504/1525417430124426.jpg\" title=\"西安一笔一画有限公司\" alt=\"电子翻书 西安一笔一画\" width=\"400\" height=\"300\"/></p><p><br/></p><h4>实现方式</h4><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电子翻书原理是利用红外感应方式获取参观者的动作，并将该动作传输绐计算机进行处理，计算机内的应用程序则根据所捕捉的信号驱动多媒体动画进行翻书的效果表现。</p><h4>应用服务</h4><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电子翻书创意应用服务　电子翻书互动体验就是通过虚拟投影技术结合传统翻书体验，结合创意设计和互动科技在视觉上和体感上带给人们一种全新的互动交互体验，在支撑台上放上一本书页翻开的虚拟图书，当我们将手放在书页上空做一个翻书动作，眼前的虚拟图书会跟实际中翻书效果一样，还伴随着清脆的翻书音效，生动立体，栩栩如生，形象逼真这种互动式的虚拟翻书体验，它是将现代化的数字科技与传统的应用方式相结，它为人们保留着翻书的习惯性的动作方式，但从表现方式和展现形式方式上进行了现代化的科技应用，融合了声、光、影、音、文字等内容，在人机的交互体验上融入视觉与体感的双重感受，从而带给人们一种全新的视听互动享受和体验，电子翻书的虚拟现实应用，为社会化的信息传播在形式上得到一种超越式的创新与发展，在中国普通大众眼中，这种新颖的，主动式，精彩式互动体验形式，还是拥有巨大的试一试的体验式冲动与吸引的。影音数字科技的不断发展正在逐渐拉近人与信息之间的亲密度与互动率。\r\n 　<a class=\"lemma-album layout-right nslog:10000206\" title=\"辉煌数字影音科技电子翻书\" href=\"https://baike.baidu.com/pic/%E7%94%B5%E5%AD%90%E7%BF%BB%E4%B9%A6/6557910/2189519/64380cd7912397dd8386e4805982b2b7d1a287b2?fr=lemma&ct=cover\" target=\"_blank\" style=\"width:252px;\"></a></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电子互动翻书的专业化设计制作，在设计原理上基于计算机视觉的人机交互式技术的设计制作，为电子翻书传播主体呈现最完美的电子翻书虚拟与现实的互动式体验，只需要将手凌空做一个翻书的动作，在计算机智能效应和红外线感应下，就能为大家呈现真实逼真的翻书，这种形式无论是在视觉刺激下还是互动体验感受下，都必然带给大家一种前所未有的感觉和刺激，信息的展示以此变得更加智能化、多元化、丰富化、人性化，电子翻书技术的现实应用创新的不仅是一种体验快感，更是一种传播形式的人性化创新。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电子翻书的设计制作，在内容展现方式保持着“内容为王”经久不衰的传播真理，伴随着多媒体互动领域的高速发展，北京辉煌影音数字科技始终与行业保持着俱进融合创新的步伐，不断在传统的电子翻书互动技术上引入新型的互动体验方式，在传播形式上，结合现实环境中传播介质的应用范围和应用感受，创新性的推出投影方式电子翻书，液晶方式电子翻书，二维码方式电子翻书，触摸方式电子翻书时下几种最热门、最前沿、最受欢迎的体验交互方式，从而在传播和展示层面为客户量身打造电子翻书一站式解决方案，在视觉刺激和体感互动下将服务品牌以一种全新式的互动体验式方式通过虚拟的手段，栩栩如生、形象逼真的展现在现实世界中。致力于将电子翻书互动体验技术创新应用到极致，正真将科技改变生活的理念借助品牌创新性的传播的方式在现实生活中完美呈现和诠释。</p><h4>系统特点</h4><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、整体设计简洁、现代感强、真正的书体模型。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、无摄像头、传感器等外露，逼真的书效果。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、可实现两本或以上（需要定制）书内容的一键互换。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、一键开关机按钮，方便维护。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、根据内容设置章节按钮，感兴趣的位置迅速查找。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6、一键返回首页，或无人翻页时，自动回首页。</p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180504/1525417552455061.jpg\" title=\"西安一笔一画有限公司\" alt=\"电子翻书 西安一笔一画\" width=\"400\" height=\"300\"/></p><h4>运用范围</h4><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.政府机关市场应用界面</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要应用于行政服务部门、政府各职能管理部门及政府公共服务机构、高薪园区、及人才交流部门。作为服务简介、工作流程介绍、政策查询等等，大多应用于各服务大厅、如工商行政管理、税务管理、交通管理、公安法院、卫生防疫、新闻媒体会议中心、对外招商交流等等。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.金融、电信服务机构</p><p style=\"text-indent: 2em;\">主要用于服务介绍、产品介绍。大多采购联网机型。如：中国银行、交通银行、工商银行、建设银行等商业银行和电信部门及电信销售服务部门。</p><p style=\"text-indent: 2em;\">3.院校、教育机构</p><p style=\"text-indent: 2em;\">主要以大专院校采购为主，而求采购量较大，大多用于学校的多媒体建设、如图书馆、校史馆电化教学。作为院校校内电子杂志校报校刊的媒体。</p><p style=\"text-indent: 2em;\">4.报纸、报刊发行部门。</p><p style=\"text-indent: 2em;\">主要就是针对全国各大报纸及新闻机构。主机造型可按需要定做，其主要功能是有独立的广告页面，和任意独立设定专版例如人才招聘可随时更新，整体信息内容图片采用mms和gprs系统传输手段可即时更新，该产品是继电子售报机之后最新的换代产品。</p><p style=\"text-indent: 2em;\">5.博物馆、科技馆、陈列馆、校史馆、美术馆、图书馆</p><p style=\"text-indent: 2em;\">多媒体展示系统是数字化展馆专用器材，专为数字化馆设计开发的专业产品，采用了无线网络技术，节省了博物馆网络布线的改造成本，由数据管理系统软件，和数据采集编辑系统软件支持，可以在每一个展品旁边陈列，可以具备展品查询功能，复制品采购功能，展馆导游功能，语音解说功能等是现代数字化博物馆必备的互动多媒体展示器材，主馆可直接运用本公司软件直接与分展馆信息系统连网即可使用。</p><p style=\"text-indent: 2em;\">6.会议中心、展览中心</p><p style=\"text-indent: 2em;\">本产品属展览展示器材范畴，侧重于会议中心、展览中心的使用。只要提供给参展商应用在各大展会，目的是为参展商提供便携式、数字化展示器材。数字化会议中心和展览中心必备的展示器材。纷纷被全国各展览公司、会议公司应用在展台设计、搭建展会开幕或作为展场信息交流平台，展场平面图、导游图等等。成为提高展会和会议\r\n 规格的理想展示器材。</p><p style=\"text-indent: 2em;\">7.婚纱影楼、汽车展厅、企业形象</p><p style=\"text-align: left; text-indent: 2em;\">利用先进的计算机视觉技术，获取并识别人手指在投影屏幕上的位置，并通过计算，将手指在投影屏幕上的物理坐标转换为计算机屏幕的逻辑坐标及控制指令。实现用手指或其它自然物品在投影屏幕上的触摸选择，打开界面、转换画面、信息查询等控制功能</p><br/><p><br/></p>');
INSERT INTO `pro_dtl` VALUES (2, 2, '<h4>互动投影</h4><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;互动投影系统典型软件介绍： 互动模式：同时多人多点，无先后，帧率60 FPS ，同时1296点。检测算法：自由设置平滑及降噪算法，识别准确无误点，可自由设置灵敏度以适应多数硬件环境。响应时间：&lt;15毫秒的光量校正，互动校准无漂移。多屏互动：支持多摄像机，轻松实现超大画面互动投影。互动内容分辨率：\r\n 1024 x 768、2048 x 768、3072 x 768、4096 x 768、2048 x 1536 \r\n，更多分辨率可以定制。模板界面：可方便快捷的更换互动元素。操作系统：Windows xp 32bit/64bit Windows 7 \r\n32bit/64bit。显示支持：支持所有的投影机，液晶屏，LED大屏幕，等离子，数字视频墙等。摄像机安装：系统可设置图像水平、垂直翻转，自由设置摄像机捉捕范围，使摄像机正好匹配投影画面，摄像机安装更加方便。</p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180504/1525418612121396.jpg\" title=\"西安一笔一画有限公司\" alt=\"互动投影 多屏互动 空中翻书\" height=\"300\" width=\"400\"/></p><h4>系统简介</h4><h5>原理</h5><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;互动投影系统的运作原理首先是通过捕捉设备（感应器）对目标影像（如参与者）进行捕捉拍摄，然后由影像分析系统分析，从而产生被捕捉物体的动作，该动作数据结合实时影像互动系统，使参与者与屏幕之间产生紧密结合的互动效果。投影机投射的光线是可见光部分，它的红外部分被它内部的过滤膜过滤掉了，这样对于摄像机来讲它看不到投影机投射的内容，如果红外线如果强的话，摄像机就可以看见人体了。怎样加强摄像机看到的物体的图像呢，幸运的是市场上这样红外主动发射技术已经很成熟了，例如监控市场上卖的那种夜视摄像头就可以发射近红外(850 nm), 功率更大的有专门的远距离红外灯，不过夜视摄像头可以达到5m的距离，所以不需要了。夜视摄像头主动发射红外，然后ccd传感器接受红外，那么互动投影中最难的部分，人体与背景虚拟对象的分割就解决了，摄像机得到的是一副黑白的单色背景的包括人的图像。\r\n \r\n下一步，检测人体的运动，采用的是图像差分技术，差分就是把摄像头得到的连续两帧的图像进行相减，那么得到的是什么呢，得到的是运动的部分，所以说只要人在动，差分就会把动的部分截取下来。接下来就是分析得到的数据了，再将虚拟部分投射出来了。当然复杂的互动投影不只是这些技术，这些只是最基本的原理了，其间还涉及到摄像机的标定，光流法寻找运动方向,性能的优化处理，特殊的效果。</p><h5>类别</h5><p style=\"text-indent: 2em;\">互动投影系统根据环境极其行业特性的需要，主要有以下几种类别。</p><p style=\"text-indent: 2em;\">地面互动投影系统</p><p style=\"text-indent: 2em;\">桌面互动投影系统</p><p style=\"text-indent: 2em;\">壁面互动投影系统</p><p style=\"text-indent: 2em;\">互动背面投影系统</p><p style=\"text-indent: 2em;\">橱窗互动投影系统</p><p style=\"text-indent: 2em;\">立面互动投影系统</p><p style=\"text-indent: 2em;\">台面互动投影系统</p><p style=\"text-indent: 2em;\">空中翻书投影系统</p><p style=\"text-indent: 2em;\">空中遥指投影系统</p><p style=\"text-align:center\"><img src=\"http://www.ybyh.c/static/upload/imgs/20180504/1525418721645089.jpg\" title=\"西安一笔一画有限公司\" alt=\"互动多媒体 企业展厅 互动体验\" height=\"300\" width=\"400\"/></p><h4>发展趋势</h4><h5><strong>互动投影的发展趋势</strong></h5><p style=\"text-indent: 2em;\">由于传统互动投影技术原理的局限（只能从正面捕获人体的姿态信息），导致互动投影只能粗略的对人体的动作姿势进行定位，所以其应用场合只能局限在一些要求不高的场合。基于大屏幕的多点触摸技术的日益成熟，能够精确感知手指信息的多点触摸技术正在逐步取代传统的互动投影。</p><h5>创新应用</h5><p style=\"text-indent: 2em;\">互动投影技术最早应用领域是互动多媒体教育领域，的早期应用让教学慢慢淡化着传统粉笔教学模式，大大的增加了教学的方便和丰富了教学的内容，随着互动多媒体技术的不断创新与发展，互动投影技术应用的领域越来越广泛。互动投影采用计算机视觉技术和多媒体投影显示技术营造一种似真亦幻的动感的现代化全新的交互式互动体验，在传播信息内容层面，坚持内容吸引人心的观念，建立内容传递的最强认可性与最大价值化。通过投影技术和触摸技术可以有效的将消费者与屏幕之间互动起来，这种全新的互动体验感受无论是从视觉上面还是体感上面都能大大吸引着人们的眼球，</p><p style=\"text-indent: 2em;\">互动投影技术作为一种虚拟现实技术和动感捕捉技术，毋庸置疑在未来拥有广阔的发展空间，它将传统的单媒体和多媒体传播形式进行科技化的升级与应用，它改变的不仅仅是一种传播形式，更是一种传播理念，从传统的填鸭式的传播形式转换到以人体验的满足感为中心，通过奇幻的视觉效果和美妙的动感将传播信息与消费者的距离拉到最近，体验者在操控虚拟影像的过程中很自然地接受了现实环境中传递出的信息内容与元素，这种内在吸引力无疑很容易就能占据消费者的心智，从而达到一种互动情感的共鸣。</p><p style=\"text-indent: 2em;\">互动投影技术的发展推动这互动投影科技公司的顺势崛起，辉煌数字影音科技互动投影系统包括地面互动投影技术、背投互动投影技术、桌面互动投影技术、墙面互动投影技术，具体的互动展现方式有水波纹互动，翻转式互动，碰撞式互动，擦除式互动，避让式互动，跟随式互动等形式，体验者通过身体的肢体动作在互动投影技术的无缝配合下进行完美的主动式互动体验，无论是从视觉上，还是体感上，亦或是情感上，都能带给体验者一种前所未有的全新人与机完美融合的互动新体验。</p><h5>应用范围</h5><p style=\"text-indent: 2em;\">科技馆、规划馆、博物馆、行业展馆、主题展馆、企业展厅等诸多常年展馆/展览会现场/商场/大卖场/酒店宾馆/酒吧/迪厅KTV/新产品发布、促销活动/ 婚庆婚典/写字楼/演出场馆/广场等传统用多媒体技术无法实现的场所.。</p><h4>意义</h4><h5>广告变革</h5><p style=\"text-indent: 2em;\">广告领域的重大变革，互动投影系统可以提供多种信息包括人们所想或所需的各种画面和图案，以其独特的方式来表达的新型的广告形式，同时还打破了传统静态广告毫无娱乐性的传统悬挂风格；</p><p>互动影音系统的出现已代表着一种新型的现代广告模式，能吸引所有的人群驻足观看和互动，有很好的宣传效果。</p><h5>场所亮点</h5><p style=\"text-indent: 2em;\">消费场所的新亮点。互动投影系统奇幻的视觉效果和美妙的动感将吸引所有的顾客、现场观众甚至是路人的驻足停留和互动观看，并通过其互动画面和声音变幻使所有的顾客和观众参与其中，从而提升娱乐和休闲的内在吸引力，促进消费和再消费，特别适合于迪吧、酒店、KTV、酒吧等休闲娱乐场所。</p><p><br/></p>');
INSERT INTO `pro_dtl` VALUES (3, 3, '<p style=\"text-indent: 2em;\">球形投影，是一种新兴的展示技术，利用多通道边缘融合软件，在曲面上实现大尺寸图像的拼接和纠正，它打破了以往投影图像只能是平面规则图形的局限。宛如巫师手中变化无穷的魔法球，动感而梦幻。增加了用户获取信息的信息量，对于一些在球体上才能较好表现的事物提供了优秀的表现平台。<br/> &nbsp; &nbsp; &nbsp; 球形投影根据投影机所处位置的不同分为两种，一种是内投球，使用的投影机位于球体内部，将图像投射到球体内部；另一种是外投球，使用的投影机位于球体外部，将图像投射到球体外表面。</p><p style=\"text-indent: 2em; text-align: center;\"><img src=\"/static/upload/imgs/20180504/1525419689852373.jpg\" title=\"西安一笔一画有限公司\" alt=\"球面互动投影 球面全景影像\" height=\"300\" width=\"400\"/></p><p style=\"text-indent: 2em;\">球形投影是一种创意投影表现方式，它是一个魔幻的球体，利用在曲面上实现大尺寸图像内容的无缝拼接技术，实现特殊曲面甚至球面的全景影像，给用户以先进的科技体验，用户可以360度全方位的对球体投影的内容进行感知，增加了用户的信息量获取，对于一些在球体上才能较好表现的事物提供了优秀的展示平台，这种投射形式技术难，要求高，属于较为高端的投影技术。</p><p style=\"text-indent: 2em;\">西安一笔一画致力于球面互动投影多年，经验丰富，有很多成功的案例，了解更多可登陆官方网站。<a href=\"http://www.xaybyh.com\" target=\"_blank\">西安一笔一画官网</a></p><p style=\"text-indent: 2em; text-align: center;\"><img src=\"http://www.ybyh.c/static/upload/imgs/20180504/1525419697207843.jpg\" title=\"西安一笔一画有限公司\" alt=\"投影互动 球形互动\" height=\"300\" width=\"400\"/></p>');
INSERT INTO `pro_dtl` VALUES (4, 4, '<h4>弧幕影院</h4><p style=\"text-indent: 2em;\">弧幕影院是由数字内容、投影系统、播放系统和集成系统、无缝屏接系统组成。这种营销推广的方式被世界公认是最具有体验感的策略，根据不同的环境，弧幕影院可以分成120、150、180、360度不同的规格。具有超强的体验感和沉浸感。</p><p style=\"text-indent: 2em; text-align: center;\"><img src=\"/static/upload/imgs/20180504/1525420356625682.jpg\" title=\"弧幕投影 弧幕影院\" alt=\"弧幕投影 弧幕影院\" height=\"300\" width=\"400\"/></p><h4>简介<br/></h4><p>　　弧幕影院是由数字内容、投影系统、播放系统和集成系统、无缝屏接系统组成。这种营销推广的方式被世界公认是最具有体验感的策略，根据不同的环境，弧幕影院可以分成120、150、180、360度不同的规格。具有超强的体验感和沉浸感。<br/>　　在观看弧幕电影时，观众被立体的画面以及立体的声音所包围，从而产生真正的不同寻常的感受。观众会自然而然的感觉自己是影片环境中的一员，并且随着电影情节的变化而产生不同的情绪。观众与画面情境相交融，正是环幕电影的魅力所在。</p><p style=\"text-align: center;\"><img src=\"/static/upload/imgs/20180504/1525420370288226.jpg\" title=\"弧幕影院设计 投影系统\" alt=\"弧幕影院设计 投影系统\" height=\"300\" width=\"400\"/></p><p><a class=\"lemma-anchor para-title\"></a><a class=\"lemma-anchor \"></a><a class=\"lemma-anchor \"></a></p><h4>技术特点<br/></h4><p>　　通常一个完整的环幕投影系统需要有以下几项强有力的核心技术做支撑：数字几何矫正（即非线性失真矫正）技术、多通道视景同步控制技术、数字图像边缘融合技术，才能成功地将三维图形计算机生成的实时三维数字影像、实时同步地输出并显示在一个具有一定半径和弧度的巨幅环形投影屏幕上，从而形成一个具有\r\n 极高分辨率的、无任何变形失真的数字三维立体影像，所以，在众多的虚拟仿真显示系统中多通道环幕投影是一个技术含量极高的显示系统。 \r\n所有的投影机在设计时都是针对平面的投影屏幕，投射出的画面也是矩形的（通常为4：3或16：9），而当这样的投影仪把图像投射到环形幕或球幕这样的弧形屏幕上，图像就会变形失真变形，因为，弧形或球面投影幕（即环形幕布）上的每个点到每台投影机的距离是不等的，这就会导致每台投影机投射到环形幕布上的影像画面出现变形失真，这种现象被称之为非线性失真。为了在弧形屏幕或球面屏幕上得到正确的图像显示效果，就必须对生成后的实时图像进行处理，这种处理被称之为非线性失真校正。所以对于多通道柱面投影系统而言，解决图像非线性失真是个关键问题。\r\n \r\n一般情况下，有两种方法可以实现非线性失真校正，一种方法是通过光学校正，即通过具有独特变形矫正功能的特定投影机来完成。这种方案一个典型的特点就是投资巨大，往往一台这样的投影机就需要几十万美金，使得一般的用户均难以承受；另一种方法是使用计算机非线性失真校正技术来实现，而这种方案相比之下则具有较好的性能价格比。所以该种技术方案被普遍采纳。</p><p><br/></p>');
INSERT INTO `pro_dtl` VALUES (5, 5, '<h4>中央控制系统</h4><p style=\"text-indent: 2em;\">中央控制系统是 指对声、光、电等各种设备进行集中控制的设备。</p><p style=\"text-indent: 2em;\">它应用于多媒体教室、多功能会议厅、指挥控制中心、智能化家庭等，用户可用按钮式控制面板、计算机显示器、触摸屏和无线遥控等设备，通过计算机和中央控制系统软件控制投影机、展示台、影碟机、录像机等设备。</p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180504/1525420961476318.jpg\" title=\"中央控制系统 多媒体\" alt=\"中央控制系统 多媒体\" height=\"300\" width=\"400\"/></p><h4>介绍</h4><p style=\"text-indent: 2em;\">中央控制系统可实现资源共享、影音互传和相互监控。协同控制计算机、影碟机、录像机、视频展台等现代视听设备，并集中控制电动窗帘、灯光、幕布等设备，通过大屏幕投影，营造出一个高清晰、高保真、受控声光背景的现代化多媒体视听教学环境。</p><p style=\"text-indent: 2em;\">试想于一个重要的商业会议中，您需要视、听及电脑图像演示，而只需按一个按钮，所有的操作均自动进行：银幕下降，窗帘关上，自动调节音量和灯光亮度，以及投影机显示所需画面。若您发觉这实在太理想，那您绝对需要中央控制系统。</p><p style=\"text-indent: 2em;\">科技越发达、越先进、视、听、电脑及环境设备的整合便更复杂，用户往往因控制键太多，而无所适从，但现已无需为此而担忧，中央控制系统可以为您效劳。中央控制系统设有不同的规格及扩展度，适合各种控制需要，从会议室、培训中心到电视会议和遥距学习；家庭影院控制甚至家居全自动化。</p><p style=\"text-indent: 2em;\">广告公司的演示室绝对是一份商务合约的胜负关键。在会议中，往往有多项不同的<a class=\"sup-anchor\"> </a>多媒体演示，更可能需随时重播影片，中央控制系统能提供完善的录像，DAT，录音、收音、电视、电脑图像，甚至其他媒体的控制，让演讲者能全情投入于演说内容，而无需担忧器材的操作。</p><p style=\"text-indent: 2em;\">在历史博物馆中,专业的顾问希望只需稍为更改现有线路,便能建立一个合适网络来控制视听、多媒体和电脑器材，两年前这仍是不可能的事,现新一代的控制系统可变为事实。现在，询问处中的文职人员亦可接通会议室的网络，调节灯光或进行整个演示过程。</p><h4>发展</h4><p style=\"text-indent: 2em;\">随着社会的不断发展，信息交流和沟通也就变得越来越频繁，越来越重要。各种视听设备、投影设备，会议系统等开始进入各行各业。</p><p style=\"text-indent: 2em;\">现在的会议室、电化教学室等，已经不是以前的一张讲台一张椅子一个话筒了，取而代之的是各种先进的多媒体会议及教学设备。如：投影机、影碟机、录像机、视频展示台、多媒体电脑、电动屏幕，一些大型会议室还配备了同声传译系统、电子表决系统、大屏幕投影、多画面切换系统等。多种设备的使用必定带来烦杂的设备操作。如：要打开多种设备电源，要关闭灯光，要频频切换各种音视频信号，要不断切换投影画面.....等等。在这种情况下，一种能够集中管理这些设备，并能同时控制会议室、教室各种资源的“中央控制系统”设备便应运而生。</p><h4>分类</h4><p style=\"text-indent: 2em;\">1、简易中央控制系统：一般常用在小学多媒体教室，主要是控制设备比较少地方；</p><p style=\"text-indent: 2em;\">2、智能中央控制系统：一般常用在大中学的多媒体教室，能控制比较多设备；</p><p style=\"text-indent: 2em;\">3、网络中央控制系统：一般常用在安装多台中控的学校，主要是方便管理和控制；</p><p style=\"text-indent: 2em;\">4、会议中央控制系统：一般常用在多功能会议室，一般都是常用无线触摸屏控制；</p><p style=\"text-indent: 2em;\">5：可编程中央控制系统：一般常用在大型会议室，控制设备比较多，可以提供程序编写界面；</p><h4>构成</h4><p style=\"text-indent: 2em;\">作为一个系统中央控制系统一般由四部分组成：1. 用户界面；2.中央控制主机；3.各类控制接口；4.受控设备。</p><p style=\"text-indent: 2em;\">具体又可分为以下几个模块：</p><p style=\"text-indent: 2em;\">· 音视频切换模块</p><p style=\"text-indent: 2em;\">· VGA电脑信号切换模块</p><p style=\"text-indent: 2em;\">· 红外学习及发射模块</p><p style=\"text-indent: 2em;\">· 设备电源管理模块</p><p style=\"text-indent: 2em;\">· 电动屏幕控制模块</p><p style=\"text-indent: 2em;\">· 音色、音量处理模块</p><p style=\"text-indent: 2em;\">· 控制接口处理模块</p><p style=\"text-indent: 2em;\">· 电源模块</p><p style=\"text-indent: 2em;\">· 网络模块等构成。中央控制系统除可以完成以上各模块特定的功能外，还可以通过编程方式，增加其它控制或通讯功能。</p><h4>特点</h4><p style=\"text-indent: 2em;\">1、提供多种用户操作的界面。(标准Pc\\LcD触摸屏\\手控面板)：个性化控制界面设计使你操作方便，得心应手。同时面向全部电教设备总揽全局，一目了然。</p><p style=\"text-indent: 2em;\">2、能同时对多路设备进行控制。在通过电机或投影机进行演播同时，能对其它音视频源进行预览</p><p style=\"text-indent: 2em;\">3、集成度高，设备控制方式齐全，操作界面清晰，系统扩展功能强，可靠性高等特点。低成本，高性能，高集成度，全数字化控制。</p><p style=\"text-indent: 2em;\">4、单机直接接入：影碟机，录像机，视频展示台，摄像机，录音卡座，计算机，笔记本，功放，有线麦克，无线麦克，电动屏，投影机，电源控制器。(窗帘和灯光)。</p><p style=\"text-indent: 2em;\">5、全数码控音，混音，提供设备扩展接口。</p><h4>应用</h4><p style=\"text-indent: 2em;\">一个标准的多媒体会议室至少应包含计算机系统、投影显示系统、A/V系统、房间环境系统等几个部分。计算机系统包括台式机、笔记本、服务器等，用于进行教学、培训、演示以及控制。投影显示系统由投影仪、视频展示台、投影屏幕等组成，完成展示静态图片或活动视频等图文信息的大屏幕显示。A/V系统完成视音频信号的采集、播放和切换，主要包括摄像设备（如摄像机），显示设备（如电视机、显示器），传声设备（如有线话筒、无线话筒），扩声设备（如功放、音箱、调音台），播放设备（如DVD、录像机、卡座），信号切换设备（如视音频矩阵）等。房间环境系统主要指房间的可调灯光（如白炽灯、日光灯）和电动窗帘等，完成对整个房间环境、气氛的改变，以适应当前的需要。</p><p style=\"text-indent: 2em;\">为简化操作人员的工作，尽量多的体现出各种设备的卓越功能，中央控制系统通过信息智能技术实现对上述各类电子设备的集中控制，无需在各设备间来往奔波即可按需操作，如控制DVD的播放、停止、暂停，控制投影仪的开/关机、输入切换，控制投影幕的升降、停止，控制音量大小的调节，控制视音频矩阵的输入、输出切换，控制灯光的开/关和强弱调节，控制窗帘的打开和闭合，等等。</p><h5 style=\"text-indent: 2em;\"><strong>1、投影显示系统的控制</strong></h5><p style=\"text-indent: 2em;\">可通过控制主机的 RS232串口，控制投影机的所有功能，如开/关机和对视频图像、计算机图像的输入切换等，并且能够自动实现关联动作，如关闭系统时，自动将投影机关闭。</p><p>通过强电继电器，可控制电动吊架和屏幕的上升、下降、停止，并且能够自动实现关联动作，如投影机开时，电动吊架和屏幕自动下降，投影机关时电动吊架和屏幕自动上升。</p><p>可以利用控制终端的视频预览功能，在将视频经投影机投出到屏幕之前，确认播放的视频图像就是所需要的视频图像。</p><h5 style=\"text-indent: 2em;\"><strong>2、A/V系统的控制</strong></h5><p style=\"text-indent: 2em;\">通过控制主机的RS232串口，控制视频矩阵的切换，选择所需图像输出到投影仪。</p><p style=\"text-indent: 2em;\">通过控制主机的红外控制口和红外发射棒，控制DVD等设备的所有动作，如播放、暂停、停止等功能，并且可以自动将DVD的图像切换到投影仪，投影仪自动选择视频输入，自动将DVD的声音切换到功放。</p><p style=\"text-indent: 2em;\">通过音量控制器，控制功放输出音量的大小。</p><h5 style=\"text-indent: 2em;\"><strong>3、房间环境系统的控制</strong></h5><p style=\"text-indent: 2em;\">通过强电继电器，可控制日光灯的开关，并且能够进行多种灯光模式的预设（如会议模式、A/V模式、培训模式等），使得灯光符合各种应用需要。</p><p style=\"text-indent: 2em;\">通过强电继电器，控制窗帘的开/合，以符合各种应用需要。</p><p style=\"text-indent: 2em;\">通过强电继电器，控制投影机、A/V设备的电源，实现电源的自动、节能管理。有的产品还可以更好的保护设备，如系统会在投影机关机后预留足够的时间给投影机散热，然后再自动断开投影机的电源。</p><h4>选购</h4><p style=\"text-indent: 2em;\">在选择中央控制系统时应注意以下几个方面：</p><p style=\"text-indent: 2em;\">首先，系统要稳定可靠。安装中央控制系统的目的是为了简化操作，让工作人员能轻松自如的控制各种设备，达到事半功倍的效果，如果系统不稳定，不仅不能简化操作，反而会影响使用效果。因此在选择时应把质量放在第一位而不是价格。</p><p style=\"text-indent: 2em;\">其次，要注意系统的开放性和兼容性。安装简单、升级容易，添加、更换设备不麻烦；控制界面简单明快、逻辑清楚，操作方便、快捷。</p><p style=\"text-indent: 2em;\">最后，应注意要有多种控制操作方式。目前大多数控制系统均有触摸屏、软件、手动控制面板和手持遥控器。不同用户的计算机操作水平是不一致的，有些用户对计算机操作不熟，可以使用手持式控制面板、触摸屏、遥控器等。</p><p><br/></p>');
INSERT INTO `pro_dtl` VALUES (6, 6, '<h4>360度幻影成像</h4><p style=\"text-indent: 2em;\">360度幻影成像系统也称为虚拟成像系统，将三维画面悬浮在实景的半空中成像，营造了亦幻亦真的氛围，效果奇特，具有强烈的纵深感，真假难辩。柜体时尚美观，有科技感。顶端四面透明，真正的空间成像色彩鲜艳，对比度，清晰度高；有空间感，透视感。形成空中幻象中间可结合实物，实现影像与实物的结合。也可配加触摸屏实现与观众的互动\r\n 。左图为三视图动漫公司旗下广视博文在现场测试360度幻影成像的立体效果图。</p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180504/1525421701239256.jpg\" title=\"360度幻影成像 虚拟成像 西安一笔一画\" alt=\"360度幻影成像 虚拟成像 西安一笔一画\" height=\"300\" width=\"400\"/></p><h4>应用领域</h4><ol class=\" list-paddingleft-2\"><li><p>主题公园</p></li><li><p>博物馆</p></li><li><p>展览馆<br/></p></li></ol><h4>介绍</h4><p style=\"text-indent: 2em;\"><span class=\"description\">360度幻影成像</span>，半空中成像，营造了亦幻亦真的氛围，效果奇特，具有强烈的纵深感，真假难辩。柜体时尚美观，有科技感。顶端四面透明，真正的空间成像色彩鲜艳，对比度，清晰度高；有空间感，透视感。形成空中幻象中间可结合实物，实现影像与实物的结合。也可配加触摸屏实现与观众的互动\r\n 。可以根据要求做成四面窗口，每面最大2-11米。可做成全息幻影舞台，产品立体360度的演示；真人和虚幻人同台表演；科技馆的梦幻舞台等。</p><p style=\"text-indent: 2em; text-align: center;\"><img src=\"/static/upload/imgs/20180504/1525421727517328.jpg\" title=\"360幻影成像技术 立体投影技术 西安一笔一画\" alt=\"360幻影成像技术 立体投影技术 西安一笔一画\" height=\"300\" width=\"400\"/></p><p style=\"text-indent: 2em;\">主要应用领域：主题公园、博物馆、展览馆、历史遗址</p><p style=\"text-indent: 2em;\">展示方式：根据设计剧本搭建场景及安装设备</p><p style=\"text-indent: 2em;\">硬件设备：主体模型场景、造型灯光、投影机、计算机、音响、中央控制系统</p><p style=\"text-indent: 2em;\">数字内容：三维数字内容</p><p style=\"text-indent: 2em;\">产品特点：</p><p style=\"text-indent: 2em;\">影像高度可以做到50厘米--200厘米（根据用户需求调整人、物成像高度）</p><p style=\"text-indent: 2em;\">人物画面五官清晰、肤色还原正确、发丝清晰、可见视觉层次感好、立体感强</p><p style=\"text-indent: 2em;\">背景道具可以按真实的空间位置摆布，使多种视觉元素在真实环境下按照真实的空间位置关系透视关系表现出来，视觉内容丰富，场景的立体感强</p><p style=\"text-indent: 2em;\">技术手段：</p><p style=\"text-indent: 2em;\">按剧本设计故事的发展，利用声、光、电等特殊效果，展示历史事件或再现场景</p><p style=\"text-indent: 2em;\">展项环境：</p><p style=\"text-indent: 2em;\">用电量：220V5000W以上参与人数：若干人</p><p style=\"text-indent: 2em;\">停留时间：10分钟以上制作周期：按剧本设计制定</p><p style=\"text-indent: 2em;\">灯光照明要求：暗灯光安全、防护要求：无</p><p style=\"text-indent: 2em;\">应用推荐：</p><p style=\"text-indent: 2em;\">幻影成像技术可应用的领域有各类博物馆、名人故居、百年古镇、历史名街、主题公园、遗址公园、城市规划展示馆、图书馆、科技馆、档案馆、娱乐厅、展览会、博览会、名山大川等等。</p><h4>特点</h4><p style=\"text-indent: 2em;\">时尚美观，以高新科技展示产品 四面透明的360度空间成像表现 色彩鲜艳，有空间感、透视感，形成空中幻象 结合实物模型，实现影像与实物的奇特融合 互动展示，现场参观者可通过各种手势动作，操纵3D汽车模型的旋转、部件分解 。</p><h4>系统</h4><p style=\"text-indent: 2em;\">也称虚拟成像是基于“实景造型”和“幻影”的光学成像结合，将所拍摄的影像（人、物）投射到布景箱中的主体模型景观中，演示故事的发展过程。绘声绘色，虚幻莫测，非常直观，给人留下较深的印象。由立体模型场景、造型灯光系统、光学成像系统（应用幻影成像膜作为成像介质）、影视播放系统、计算机多媒体系统、音响系统及控制系统组成，可以实现大的场景、复杂的生产流水线、大型产品等的逼真展示。<sup class=\"sup--normal\">[1]</sup>&nbsp;</p><h4>历史</h4><p style=\"text-indent: 2em;\">90年代，360度幻影成像技术已经在一些发达国家的博物馆等公共场所率先被使用。</p><h4>优点</h4><p style=\"text-indent: 2em;\">360度幻影成像的优点在于它不受场地等因素的限制，可以根据场地的大小来调节。幻影成像技术已经在国外广泛使用，在国内的各类博物馆、名人故居、百年古镇、历史名街、主题公园、遗址公园、城市规划展示馆等也开始逐渐应用。</p><h4>应用</h4><p style=\"text-indent: 2em;\">随着信息技术在世界范围内的迅猛发展，特别是数字化技术的普及应用。利用信息化的集中管理手段配合信息的直观、集中的交互式表达，将使各项管理工作更加严密、有效，服务更加便捷、高效。幻影成像系统作为当今最现代的成像技术，已经被广泛地应用于我国国民经济生产的各个领域。</p><p style=\"text-indent: 2em;\"><span class=\"description\">幻影成像应用</span></p><p style=\"text-indent: 2em;\">幻影成像可以揭示一个现象、演示一个规律、解释一个科学原理、讲解一段故事、树立企业形象、介绍一种产品、分析数据曲线，以及一些危险环境下的不适宜人进入的场景等。</p><p style=\"text-indent: 2em;\">奢侈品：比如名车、名表、珠宝、工业产品。因为这部分产品需要表现产品的细节，营造亦真亦幻的氛围，具有强烈的纵深感，真假难辨，传统的实物和模型展示根本无法达到这个作用。</p><p style=\"text-indent: 2em;\">展览：博物馆、科技馆、档案馆、娱乐厅、展览会等方面，360度全息成像也是备受到青睐，在2010年某博览会上就能看见。上百种各种瓷器物件都成了全息立体投影技术的科幻产物。</p><p><br/></p>');
INSERT INTO `pro_dtl` VALUES (7, 7, '<h4>虚拟智能讲解员</h4><p style=\"text-indent: 2em;\">虚拟智能讲解员，是一款充分体现语音识别技术和图像合成技术的展项，计算机把游客与计算机中的主持人合成到一个场景中，并实现主持人与游客之间进行知识问答。各类展馆、图书馆、博物馆、教育教学机构、博览会等</p><p style=\"text-indent: 2em; text-align: center;\"><img src=\"/static/upload/imgs/20180504/1525422663104093.jpg\" title=\"虚拟讲解 西安一笔一画\" alt=\"虚拟讲解 西安一笔一画\" height=\"300\" width=\"400\"/><img src=\"/static/upload/imgs/20180504/1525422670403853.jpg\" title=\"虚拟智能讲解 西安一笔一画\" alt=\"虚拟智能讲解 西安一笔一画\" height=\"300\" width=\"400\"/></p><h4><strong>★</strong><strong>产品描述：</strong></h4><p style=\"text-indent: 2em;\">该展项是一款充分体现语音识别技术和图像合成技术的展项，计算机把游客与计算机中的主持人合成到一个场景中，并实现主持人与游客之间进行知识问答。当参观者走近时，虚拟讲解员附近的感应器会感知到观众的到来，同时计算机会控制讲解员向观众打招呼，并向观众介绍展厅分布及各主题展区概括介绍等内容。虽然感觉像是图片背板，不过犹如真人的介绍展示以及语音，非常能够吸引顾客，在互动性表现上也有很大提升。</p><h4><strong>★</strong><strong>适用范围：</strong></h4><p style=\"text-indent: 2em;\">各类展馆、图书馆、博物馆、教育教学机构、博览会等</p><p><br/></p>');
INSERT INTO `pro_dtl` VALUES (8, 8, '<h4>雾幕成像系统介绍</h4><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180504/1525422994813085.jpg\" title=\"雾幕成像 雾幕立体成像 西安一笔一画\" alt=\"雾幕成像 雾幕立体成像 西安一笔一画\" height=\"300\" width=\"400\"/></p><p><a class=\"lemma-anchor para-title\"></a><a class=\"lemma-anchor \"></a><a class=\"lemma-anchor \"></a></p><h4>空气雾幕立体成像</h4><p style=\"text-indent: 2em;\">也被称为空气成像、空气成像、空中立体成像、雾屏成像等。空气投影系统是结合了国外最新技术生产的一套完整的方案，以镭射在空气中成像，不须任何投射屏幕，同时也可以直接在一堆空气中抓来抓去，操作屏幕中的功能，感觉就好像身处电影关键报告的世界一样。</p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180504/1525423013108392.jpg\" title=\"空气雾幕立体成像 西安一笔一画\" alt=\"空气雾幕立体成像 西安一笔一画\" height=\"300\" width=\"400\"/></p><p><a class=\"lemma-anchor para-title\"></a><a class=\"lemma-anchor \"></a><a class=\"lemma-anchor \"></a></p><h4>空气雾幕立体成像描述</h4><p style=\"text-indent: 2em;\">空气雾幕投影成像是一种全新的空气成像设备。该设备是利用海市蜃楼的成像原理借助空气中存在的微粒将光影图像呈现。使用一层很薄的水雾墙代替传统的投影幕，使您能在该屏幕影像中随意穿梭，达到真人可进入视频画面的虚幻效果。使用雾化设备产生大量人工雾，结合空气流动学原理而制造出来的能产生形成平面雾气的屏幕，再将投影设备投射在该屏幕上，便可以在空间中形成虚幻立体的影像，形成一种三位空间立体图像，给人一种新的立体视觉享受，其影象给人的感受如同人行画中，画在人中，亦真亦幻，如置身仙境身处瑶池般。忽隐忽现，神秘诱人的特性开发一些令人称奇的展示项目。在迷茫的雾屏上，放映如幻似真的神话故事。将带给观众前所未有的视听体验。</p><p><a class=\"lemma-anchor para-title\"></a><a class=\"lemma-anchor \"></a><a class=\"lemma-anchor \"></a></p><h4>空气雾幕立体成像展示特点</h4><p style=\"text-indent: 2em;\">1. 空气雾幕成像系统包括一台投影机和一个空气屏幕系统，空气屏幕系统可以制造出由水蒸气形成的雾墙，采用背投技术将影像投映至几乎看不见的空气墙中，观看者看到的将会是漂浮在空气中的影像或影片。</p><p style=\"text-indent: 2em;\">2. 空气雾屏成像发生装置可将计算机、程序、红外线、激光、雷达通过投影机光速和风场投射到雾屏上，形成多种动感、虚拟图像。</p><p style=\"text-indent: 2em;\">3. 空气雾屏成像系统内部采用集成式超音波机芯，无机械驱动、宁静无噪音、雾化效率高、产生一定浓度负离子，故障率低、维护简单。</p><p><a class=\"lemma-anchor para-title\"></a><a class=\"lemma-anchor \"></a><a class=\"lemma-anchor \"></a></p><h4>空气雾幕立体成像系统原理</h4><p style=\"text-indent: 2em;\">包括专有的投影机和基本零件，其中空中图像显示从正面看起来使用，该系统不需要任何额外的屏幕，形成图像的主要原理是利用空气以及一个小型机柜。不使用特殊的化学物质或有害影响的环境。Heliodisplay投影系统的设计灵感来自于海市蜃楼的成像原理，一套投影系统包括一台投影机和一个空气屏幕系统，空气屏幕系统可以制造出由水蒸气形成的雾墙，投影机将画面投射在上面，由于空气与雾墙的分子震动不均衡，可以形成层次和立体感很强的图像。</p><p><a class=\"lemma-anchor para-title\"></a><a class=\"lemma-anchor \"></a><a class=\"lemma-anchor \"></a></p><h4>空气雾屏投影立体成像适应场合</h4><p style=\"text-indent: 2em;\">雾屏可以在舞台、会展、广告中作为展示平台充分应用；同时也广泛用于旅游景区、科技馆，博物馆，展览馆，机场，车站，商场，娱乐场所，企业展厅等展示窗口。</p><p>基于雾幕可虚幻成像的独有特性，使其有着广阔的市场前景。例如舞台剧院、媒体展览机构、大型商场门口、迪厅、KTV、旅游景区、主题公园，娱乐场所，科技馆、博物馆、规划馆、新产品发布会、演艺场馆、主题教育馆、儿童科学乐园等均可做为一种新的展示媒体。</p><p><br/></p>');
INSERT INTO `pro_dtl` VALUES (9, 9, '<h4>投影沙盘介绍</h4><p style=\"text-indent: 2em;\">投影沙盘又称数字沙盘投影系统，分为实体模型与虚拟影像相结合及全虚拟两种。</p><p style=\"text-indent: 2em;\">所谓投影沙盘就是以计算机技术为核心的现代高科技手段生成逼真的三维图像模型，借助投影显示设备或其他显示设备把计算机上的三维或四维图形图像模型显示到台面上。具体地说，就是将模拟的三维立体影像精确投影到实体模型的相应位置，与实体沙盘互动展示的演示相映成辉，使沙盘的演示效果更加形象、生动，还可以是桌面投影、地面投影、墙面壁投影显示等，参观者以自然的手势动作与大屏幕投影的三维模型交互作用，多方位多层次浏览查询，从而快速地获取简明、精确、优美、逼真的动态信息。</p><h4>投影沙盘应用</h4><p style=\"text-indent: 2em;\">投影沙盘还可通过集成遥感（RS）、地理信息系统（GIS）和三维仿真技术（VR）建立的三维可视化虚拟仿真地理信息系统。另外,还能将互动投影的三维数字沙盘与传统的物理沙盘模型进行无缝的结合，真正的做到交互式的互动，使整个系统活起来。</p><p style=\"text-indent: 2em;\">投影沙盘也可应用于科技馆、博物馆、多媒体展厅、房地产展厅、多功能会议室、指挥中心等等对城市规划的展示。</p><h4>产品特点</h4><p style=\"text-indent: 2em;\">投影沙盘与物理沙盘模型可以进行无缝的结合，表现效果更为优美、逼真，具有更强的动态性、交互性和可延展性。</p><p style=\"text-indent: 2em;\">组成部分：个性化三维数字内容 特殊材质沙盘模型 中央控制软件 影视后期特效</p><p style=\"text-indent: 2em;\">演示状态：自动演示、单独控制</p><p style=\"text-indent: 2em;\">注意事项：光线、控制系统、特效、沙盘模型</p><h4>投影沙盘设计</h4><p style=\"text-indent: 2em;\">如果要让单台投影机实现完整的沙盘投射，那么就必须将沙盘长宽比也设计成：3/4的】，如此一来就极大地限制了沙盘设计者的发挥。【实际设计中，投影沙盘甚至被设计成“圆形”、“椭圆”、“三角”、“不规则形”】。</p><p style=\"text-indent: 2em;\">基于以上原因，边缘融合器，它能够将多台投影机组合在一起投射出一个完整换面，这样不仅缩短的投射距离（解决问题1），而且它还具备曲面校正的能力，这样就解决了沙盘设计灵活性的问题（解决问题2）以上就是投影沙盘硬件设计。</p><p style=\"text-indent: 2em;\">除此之外，投影沙盘的内容制作【在沙盘上显示的光影效果】，必须由专门素材设计者来实现，他将根据沙盘具体应用设计内容编排，另外就是内容设计也需要符合物理沙盘尺寸，这样才能最终保证，投影沙盘设计成功。</p><p><br/></p>');
INSERT INTO `pro_dtl` VALUES (10, 10, '<h4>全息数字沙盘 <br/></h4><p style=\"text-indent: 2em;\">数字沙盘主要分为两种：一是在原来传统的沙盘模型上增加多媒体投影机系统；二是纯三维数字沙盘，一般有互动功能，投影面一般为特殊处理的白色或灰色幕面，设有实体沙盘模型。通过声、光、电、图像、三维动画以及计算机程控技术与实体模型相融合。</p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180504/1525424036153064.jpg\" title=\"全息数字沙盘  数字展厅 西安一笔一画\" alt=\"全息数字沙盘  数字展厅 西安一笔一画\" height=\"300\" width=\"400\"/></p><h4>背景</h4><p style=\"text-indent: 2em;\">数字沙盘是通过声、光、电、图像、三维动画以及计算机程控技术，运用数字投影来实现，数字沙盘,可以充分体现区位特点，达到一种惟妙惟肖、变化多姿的动态视觉效果。对参观者来说是一种全新的体验，并能产生强烈的共鸣，比传统的沙盘模型更直观。</p><h4>特点</h4><p style=\"text-indent: 2em;\">数字沙盘具有展示内容广、设计手法精湛、展示手段先进、科技含量高的特点。</p><p>数字沙盘在内容的展示上简单明了，不落俗套，设计手法上既有对传统的创新，又有现代高新科技的体现，大模型场面宏大，小模型布局精巧。大量运用高科技展示手法，声、光、电、互动项目、三维动画、影视等现代视觉效果。结合趣味性、互动性与知识性，寓展于乐，实现了与观众的“互动革命”。数字沙盘设有控制系统，包括总体控制，厅内照明、灯饰、计算机、电视机、操作台以及空调等强弱电系统按照预先编制的运行程序自动运行，从开启电源到并闭电源，都不需要人为控制，自动运行。</p><h4>技术特征</h4><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数字沙盘可以融合更多的设计和新鲜元素，可以满足更多客户的个性化需求，并且更新速度更快，数字沙盘具有以下特点：</p><p><span class=\"description\">漫游世界数字沙盘</span></p><p style=\"text-indent: 2em;\">（一）展示内容广。数字沙盘以简单明了，一目了然的手法可以充分体现展示内容的特点。</p><p style=\"text-indent: 2em;\">（二）设计手法精湛。整个展示过程不落俗套，既有在传统展板上的创新，又有基于充分体现现代高新科技成就上的互动；既有场面宏大的国内第一的大模型，又有制作精巧、竖向布局的数十个小模型；</p><p style=\"text-indent: 2em;\">（三）展示手段先进。大量运用高科技展示手法，集声、光、电、互动项目、三维动画、影视等现代视觉效果之大成。</p><p style=\"text-indent: 2em;\">（四）科技含量最高。</p><h4>实际运用</h4><h5>房地产展厅</h5><p style=\"text-indent: 2em;\">对房地产展厅来说，沙盘不可或缺，而在这个信息严重过剩的时代，我们需要沙盘以崭新的面貌示人，以此博得更多观众的眼球，从而增加潜在消费者的数量。多媒体投影沙盘通过严谨的设计，实现多功能同步联动，调用沙盘LED灯光、动态投影视频、大型弧幕等子设备，将楼盘最美好的一面展现得淋漓尽致。</p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180504/1525424067125781.jpg\" title=\"数字沙盘 数字展厅 西安一笔一画\" alt=\"数字沙盘 数字展厅 西安一笔一画\" height=\"300\" width=\"400\"/></p><h5>城市规划馆</h5><p style=\"text-indent: 2em;\">数字沙盘是一项革命性的创新，在传统固态沙盘的基础上，加入了以动态投影为主的各种多媒体声光手段，打破了人们对沙盘单调刻板的印象。</p><p>在城市规划馆中，最不可缺少的就是沙盘。沙盘是一个城市的微缩，向观众提供一个鸟瞰的角度观察城市，通览全局。但传统的沙盘模型只能在一个时间维度上表现城市，对于一个长达几年甚至几十年的城市规划来说，表现力远远不足。数字沙盘可动态地展现一个城市的全貌，在不同的时间维度上跳跃变化，是阐述一个城市规划的最佳工具。</p><h5>部队</h5><p style=\"text-indent: 2em;\">数字沙盘是在军队指挥作战中必不可少的设备之一。传统的纸质地图显示的各类信息较为抽象，指挥员稍有疏忽便会出现错判、漏判等情况，进而影响作战效果。本公司推荐在各大指挥场所设置作战沙盘，山川河流、道路桥梁在沙盘上模拟显示，使部队人员对当地地形更加了解，让各指战员的作战计划能够更加生动、清晰的展现。</p><p style=\"text-indent: 2em;\"><br/></p>');
INSERT INTO `pro_dtl` VALUES (11, 11, '<h4>数字沙盘 <br/></h4><p style=\"text-indent: 2em;\">数字沙盘主要分为两种：一是在原来传统的沙盘模型上增加多媒体投影机系统；二是纯三维数字沙盘，一般有互动功能，投影面一般为特殊处理的白色或灰色幕面，设有实体沙盘模型。通过声、光、电、图像、三维动画以及计算机程控技术与实体模型相融合。</p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180504/1525424429105255.jpg\" title=\"三维立体数字沙盘 数字互动沙盘 西安一笔一画\" alt=\"三维立体数字沙盘 数字互动沙盘 西安一笔一画\" height=\"300\" width=\"400\"/></p><h4>背景</h4><p style=\"text-indent: 2em;\">数字沙盘是通过声、光、电、图像、三维动画以及计算机程控技术，运用数字投影来实现，数字沙盘,可以充分体现区位特点，达到一种惟妙惟肖、变化多姿的动态视觉效果。对参观者来说是一种全新的体验，并能产生强烈的共鸣，比传统的沙盘模型更直观。</p><h4>特点</h4><p style=\"text-indent: 2em;\">数字沙盘具有展示内容广、设计手法精湛、展示手段先进、科技含量高的特点。</p><p>数字沙盘在内容的展示上简单明了，不落俗套，设计手法上既有对传统的创新，又有现代高新科技的体现，大模型场面宏大，小模型布局精巧。大量运用高科技展示手法，声、光、电、互动项目、三维动画、影视等现代视觉效果。结合趣味性、互动性与知识性，寓展于乐，实现了与观众的“互动革命”。数字沙盘设有控制系统，包括总体控制，厅内照明、灯饰、计算机、电视机、操作台以及空调等强弱电系统按照预先编制的运行程序自动运行，从开启电源到并闭电源，都不需要人为控制，自动运行。</p><h4>技术特征</h4><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数字沙盘可以融合更多的设计和新鲜元素，可以满足更多客户的个性化需求，并且更新速度更快，数字沙盘具有以下特点：</p><p><span class=\"description\">漫游世界数字沙盘</span></p><p style=\"text-indent: 2em;\">（一）展示内容广。数字沙盘以简单明了，一目了然的手法可以充分体现展示内容的特点。</p><p style=\"text-indent: 2em;\">（二）设计手法精湛。整个展示过程不落俗套，既有在传统展板上的创新，又有基于充分体现现代高新科技成就上的互动；既有场面宏大的国内第一的大模型，又有制作精巧、竖向布局的数十个小模型；</p><p style=\"text-indent: 2em;\">（三）展示手段先进。大量运用高科技展示手法，集声、光、电、互动项目、三维动画、影视等现代视觉效果之大成。</p><p style=\"text-indent: 2em;\">（四）科技含量最高。</p><h4>实际运用</h4><h5>房地产展厅</h5><p style=\"text-indent: 2em;\">对房地产展厅来说，沙盘不可或缺，而在这个信息严重过剩的时代，我们需要沙盘以崭新的面貌示人，以此博得更多观众的眼球，从而增加潜在消费者的数量。多媒体投影沙盘通过严谨的设计，实现多功能同步联动，调用沙盘LED灯光、动态投影视频、大型弧幕等子设备，将楼盘最美好的一面展现得淋漓尽致。</p><p style=\"text-align:center\"><img src=\"/static/upload/imgs/20180504/1525424435139810.jpg\" title=\"数字沙盘 数字互动沙盘 西安一笔一画\" alt=\"数字沙盘 数字互动沙盘 西安一笔一画\" height=\"300\" width=\"400\"/></p><h5>城市规划馆</h5><p style=\"text-indent: 2em;\">数字沙盘是一项革命性的创新，在传统固态沙盘的基础上，加入了以动态投影为主的各种多媒体声光手段，打破了人们对沙盘单调刻板的印象。</p><p>在城市规划馆中，最不可缺少的就是沙盘。沙盘是一个城市的微缩，向观众提供一个鸟瞰的角度观察城市，通览全局。但传统的沙盘模型只能在一个时间维度上表现城市，对于一个长达几年甚至几十年的城市规划来说，表现力远远不足。数字沙盘可动态地展现一个城市的全貌，在不同的时间维度上跳跃变化，是阐述一个城市规划的最佳工具。</p><h5>部队</h5><p style=\"text-indent: 2em;\">数字沙盘是在军队指挥作战中必不可少的设备之一。传统的纸质地图显示的各类信息较为抽象，指挥员稍有疏忽便会出现错判、漏判等情况，进而影响作战效果。本公司推荐在各大指挥场所设置作战沙盘，山川河流、道路桥梁在沙盘上模拟显示，使部队人员对当地地形更加了解，让各指战员的作战计划能够更加生动、清晰的展现。</p><p style=\"text-indent: 2em;\"><br/></p><p><br/></p>');
INSERT INTO `pro_dtl` VALUES (12, 12, '<h4>虚拟数字沙盘</h4><h5>简介</h5><p style=\"text-align: center;\"><img src=\"/static/upload/imgs/20180504/1525424861115084.jpg\" title=\"虚拟数字沙盘 虚拟现实 西安一笔一画\" alt=\"虚拟数字沙盘 虚拟现实 西安一笔一画\" height=\"300\" width=\"400\"/><img src=\"/static/upload/imgs/20180504/1525424866349332.jpg\" title=\"虚拟数字沙盘 西安一笔一画\" alt=\"虚拟数字沙盘 西安一笔一画\" height=\"300\" width=\"400\"/></p><p style=\"text-indent: 2em;\">虚拟数字沙盘是可以根据用户需求制作实时浏览的三维立体电子沙盘。可以模拟飞行和游览过程，并能显示地理坐标和高度信息。</p><p style=\"text-indent: 2em;\">其中虚拟数字沙盘内容可包括：·矢量的专题地图、栅格的卫星影象上、数字高程模型三者结合，形成三维虚拟现实的电子沙盘，可以根据需要标注如地名、路名等文字信息；·在三维环境中以任意调整高度、角度进行浏览；可以填加建筑物、道路、树木、人物等三维设施；可以任意查询详细属性、照片、录像等信息。</p><p style=\"text-indent: 2em;\">虚拟数字沙盘与现在已有的电子沙盘相比，除了电子沙盘具有的效果外，它对规划、景观的展现更具有立体直观的演示效果，恢复了沙盘本来的含义，并且不再需要实物沙盘；虚拟数字沙盘与传统沙盘模型相比，能实现实物沙盘不能实现的功能，如对局部区域进行缩放显示。</p><p style=\"text-indent: 2em;\">并且，同一个沙盘的演示区域，可以实现多个沙盘的功能。因此，它的应用领域更广泛，具有真实、立体、快速、简便、精确、动态的特点，以获取更加丰富的演示效果。</p><h5>行业概况</h5><p style=\"text-indent: 2em;\">供求关系是一个行业能否快速发展的前提。目前来看，市场需求是很大的，而供应方面却略显不足，尤其是拥有核心知识产权，技术过硬的企业并不多，行业整体缺乏品牌效应。西安一笔一画呼吁业内企业共同努力，尤其发挥吹毛求疵的研发精神，进一步提高研发能力，降低成本，真正解决客户的实际困难，严把质量关，提供最可靠的产品和技术。</p><p><br/></p>');
INSERT INTO `pro_dtl` VALUES (13, 13, '');
INSERT INTO `pro_dtl` VALUES (14, 14, '');
INSERT INTO `pro_dtl` VALUES (15, 15, '');

-- ----------------------------
-- Table structure for zw
-- ----------------------------
DROP TABLE IF EXISTS `zw`;
CREATE TABLE `zw`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `addtime` bigint(11) NOT NULL,
  `endtime` bigint(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `num` tinyint(2) NOT NULL,
  `salary` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_show` tinyint(1) NOT NULL DEFAULT 1,
  `keys` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `keywords` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `alt` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of zw
-- ----------------------------
INSERT INTO `zw` VALUES (1, 1526028860, 0, '网络推广员', 1, '4-6k', 1, '', '', '', '', '');
INSERT INTO `zw` VALUES (2, 1526018590, 1533052800, '销售代表', 1, '4-6K', 1, '', '', '', '', '');
INSERT INTO `zw` VALUES (3, 1526018729, 1533052800, '安装工程师', 1, '2-4k', 1, '', '', '', '', '');
INSERT INTO `zw` VALUES (4, 1526018940, 1533052800, '销售经理', 1, '10-15k', 1, '', '', '', '', '');

-- ----------------------------
-- Table structure for zw_dtl
-- ----------------------------
DROP TABLE IF EXISTS `zw_dtl`;
CREATE TABLE `zw_dtl`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `zw_id` int(11) NOT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of zw_dtl
-- ----------------------------
INSERT INTO `zw_dtl` VALUES (1, 1, '<p style=\";margin-bottom:0;line-height:25px;background:white\"><span style=\"font-size: 14px; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%; font-family: 微软雅黑, Microsoft\\ YaHei;\"></span></p><p><span style=\"font-family: 微软雅黑, Microsoft\\ YaHei; color: rgb(0, 0, 0); font-size: 16px;\">薪资福利</span><span style=\"font-size: 14px; font-family: 微软雅黑, Microsoft\\ YaHei; color: rgb(0, 0, 0);\">：</span></p><p style=\"text-indent: 2em;\"><span style=\"font-family: 微软雅黑, Microsoft\\ YaHei;\"><span style=\"font-family: 宋体;\">底薪</span>4-6K+<span style=\"font-family: 宋体;\">项目奖金、社保、双休、带薪旅游、每年多次调薪。</span></span></p><p style=\";margin-bottom:0;line-height:25px;background:white\"><span style=\"color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%; font-family: 微软雅黑, Microsoft\\ YaHei; font-size: 16px;\">岗位职责:</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size: 14px; font-family: 宋体; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%;\">1、负责进行SEO优化，包含百度知道、外链推广、百度文库、网站优化等</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size: 14px; font-family: 宋体; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%;\">2、负责确定网站推广的目标和推广的方案；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size: 14px; font-family: 宋体; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%;\">3、利用各种互联网资源提高公司网站访问量、注册留言量及传播效果；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size: 14px; font-family: 宋体; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%;\">4、负责和各种相关资源合作方、网站联络，洽谈合作，签订协议等；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size: 14px; font-family: 宋体; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%;\">5、负责站外自然推广：微博、博客、百度贴吧顶贴等；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size: 14px; font-family: 宋体; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%;\">6、负责软文的书写；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size: 14px; font-family: 宋体; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%;\">7、及时提出网上推广存在的问题， 并能建设性的提出改进建议。</span></p><p style=\";margin-bottom:0;line-height:25px;background:white\"><span style=\"color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%; font-family: 微软雅黑, Microsoft\\ YaHei; font-size: 16px;\">任职条件:</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size: 14px; font-family: 宋体; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%;\">1、电子商务等相关专业本科及以上学历；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size: 14px; font-family: 宋体; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%;\">2、二年以上SEO/网编经验，有大型网站工作经验优先，多媒体展览展示行业背景优先；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size: 14px; font-family: 宋体; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%;\">3、 熟悉搜索引擎优化等方式；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size: 14px; font-family: 宋体; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%;\">4、 熟练掌握软文、交换链接、邮件推广、SNS推广、论坛推广及其它特殊的推广方式；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size: 14px; font-family: 宋体; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%;\">5、 良好的沟通协作能力和文案水平；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size: 14px; font-family: 宋体; color: rgb(51, 51, 51); background: white none repeat scroll 0% 0%;\">6、 工作踏实、认真，有韧性和创新能力。</span></p>');
INSERT INTO `zw_dtl` VALUES (2, 2, '<p style=\";margin-bottom:0;line-height:25px;background:white\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\"></span></p><p><span style=\"font-family:宋体\">薪资福利：</span></p><p style=\"text-indent: 2em;\"><span style=\"font-family:宋体\">提成</span>+<span style=\"font-family:宋体\">项目奖金、社保、双休、带薪旅游、每年多次调薪。</span></p><p style=\";margin-bottom:0;line-height:25px;background:white\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">岗位职责：</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">1</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、负责公司业务的的谈判、签订、项目执行和款项回收工作</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">2</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、语言组织能力强，思维敏捷，具有良好的沟通能力，能够准确判断客户的需求。</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">3</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、有上进心和责任心。有团队协作精神。敢于挑战高薪，能承受一定的工作压力。</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">4</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、及时维护和更进开发客户，做好客户维系工作</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">5</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、完成部门临时安排的其他任务</span></p><p style=\";margin-bottom:0;line-height:25px;background:white\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">任职要求：</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">1</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、25-35岁，形象端正；市场营销、电子商务、计算机等相关专业或者工作经验优先考虑（文凭不限）；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">2</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、有软件应用、渠道拓展、行业应用、产品销售、市场管理等系统集成相关销售工作经验优先考虑；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">3</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、具有营销、市场推广、公共关系等方面的知识，并有强烈意愿从事营销工作；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">4</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、对销售市场有良好的认知，对市场营销工作、平台型销售工作有一定理解；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">5</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、坦诚、自信、激情、有良好的团队合作精神，有出色的洞察力和应变能力，有较强的沟通能力及综合协调能力。</span></p>');
INSERT INTO `zw_dtl` VALUES (3, 3, '<p style=\";margin-bottom:0;line-height:25px;background:white\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\"></span></p><p><span style=\"font-family:宋体\">薪资福利：</span><span style=\"font-family:宋体\"><br/></span></p><p style=\"text-indent: 2em;\"><span style=\"font-family:宋体\">提成</span>+<span style=\"font-family:宋体\">项目奖金、社保、双休、带薪旅游、每年多次调薪</span></p><p style=\";margin-bottom:0;line-height:25px;background:white\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">任职要求：</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">1</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、中专及以上学历，计算机，安防，系统软件等相关专业优先考虑</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">2</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、熟悉投影机，监控设备，计算机，液晶显示器等安装调试与维护。</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">3</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、有较强的沟通能力，严谨的逻辑思维，事业心较强，有责任心，工作积极主动。</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">4</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、具备较好的时间管理，服从公司管理</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">5</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、有音视频互动展示，多媒体相关行业、数字展厅、音响功放、户外广播、安防监控，楼宇亮化等行业经验优先录用</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">6</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、能适应全国各地外地出差</span></p>');
INSERT INTO `zw_dtl` VALUES (4, 4, '<p style=\";margin-bottom:0;line-height:25px;background:white\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\"></span></p><p><span style=\"font-family:宋体\">薪资福利：</span></p><p style=\"text-indent: 2em;\"><span style=\"font-family:宋体\">底薪</span><span style=\"font-family:宋体\"><span style=\"font-family:宋体\"></span>+<span style=\"font-family:宋体\"></span>提成</span>+<span style=\"font-family:宋体\">项目奖金、社保、双休、带薪旅游、每年多次调薪</span></p><p style=\";margin-bottom:0;line-height:25px;background:white\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">岗位职责：</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">1</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、开拓市场，开拓新客户；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">2</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、带领团队完成销售目标和销售回款任务；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">3</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、维护客户关系，协调处理客户投诉，提高客户满意度，加强公司的市场竞争力；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">4</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、跟踪市场动态，及时发现客户的潜在需求，积极向客户提供高附加值的解决方案；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">5</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、负责相关项目进度的协调及突发事件的解决以及相关问题；</span></p><p style=\";margin-bottom:0;line-height:25px;background:white\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">岗位要求：</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">1</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、理工科背景相关专业，本科及以上学历；英语最低要求四级口语流利。</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">2</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、3年以上销售及销售管理岗经验，有非常强的团队建设管理能力；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">3</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、有从事音视频（音响功放、办公用品、网络销售、多媒体会议系统、校园广播系统、市场管理等）系统集成相关销售工作经验优先考虑；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">4</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、熟悉谈判技巧和合同法知识；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">5</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、较强的市场判断及分析能力；</span></p><p style=\"margin-bottom: 0px; line-height: 25px; background: white none repeat scroll 0% 0%; text-indent: 2em;\"><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">6</span><span style=\"font-size:14px;font-family:宋体;color:#333333;background:white\">、公司快速发展期，欢迎您的加入，相信您不会失望。</span></p>');

SET FOREIGN_KEY_CHECKS = 1;
