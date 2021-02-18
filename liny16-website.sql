-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2020 at 03:27 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myintroprojects`
--
CREATE DATABASE IF NOT EXISTS `myintroprojects` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `myintroprojects`;

-- --------------------------------------------------------

--
-- Table structure for table `projectlist`
--

CREATE TABLE `projectlist` (
  `projectid` int(4) NOT NULL,
  `menu_name` varchar(40) NOT NULL,
  `menu_desc` varchar(40) NOT NULL,
  `menu_url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `projectlist`
--

INSERT INTO `projectlist` (`projectid`, `menu_name`, `menu_desc`, `menu_url`) VALUES
(1, 'Lab 2', 'Resume', '../project/lab2/liny16-yanshenlin-resume.html'),
(2, 'Lab 3', 'Website', '../index.html'),
(3, 'Lab 4', 'RSS Feed', '../project/lab4/rss_feed.xml'),
(4, 'Lab 4', 'Atom Feed', '../project/lab4/atom_feed.xml'),
(5, 'Lab 5', 'JavaScript', '../project/lab5/lab5.html'),
(6, 'Lab 6', 'jQuery', '../project/lab6/lab6.html'),
(7, 'Lab 7', 'Mockup Project Prototype', '../project/lab7/mockupPrototype.pdf'),
(8, 'Lab 8', 'XAMPP Deployment', '../project/lab8/lab8.html'),
(9, 'Lab 9', 'Dynamic Website JSON/AJAX', '../project/lab9/lab9project.html'),
(10, 'Lab 10', 'PHP & MySQL', '../project/lab10/index.php'),
(12, 'Term Project', 'Term Final Project', '../project/termProject/index.html');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `projectlist`
--
ALTER TABLE `projectlist`
  ADD PRIMARY KEY (`projectid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projectlist`
--
ALTER TABLE `projectlist`
  MODIFY `projectid` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
