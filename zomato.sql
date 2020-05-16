-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 20, 2020 at 01:16 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zomato`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `c_id` int(20) NOT NULL,
  `f_id` int(20) NOT NULL,
  `r_id` int(20) NOT NULL,
  `qty` int(20) NOT NULL,
  `amount` int(20) NOT NULL,
  `total_amount` int(20) NOT NULL,
  `email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`c_id`, `f_id`, `r_id`, `qty`, `amount`, `total_amount`, `email`) VALUES
(185, 9, 3, 1, 32, 32, 'doshianuj5@gmail.com'),
(194, 17, 2, 1, 209, 209, 'doshianuj5@gmail.com'),
(195, 5, 5, 1, 80, 80, 'doshianuj5@gmail.com'),
(196, 4, 5, 2, 110, 220, 'doshianuj5@gmail.com'),
(198, 1, 1, 1, 100, 200, 'rajkaria72@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `f_id` int(11) NOT NULL,
  `r_id` int(11) NOT NULL,
  `food_img` text NOT NULL,
  `food_name` varchar(150) NOT NULL,
  `food_type` varchar(150) NOT NULL,
  `amount` int(11) NOT NULL,
  `food_details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`f_id`, `r_id`, `food_img`, `food_name`, `food_type`, `amount`, `food_details`) VALUES
(1, 1, 'https://i.pinimg.com/originals/09/37/87/09378746f79306880898e1b38803adca.jpg', 'Veg Extravaganza', 'Pizza', 235, 'Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese.\r\n'),
(2, 1, 'https://www.dominos.co.in/blog/wp-content/uploads/2019/12/new_double_cheese_margherita.jpg', 'Margerita Pizza', 'Pizza', 99, 'A classic delight with 100% Real mozzarella cheese\r\n'),
(3, 1, 'https://i.ytimg.com/vi/cSliQJFTz4A/maxresdefault.jpg', 'Garlic Breadsticks', 'Fast Food', 99, 'Baked to perfection. Your perfect pizza partner! Tastes best with dip'),
(4, 5, 'https://files2.hungryforever.com/wp-content/uploads/2015/04/Featured-image-masala-dosa-recipe.jpg', 'Masala Dosa', 'South Indian Dosa', 110, 'Dosai served with our special aloo masala. Served with chutney and sambar.\r\n'),
(5, 5, 'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Breakfast_Tiffins/South_Indian_Medu_Vada_Sambar_with_Medu_Vada_Maker-8.jpg', 'Medu Vada', 'South Indian Breakfast', 80, 'Medu vada is a South Indian fritter made from Vigna mungo. It is usually made in a doughnut shape, with a crispy exterior and soft interior. A popular food item in South Indian and Sri Lankan Tamil cuisines, it is generally eaten as a breakfast or a snack.'),
(6, 5, 'https://www.seriouseats.com/recipes/images/2012/05/20121405-Sooji-Upma-%20Indian-Breakfast.jpg', 'Upma', 'South Indian Breakfast', 80, 'Upma is a common South Indian Tamil breakfast dish, cooked as a thick porridge from dry roasted semolina or coarse rice flour.'),
(7, 3, 'https://b.zmtcdn.com/data/pictures/7/110237/d837cc22f19e5f0660a20d5a4b84b3c0_featured_v2.jpg', 'Punjabi Fix Thali', 'Punjabi Meal', 199, 'Sweet , 2 Sabji , Dal ,Rice , 3 Butter Roti , Papad , Butter Milk(200ml).'),
(8, 3, 'https://www.cookwithmanali.com/wp-content/uploads/2014/04/Paneer-Tikka-Masala-Recipe-notitle-cwm-500x375.jpg', 'Paneer Tika Masala', 'Punjabi Sabji', 245, 'Paneer tikka masala is an Indian dish of marinated paneer cheese served in a spiced gravy. It is a vegetarian alternative to chicken tikka masala'),
(9, 3, 'https://i.ytimg.com/vi/TueSVUHLngw/maxresdefault.jpg', 'Butter Roti', 'Punjabi Roti', 32, 'Butter roti also called as tandoori roti is made using all porpous flour and can be eaten with any choice of dal,vegetable or curry dish'),
(10, 3, 'https://i.pinimg.com/originals/44/0b/72/440b72c02ad50acddb550095b61c7097.jpg', 'Papdi Chat', 'Snacks', 119, 'Papri chaat, paapri chaat or papdi chaat is a popular traditional fast food and street food from the Indian subcontinent, notably in North India, Bangladesh and Pakistan. Many various additional dishes throughout India are also referred to as papri chaat.'),
(11, 6, 'https://i.ytimg.com/vi/UEjTO6jmCSQ/hqdefault.jpg', 'Kit Kat Shake', 'Milk Shake', 209, 'Crunchy Kit Kat with Vanilla ice cream for a fan favourite flavour.'),
(12, 6, 'https://i.ytimg.com/vi/cRCgxLDnDx8/hqdefault.jpg', 'Chocolate Oreo Ooze Shake.', 'Milk Shake', 199, 'Chocolate and Oreos : double the chocolate,double the flavour.'),
(13, 6, 'https://b.zmtcdn.com/data/dish_photos/ccf/60375cae1db11f1438f6ea4f23794ccf.png', 'Kesar Badami Shake\r\n', 'Milk Shake', 209, 'A traditional blend of Indian spices and almonds mixed together for a cooling shake.'),
(15, 4, 'https://content3.jdmagicbox.com/comp/vadodara/g6/0265px265.x265.180513144157.f6g6/catalogue/the-grand-thakar-alkapuri-vadodara-thali-restaurants-l59r3.jpg', 'Gujarati Thali', 'Gujarati Lunch', 350, '4 - Sabji [100 GMs Each], Boiled Farshan [4 pieces] , Fried Farshan [2 pieces], Puranpuri [2 Pieces] , Liquid Sweet [150 Gms] , Dal/Kadhi [150 gm] , Steam Rice/Khichdi [150 Gms] , Fulka Roti [10 Pieces] , Chaas [250 ml] , Papad [1 piece], Salad , Chutney.'),
(16, 4, 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Bela-Dholakia/puran-poli-recipe-with-toor-dal-and-chana-dal_400.jpg', 'Puran Puri', 'Gujarati', 24, 'Puran poli is an Indian sweet flatbread'),
(17, 2, 'https://i.pinimg.com/originals/e2/43/a1/e243a19f4f0c63d4ff77ca7b1e419e9b.jpg', 'Kit Kat Shake', 'Milk Shake', 209, 'Kit Kat Shake With Delicious Chocolate.'),
(18, 2, 'https://vaya.in/recipes/wp-content/uploads/2019/02/Cappuccino.jpg', 'Cappuccino', 'Coffee', 159, 'A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, and flavoring with cinnamon or chocolate powder.'),
(19, 4, 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Trevti_Daal_Gujarati_Style_Creamy_Lentils_Cooked_in_Mild_Spices.jpg', 'Gujarati Dal', 'Gujarati', 36, 'Gujarati Dal is very delicious tangy and great with Rice and Roti.'),
(20, 1, 'https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg', 'Farmhouse', 'Pizza', 215, 'Delightful combination of onion, capsicum, tomato & grilled mushroom.'),
(21, 1, 'https://www.dominos.co.in//files/items/golden_corn_veg.jpg', 'Golden Corn', 'Pizza', 109, 'Sweet & juicy golden corn for that lips making taste'),
(22, 1, 'https://www.dominos.co.in//files/items/CapsicumVeg.jpg', 'Capsicum', 'Pizza', 105, 'Fresh & crisp capsicum for the perfect crunch in pizza.'),
(23, 1, 'https://images.dominos.co.in/Choco_Lava.png', 'Choco Lava Cake', 'Desert', 99, 'Chocolate lovers delight! Indulgent, gooey molten lava inside chocolate cake'),
(24, 4, 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/Kale_Chane_Ki_Kadhi_.jpg', 'Rajwadi Kadhi', 'Gujarati Dish', 72, 'Kadhi or karhi is a dish originating from the Indian subcontinent. It consists of a thick gravy based on chickpea flour, and contains vegetable fritters called pakoras, to which dahi (yogurt) is added to give it a bit of sour taste. It is often eaten with boiled rice or roti.'),
(25, 4, 'https://thekitchentales.in/wp-content/uploads/2017/07/Masala-Butter-Milk-e1499328115872.jpg', 'Chaas', 'Gujarati Appetizer', 24, 'Chas is a fermented dairy drink. Traditionally, it was the liquid left behind after churning butter out of cultured cream; most modern buttermilk is cultured, however. It is common in warm climates where unrefrigerated fresh milk sours quickly.'),
(26, 4, 'https://punampaul.com/wp-content/uploads/2018/05/gujarati-dhokla-recipe.jpg', 'Dhokla', 'Gujarati Farshan', 40, 'Dhokla is a vegetarian food item that is found mainly in the Indian state of Gujarat and parts of adjacent states. It is made with a fermented batter derived from rice and split chickpeas. Dhokla can be eaten for breakfast, as a main course, as a side dish, or as a snack.'),
(27, 7, 'https://dfs29da0atmra.cloudfront.net/wp-content/uploads/2017/10/4-15.jpg', 'Cheesy Garlic Bread', 'Fast Food', 149, 'Baked to perfection. Your perfect pizza partner! Tastes best with dip.'),
(28, 7, 'https://lapinozpizza.in/src/assets/img/menu/pizza/margherita.jpg', 'Margerita Pizza', 'Pizza', 125, 'Pizza with Say cheese.');

-- --------------------------------------------------------

--
-- Table structure for table `order_list`
--

CREATE TABLE `order_list` (
  `o_id` int(11) NOT NULL,
  `r_id` int(11) NOT NULL,
  `f_id` varchar(11) NOT NULL,
  `email` varchar(20) NOT NULL,
  `qty` varchar(11) NOT NULL,
  `address` text NOT NULL,
  `payment_type` varchar(50) NOT NULL,
  `date_time` datetime NOT NULL,
  `total_amount` int(11) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_list`
--

INSERT INTO `order_list` (`o_id`, `r_id`, `f_id`, `email`, `qty`, `address`, `payment_type`, `date_time`, `total_amount`, `status`) VALUES
(1, 1, '22,21', 'doshianuj5@gmail.com', '1,2', 'Gokuldham Society', 'Cash', '2020-03-19 10:09:39', 323, 'Delivered'),
(2, 3, '9,8', 'doshianuj5@gmail.com', '1,1', 'Gokuldham Society', 'Cash', '2020-03-19 17:30:19', 277, 'Delivered'),
(3, 2, '1,2', 'rajkaria72@gmail.com', '10,10', 'rajkot', 'COD', '2020-03-20 09:54:22', 200, 'Delivered'),
(4, 2, '1,2', 'rajkaria72@gmail.com', '10,10', 'rajkot', 'COD', '2020-03-20 09:56:13', 200, 'Delivered'),
(5, 2, '1,2', 'rajkaria72@gmail.com', '10,10', 'rajkot', 'COD', '2020-03-20 10:00:05', 200, 'Delivered'),
(6, 2, '1,2', 'rajkaria72@gmail.com', '10,10', 'rajkot', 'COD', '2020-03-20 10:22:10', 200, 'Delivered'),
(7, 2, '1,2', 'rajkaria72@gmail.com', '10,10', 'rajkot', 'COD', '2020-03-20 10:38:08', 200, 'Delivered'),
(8, 2, '1,2', 'rajkaria72@gmail.com', '10,10', 'rajkot', 'COD', '2020-03-20 10:48:20', 200, 'Delivered'),
(9, 2, '1,2', 'rajkaria72@gmail.com', '10,10', 'rajkot', 'COD', '2020-03-20 10:50:12', 200, 'Delivered'),
(10, 2, '17', 'doshianuj5@gmail.com', '1', 'Iskon', 'Cash', '2020-03-20 15:37:21', 209, 'Delivered'),
(11, 5, '5,4', 'doshianuj5@gmail.com', '1,2', 'Iskon', 'Cash', '2020-03-20 15:37:49', 300, 'Delivered'),
(12, 2, '1,2', 'rajkaria72@gmail.com', '10,10', 'rajkot', 'COD', '2020-03-20 17:15:33', 200, 'Delivered'),
(13, 2, '1,2', 'rajkaria72@gmail.com', '10,10', 'rajkot', 'COD', '2020-03-20 17:15:42', 200, 'Delivered');

-- --------------------------------------------------------

--
-- Table structure for table `otptable`
--

CREATE TABLE `otptable` (
  `otp` int(10) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `rat_id` int(11) NOT NULL,
  `r_id` int(11) NOT NULL,
  `email` varchar(20) NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rating`
--

INSERT INTO `rating` (`rat_id`, `r_id`, `email`, `rating`) VALUES
(52, 1, 'rajkaria72@gmail.com', 4),
(54, 1, 'doshianuj5@gmail.com', 4),
(55, 2, 'doshianuj5@gmail.com', 4),
(56, 3, 'doshianuj5@gmail.com', 4),
(57, 3, 'rajkaria72@gmail.com', 3),
(58, 2, 'rajkaria72@gmail.com', 2),
(59, 1, 'rajkaria12@gmail.com', 5),
(60, 1, 'rajkaria12@gmail.com', 5),
(61, 1, 'rajkaria12@gmail.com', 3),
(62, 1, 'rajkaria12@gmail.com', 2),
(63, 1, 'rajkaria12@gmail.com', 1),
(64, 1, 'rajkaria12@gmail.com', 4),
(65, 1, 'rajkaria12@gmail.com', 3),
(66, 1, 'rajkaria12@gmail.com', 4),
(68, 5, 'doshianuj5@gmail.com', 4);

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `r_id` int(11) NOT NULL,
  `restaurant_name` varchar(50) NOT NULL,
  `cuisin_type` varchar(50) NOT NULL,
  `address` varchar(150) NOT NULL,
  `phone_no` text NOT NULL,
  `opening_hours` varchar(50) NOT NULL,
  `photos` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`r_id`, `restaurant_name`, `cuisin_type`, `address`, `phone_no`, `opening_hours`, `photos`) VALUES
(1, 'Dominos Pizza', 'Quick Bites - Pizza, Fast Food', '6, Ground Floor, Venus Atlantis Business Park, Near Prahalad Nagar Garden, Prahlad Nagar, Ahmedabad', '1860210000', '11am – 3am', 'dominos.jpg'),
(2, 'The Chocolate Room', 'Cafe and Deserts', 'Shop 6, Camps Corner 2, Opposite Prahlad Nagar Garden, Prahlad Nagar, Ahmedabad.', '7948908517', '10am – 11pm', 'chocolate.jpg'),
(3, 'Kabir Restaurant', 'North Indian , Chinese , Fast Food', 'JB Tower, Opposite Doordarshan Kendra, Drive In Road, Gurukul, Ahmedabad', '7948944040\r\n', '11am – 3:30pm, 6:30pm – 11pm', 'kabir.png'),
(4, 'The Grand Thakar', 'Gujarati  , North Indian , Chinese', 'Above Vijay Sales, Iskon Crossroads, Satellite, Ahmedabad', '9662802220', '11:30am – 3:30pm, 7:30pm – 11pm', 'thakkar.jpg'),
(5, 'Mr. & Mrs. Idly', 'South Indian', '14, Ground Floor, Sachet-2, Near National Handloom, C.G Road, Navrangpura, Ahmedabad', '9825904468', '11am – 11pm', 'idly.jpg'),
(6, 'Keventers - The Original Milkshake', 'Beverages, Desserts, Ice Cream', '5, Ground Floor, Rivera Arcade, Prahlad Nagar, Ahmedabad', '9769031051', '10Am – 12Am', 'keventers.jpg'),
(7, 'La Pino\'z Pizza', 'Pizza and Fast Food', 'G-5, Ground Floor, Capstone Building, Netaji Road, Opposite Chirag Motors, Ellis Bridge, Ahmedabad', '7971845648', '11am – 11pm', 'lapinoz.png');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `rv_id` int(11) NOT NULL,
  `r_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `comment` text NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`rv_id`, `r_id`, `email`, `comment`, `photo`) VALUES
(170, 1, 'rajkaria72@gmail.com', 'Nice', 'logo.png'),
(171, 1, 'rajkaria72@gmail.com', 'very good', 'logo.png');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `u_id` int(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `mob_no` text NOT NULL,
  `address` text NOT NULL,
  `city` varchar(20) NOT NULL,
  `auth_token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`u_id`, `username`, `email`, `password`, `mob_no`, `address`, `city`, `auth_token`) VALUES
(279, 'raj', 'rajkaria72@gmail.com', '$2b$10$Jj8XCizx.nLnCYgEl15d8OCrF7gbBBRBWIyfy.vXQB9BUZmCauqK.', '6789678989', 'rajkot', 'raajkot', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiUmFqIEthcmlhIiwiZW1haWwiOiJyYWprYXJpYTcyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDg1Z3NFcnBCbGJ4dEZ2SmI0YlQ3V2UzblJ4UURnbWQ0TmVBRkswRS5VUFEuMEVnZi9nSHBDIiwibW9iX25vIjoiOTU1ODA0NzM2NCIsImFkZHJlc3MiOiJyaXNoaSAtIE5ldyBLdW1iaGFyd2FkYSAiLCJjaXR5IjoiUG9yYmFuZGFyIn0sImlhdCI6MTU4MzM5MDU3MX0.SW2DSjyLUnpIaMZl2Aw1He-A2Rfamb9s_Z0VxLBWyqU'),
(280, 'Anuj', 'doshianuj5@gmail.com', '$2b$10$E6lRMbBoBPfBbp5Zk732mO5j2e7BxA.RXukF2ISAjsT5NCWXXXzu6', '8238943754', 'Gokuldham Society', 'Rajkot', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiQW51aiIsImVtYWlsIjoiZG9zaGlhbnVqNUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCR0ZnZlbmJyTGdkZ1BWL3VLNm84ZGkuTFFhL2Z3T0NuMkVObDJYeWVNWnVLYkF4MUxrRFdrYSIsIm1vYl9ubyI6IjgyMzg5NDM3NTQiLCJhZGRyZXNzIjoiR29rdWxkaGFtIiwiY2l0eSI6IlJhamtvdCJ9LCJpYXQiOjE1ODM0MTM1ODd9.ykosuF3c6qlLqa4KTRm8RHQDHiSeTLcgMFP2NhobrZ0'),
(283, 'Raj', 'rjkaria2@yahoo.com', '$2b$10$u0.fUb0Mc9EpZeXszCZHwuumBi3s7sIdXrlRwTuuCh.WyZnmLqIt6', '9845678811', 'rishi - New Kumbharwada ', 'Porbandar', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiUmFqIiwiZW1haWwiOiJyamthcmlhMkB5YWhvby5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCR1MC5mVWIwTWM5RXBaZVhzekNaSHd1dW1CaTNzN3NJZFhybFJ3VHV1Q2guV3labm1McUl0NiIsIm1vYl9ubyI6Ijk4NDU2Nzg4MTEiLCJhZGRyZXNzIjoicmlzaGkgLSBOZXcgS3VtYmhhcndhZGEgIiwiY2l0eSI6IlBvcmJhbmRhciJ9LCJpYXQiOjE1ODQ2OTEzMDN9.o9TwS0DzczEmUzHgNQIouqMXMtzZdFV6SzrdPsyIDZc'),
(284, 'Raj', 'test0911@gmail.com', '$2b$10$IajPnANZhS1K5cBh038x0.ATe6Yymn.thrtbUoQjlH1L44Nif2tpS', '9845678811', 'rishi - New Kumbharwada ', 'Porbandar', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiUmFqIiwiZW1haWwiOiJ0ZXN0MDkxMUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRJYWpQbkFOWmhTMUs1Y0JoMDM4eDAuQVRlNll5bW4udGhydGJVb1FqbEgxTDQ0TmlmMnRwUyIsIm1vYl9ubyI6Ijk4NDU2Nzg4MTEiLCJhZGRyZXNzIjoicmlzaGkgLSBOZXcgS3VtYmhhcndhZGEgIiwiY2l0eSI6IlBvcmJhbmRhciJ9LCJpYXQiOjE1ODQ3MDM5MDZ9.ygZ2UXOKhZbumFDVA5N0rASJFMyibKQJEX-hZ5VPTU4'),
(285, 'Raj', 'test0911@yahoo.in', '$2b$10$a7TQkEPNM7mmqo9ICosEFOy2mM.LCejzrlnn1S.KDM0vMyWS1A90.', '9845678811', 'rishi - New Kumbharwada ', 'Porbandar', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiUmFqIiwiZW1haWwiOiJ0ZXN0MDkxMUB5YWhvby5pbiIsInBhc3N3b3JkIjoiJDJiJDEwJGE3VFFrRVBOTTdtbXFvOUlDb3NFRk95Mm1NLkxDZWp6cmxubjFTLktETTB2TXlXUzFBOTAuIiwibW9iX25vIjoiOTg0NTY3ODgxMSIsImFkZHJlc3MiOiJyaXNoaSAtIE5ldyBLdW1iaGFyd2FkYSAiLCJjaXR5IjoiUG9yYmFuZGFyIn0sImlhdCI6MTU4NDcwMzk1NH0.3M8QDJu4x8a3ZhAMtupUmCOEm6Pl4BX2Qh29MVPuPEY'),
(286, 'Raj', 'ajay.vandra.sa@gmail.com', '$2b$10$joSElzWyZJfzbQowV1yczeDD.dIe4aeOv3nYyKoBgTYvG9fjkO6.G', '9845678811', 'rishi - New Kumbharwada ', 'Porbandar', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiUmFqIiwiZW1haWwiOiJhamF5LnZhbmRyYS5zYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRqb1NFbHpXeVpKZnpiUW93VjF5Y3plREQuZEllNGFlT3Yzbll5S29CZ1RZdkc5ZmprTzYuRyIsIm1vYl9ubyI6Ijk4NDU2Nzg4MTEiLCJhZGRyZXNzIjoicmlzaGkgLSBOZXcgS3VtYmhhcndhZGEgIiwiY2l0eSI6IlBvcmJhbmRhciJ9LCJpYXQiOjE1ODQ3MDQwMTV9.jW7s10NRdh8XhDi2w_uwSmc08bS2uxKOy9ue7D01N1s'),
(287, 'R aj', 'raj.karia.sa@gmail.com', '$2b$10$JRvAe9NxDVQkeq2JyLCQ6eEizwQx1YB.joNqodbb2GNqQI8aACkPO', '9845678811', 'rishi - New Kumbharwada ', 'Porbandar', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiUiBhaiIsImVtYWlsIjoicmFqLmthcmlhLnNhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEpSdkFlOU54RFZRa2VxMkp5TENRNmVFaXp3UXgxWUIuam9OcW9kYmIyR05xUUk4YUFDa1BPIiwibW9iX25vIjoiOTg0NTY3ODgxMSIsImFkZHJlc3MiOiJyaXNoaSAtIE5ldyBLdW1iaGFyd2FkYSAiLCJjaXR5IjoiUG9yYmFuZGFyIn0sImlhdCI6MTU4NDcwNDA1N30.JUl11NPFtWXjq2YL8eac345DKRUCUEM-XyX7od9kAms');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`f_id`);

--
-- Indexes for table `order_list`
--
ALTER TABLE `order_list`
  ADD PRIMARY KEY (`o_id`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`rat_id`);

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`r_id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`rv_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`u_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `mob_no` (`mob_no`(768)) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `c_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=199;

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `f_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `order_list`
--
ALTER TABLE `order_list`
  MODIFY `o_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `rat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `r_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `rv_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=172;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `u_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=288;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
