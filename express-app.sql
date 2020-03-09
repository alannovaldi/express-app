-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 09 Mar 2020 pada 10.33
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express-app`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `purchases`
--

CREATE TABLE `purchases` (
  `id` int(11) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `item` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `purchases`
--

INSERT INTO `purchases` (`id`, `full_name`, `email`, `item`, `quantity`, `price`) VALUES
(1, 'Tommy Bejo', 'tommy@mail.com', 'Barang1', 2, 100000),
(2, 'Joko Widodo', 'joko@mail.com', 'Barang2', 1, 50000),
(3, 'Jusuf Kalla', 'jusuf@mail.com', 'Barang3', 3, 150000),
(4, 'Tommy Bejo', 'tommy@mail.com', 'Barang4', 2, 100000),
(5, 'Kevin Durant', 'kevin@mail.com', 'Barang4', 1, 20000),
(6, 'Luka Doncic', 'luka@mail.com', 'Barang6', 3, 750000),
(7, 'Luka Doncic', 'luka@mail.com', 'Barang7', 3, 100000),
(8, 'Joko Widodo', 'joko@mail.com', 'Barang3', 1, 900000),
(9, 'Luka Doncic', 'luka@mail.com', 'Barang9', 2, 110000),
(10, 'Robert Garcia', 'robert@mail.com', 'Barang10', 3, 150000),
(11, 'Jusuf Kalla', 'jusuf@mail.com', 'Barang3', 2, 100000);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
