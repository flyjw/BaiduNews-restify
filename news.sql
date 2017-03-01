-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-07-06 09:04:29
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `id` int(20) NOT NULL COMMENT '主题编号',
  `username` varchar(50) NOT NULL COMMENT '用户名',
  `password` varchar(50) NOT NULL COMMENT '密码'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `newscon`
--

CREATE TABLE `newscon` (
  `news_id` int(11) NOT NULL COMMENT '自动增长',
  `news_title` varchar(100) NOT NULL,
  `news_img` varchar(200) NOT NULL,
  `news_content` text NOT NULL,
  `news_date` date NOT NULL,
  `news_author` varchar(50) NOT NULL,
  `news_type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `newscon`
--

INSERT INTO `newscon` (`news_id`, `news_title`, `news_img`, `news_content`, `news_date`, `news_author`, `news_type`) VALUES
(1, '习近平重视少数民族全面小康', 'http://imgst-dl.meilishuo.net/pic/_o/84/a4/a30be77c4ca62cd87156da202faf_1440_900.jpg', '习近平重视少数民族全面小康。', '2015-11-24', 'jw', '推荐'),
(2, '百度应借道IMO班聊进入企业O2O市场', 'http://s2.nuomi.bdimg.com/upload/deal/2014/1/V_L/623682-1391756281052.jpg', '百度应借道IMO班聊进入企业O2O市场。', '2015-11-23', 'jw', '百家'),
(3, '北京地铁14号线中段年底开通试运营', 'http://img.club.pchome.net/kdsarticle/2013/11small/21/fd548da909d64a988da20fa0ec124ef3_1000x750.jpg', '北京地铁14号线中段年底开通试运营 开通9站中5站可换乘。', '2014-11-23', 'jw', '本地'),
(4, '奶茶妹妹：美貌与智慧并存的老板娘', 'http://t-1.tuzhan.com/422022f85414/c-2/l/2013/05/23/22/ee4dd25e87fb4b27b63710ea6945491b.jpg', '奶茶妹妹：美貌与智慧并存的老板娘。', '2015-10-19', 'jw', '娱乐'),
(5, '一张图读懂微博2015年Q3财报：更大的想象空间', 'http://image6.huangye88.com/2013/03/28/2a569ac6dbab1216.jpg', '一张图读懂微博2015年Q3财报：更大的想象空间。', '2015-11-10', 'jw', '社会'),
(6, '巴黎恐袭是世界格局重组拐点', 'http://img3.3lian.com/2013/v8/72/d/61.jpg', '巴黎恐袭是世界格局重组拐点。', '1015-11-04', 'jw', '军事'),
(7, 'iOS漏洞可卖天价：OS X漏洞只值3万美元', 'http://www.meiwai.net/uploads/allimg/c150822/1440244203H130-15524.png', 'iOS漏洞可卖天价：OS X漏洞只值3万美元。', '2015-11-23', 'jw', '科技'),
(8, '让男人一见钟情的3种女人 有你吗？', 'http://i.epetbar.com/2014-06/07/a08a0303f1e8e41b880588891c453b16.jpg', '让男人一见钟情的3种女人 有你吗？', '2015-02-04', 'jw', '女人'),
(9, '美女编辑晒胃走红 只要服下一粒“胶囊”', 'http://www.shifenkafei.com/data/upload/553deb1621af2.jpg', '美女编辑晒胃走红 只要服下一粒“胶囊” 肠胃一览无余', '2015-11-24', 'jw', '生活'),
(10, '巴黎恐袭主嫌犯被曝曾向朋友求助', 'http://p3.gexing.com/G1/M00/CB/00/rBACFFKR5mDScmocAABWdHJnshw497.jpg', '巴黎恐袭主嫌犯被曝曾向朋友求助 欲逃往叙利亚', '2015-11-12', 'jw', '国际'),
(11, '推荐2', 'http://www.meiwai.net/uploads/allimg/c150907/14416140N1GZ-51951.jpg', '李克强与安倍晋三进行简短交谈', '2015-11-20', 'jw', '推荐'),
(12, '百家2', 'http://s2.nuomi.bdimg.com/upload/deal/2014/1/V_L/623682-1391756281052.jpg', '百度应借道IMO班聊进入企业O2O市场。', '2015-11-23', 'jw', '百家'),
(13, '本地2', 'http://img.club.pchome.net/kdsarticle/2013/11small/21/fd548da909d64a988da20fa0ec124ef3_1000x750.jpg', '北京地铁14号线中段年底开通试运营 开通9站中5站可换乘。', '2014-11-23', 'jw', '本地'),
(14, '娱乐2', 'http://t-1.tuzhan.com/422022f85414/c-2/l/2013/05/23/22/ee4dd25e87fb4b27b63710ea6945491b.jpg', '奶茶妹妹：美貌与智慧并存的老板娘。', '2015-10-19', 'jw', '娱乐'),
(15, '社会2', 'http://image6.huangye88.com/2013/03/28/2a569ac6dbab1216.jpg', '一张图读懂微博2015年Q3财报：更大的想象空间。', '2015-11-10', 'jw', '社会'),
(16, '军事2', 'http://img3.3lian.com/2013/v8/72/d/61.jpg', '巴黎恐袭是世界格局重组拐点。', '1015-11-04', 'jw', '军事'),
(17, '科技2', 'http://www.meiwai.net/uploads/allimg/c150822/1440244203H130-15524.png', 'iOS漏洞可卖天价：OS X漏洞只值3万美元。', '2015-11-23', 'jw', '科技'),
(18, '女人2', 'http://i.epetbar.com/2014-06/07/a08a0303f1e8e41b880588891c453b16.jpg', '让男人一见钟情的3种女人 有你吗？', '2015-02-04', 'jw', '女人'),
(19, '生活2', 'http://www.shifenkafei.com/data/upload/553deb1621af2.jpg', '美女编辑晒胃走红 只要服下一粒“胶囊” 肠胃一览无余', '2015-11-24', 'jw', '生活'),
(20, '国际2', 'http://p3.gexing.com/G1/M00/CB/00/rBACFFKR5mDScmocAABWdHJnshw497.jpg', '巴黎恐袭主嫌犯被曝曾向朋友求助 欲逃往叙利亚', '2015-11-12', 'jw', '国际'),
(21, '国际3', 'http://p3.gexing.com/G1/M00/CB/00/rBACFFKR5mDScmocAABWdHJnshw497.jpg', '巴黎恐袭主嫌犯被曝曾向朋友求助 欲逃往叙利亚', '2015-11-12', 'jw', '国际'),
(22, '国际4', 'http://p3.gexing.com/G1/M00/CB/00/rBACFFKR5mDScmocAABWdHJnshw497.jpg', '巴黎恐袭主嫌犯被曝曾向朋友求助 欲逃往叙利亚', '2015-11-12', 'jw', '国际'),
(23, '国际5', 'http://p3.gexing.com/G1/M00/CB/00/rBACFFKR5mDScmocAABWdHJnshw497.jpg', '国际5', '2015-11-11', 'jw', '国际'),
(24, '国际6', 'http://p3.gexing.com/G1/M00/CB/00/rBACFFKR5mDScmocAABWdHJnshw497.jpg', '国际5', '2015-11-11', 'jw', '国际'),
(25, '国际7', 'http://p3.gexing.com/G1/M00/CB/00/rBACFFKR5mDScmocAABWdHJnshw497.jpg', '国际5', '2015-11-11', 'jw', '国际');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `newscon`
--
ALTER TABLE `newscon`
  ADD PRIMARY KEY (`news_id`),
  ADD KEY `新闻标题` (`news_title`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '主题编号';
--
-- 使用表AUTO_INCREMENT `newscon`
--
ALTER TABLE `newscon`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
