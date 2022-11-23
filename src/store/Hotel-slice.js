

import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

 

const HotelSlice = createSlice({

  name: "hotellist",

  initialState: {

    hotels: [

      {

        hotel_name: "Umaid Bhawan Palace",

        hotel_address1: "Jodpur",

        hotel_address2: "Circuit House Rd,Cantt Area,Rajastan ",

        hotel_review: "Exellent Experience.",

        hotel_rating: "4.8",

        hotel_image:

          "https://media.cntraveler.com/photos/594001185fff7e434a15efbe/master/w_1920%2Cc_limit/Exterior-UmaidBhawanPalaceTaj-India-CRHotel.jpg",

        hotel_starting_price: "20000",

        hotel_imgs: [

          "https://image3.mouthshut.com/images/imagesp/925752665s.jpg",

          "https://www.tajhotels.com/content/dam/luxury/hotels/Umaid_Bhavan/images/gallery/CelebrationTable-BaradariDiningExperience-3x2.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",

          "https://c4.wallpaperflare.com/wallpaper/844/704/962/umaid-bhawan-palace-wallpaper-preview.jpg",

        ],

        hotel_services: [

          "Pool",

          "Free WiFi",

          "Parking included",

          "Air",

          "conditioning",

          "Spa",

          "Restaurant",

        ],

        hotel_room: [

          {

            Room_No: "001",

 

            Room_Type: "AC",

 

            Bed_type: "Single",

 

            Room_Id: uuidv4(),

 

            Price: 20000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

 

          {

            Room_No: "002",

 

            Room_Type: "NON-AC",

 

            Bed_type: "Double",

 

            Room_Id: uuidv4(),

 

            Price: 3000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

        ],

      },

      {

        hotel_name: "The Leela Palace ",

        hotel_address1: "New Delhi",

        hotel_address2: "Netaji Nagar Rd,Netaji Nagar,Delhi 110023",

        hotel_review:

          "The best hotel I’ve ever been privileged enough to stay at.",

        hotel_rating: "4.8",

        hotel_image:

          "https://media.cntraveler.com/photos/61a905183bd71f2d5e014d1f/master/w_1920%2Cc_limit/The%2520Leela_Lobby_sitting.JPG",

        hotel_starting_price: "30000",

        hotel_imgs: [

          "https://media.cntraveller.com/photos/611be6ff4e09f53b437320a0/16:9/w_2992,h_1683,c_limit/the-leela-palace-new-delhi-roof_top_swimming_pool-nov18-pr.jpg",

          "https://www.remotelands.com/storage/media/1553/conversions/b180410015-banner-size.jpg",

          "https://i.ytimg.com/vi/BG8bmGKzNSk/maxresdefault.jpg",

        ],

        hotel_services: [

          "Pool",

          "Free WiFi",

          "Parking included",

          "Air",

          "conditioning",

          "Spa",

          "Restaurant",

        ],

        hotel_room: [

          {

            Room_No: "001",

 

            Room_Type: "AC",

 

            Bed_type: "Single",

 

            Room_Id: uuidv4(),

 

            Price: 2000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

 

          {

            Room_No: "002",

 

            Room_Type: "NON-AC",

 

            Bed_type: "Double",

 

            Room_Id: uuidv4(),

 

            Price: 3000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

        ],

      },

      {

        hotel_name: "The Oberoi Udaivilas",

        hotel_address1: "Udaipur",

        hotel_address2:

          "Udaipur, Badi-Gorela-Mulla Talai Rd, Haridas Ji Ki Magri, Pichola, Udaipur",

        hotel_review:

          "Overall, I had a great experience with the Oberoi Udaivilas; staff was incredibly helpful, and the amenities were great.",

        hotel_rating: "4.8",

        hotel_image:

          "https://media.cntraveler.com/photos/5c06e5a701ffc86b13da2528/master/w_1920%2Cc_limit/The-Oberoi-Udaivilas%2C-Udaipur__2018_Premier-Lake-View-Rooms-with-Semi-Private-Pools---The-Oberoi-Udaivilas%2C-Udaipur-01.jpg",

        hotel_starting_price: "40000",

        hotel_imgs: [

          "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-udaivilas-udaipur/dining/overview/restaurant-1.jpg?w=836&hash=ac9fe9d3c2f85ad6d4063a98b78d4dd8",

          "https://cf.bstatic.com/xdata/images/hotel/max1280x900/48812893.jpg?k=a034ea2f5c5431b95bedb68ac0aaa9507f6d2ba261a3182554b1dc81b4ab0f52&o=&hp=1",

          "https://i.ytimg.com/vi/UoIjjPqqnO0/sddefault.jpg",

        ],

        hotel_services: [

          "Pool",

          "Free WiFi",

          "Parking included",

          "Air",

          "conditioning",

          "Spa",

          "Restaurant",

        ],

        hotel_room: [

          {

            Room_No: "001",

 

            Room_Type: "AC",

 

            Bed_type: "Single",

 

            Room_Id: uuidv4(),

 

            Price: 2000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

 

          {

            Room_No: "002",

 

            Room_Type: "NON-AC",

 

            Bed_type: "Double",

 

            Room_Id: uuidv4(),

 

            Price: 3000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

        ],

      },

      {

        hotel_name: "The Taj Mahal Palace",

        hotel_address1: "Mumbai",

        hotel_address2: "Mumbai, Apollo Bandar, Colaba, Mumbai, Maharashtra",

        hotel_review:

          "Everything was great at this hotel.. amazing staff that is friendly and makes customers feel welcome.",

        hotel_rating: "4.8",

        hotel_image:

          "https://media.cntraveler.com/photos/5dee7549d606100008e741f0/master/w_1920%2Cc_limit/The-Taj-Mahal-Palace_2019_Taj-Mahal-Palace%2C-Mumbai---Corridor-1.jpg",

        hotel_starting_price: "35000",

        hotel_imgs: [

          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/103705059.jpg?k=9e078265b31ad1815a573da8ed2a665f863e3925e1efd730df703421868a2ada&o=&hp=1",

          "https://media-cdn.tripadvisor.com/media/photo-s/19/3f/1d/7a/exterior.jpg",

          "https://ik.imgkit.net/3vlqs5axxjf/external/http://www.cfmedia.vfmleonardo.com/imageRepo/7/0/104/36/7/TMP_Exterior_-_1200x628_O.jpg?tr=w-1200%2Cfo-auto",

        ],

        hotel_services: [

          "Pool",

          "Free WiFi",

          "Parking included",

          "Air",

          "conditioning",

          "Spa",

          "Restaurant",

        ],

        hotel_room: [

          {

            Room_No: "001",

 

            Room_Type: "AC",

 

            Bed_type: "Single",

 

            Room_Id: uuidv4(),

 

            Price: 2000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

 

          {

            Room_No: "002",

 

            Room_Type: "NON-AC",

 

            Bed_type: "Double",

 

            Room_Id: uuidv4(),

 

            Price: 3000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

        ],

      },

      {

        hotel_name: "ITC Maurya",

        hotel_address1: "New Delhi",

        hotel_address2: "Akhaura Block, Bapu dham, Chanakyapuri, New Delhi",

        hotel_review:

          "It was so amazing! The staff was so friendly. I’ll be back in a month! ",

        hotel_rating: "4.3",

        hotel_image:

          "https://media.cntraveler.com/photos/5cb5de7111a45eb388303707/master/w_1920%2Cc_limit/ITC-Maurya%2C-a-Luxury-Collection-Hotel%2C-New-Delhi_2019_Swimming-Pool.jpg",

        hotel_starting_price: "25000",

        hotel_imgs: [

          "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcmaurya-new-delhi/images/overview-landing-page/headmast/desktop/exterior-night.png",

          "https://i0.wp.com/tompoints.co/wp-content/uploads/2016/01/IMG_3100.jpg?fit=1280%2C960&ssl=1",

          "https://cdn.myportfolio.com/e46b31e82b7baf2f932fbf4b885a6e2c/83a059ae-39b6-442d-812d-5ac70a5e7b2f_rw_600.jpg?h=8e53371381457650d5ce2e5e57cf0b82",

        ],

        hotel_services: [

          "Pool",

          "Free WiFi",

          "Parking included",

          "Air",

          "conditioning",

          "Spa",

          "Restaurant",

        ],

        hotel_room: [

          {

            Room_No: "001",

 

            Room_Type: "AC",

 

            Bed_type: "Single",

 

            Room_Id: uuidv4(),

 

            Price: 2000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

 

          {

            Room_No: "002",

 

            Room_Type: "NON-AC",

 

            Bed_type: "Double",

 

            Room_Id: uuidv4(),

 

            Price: 3000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

        ],

      },

      {

        hotel_name: "Rambagh Palace",

        hotel_address1: "Jaipur",

        hotel_address2:

          "Jaipur, VRX5+66Q, Bhawani Singh Rd, Rambagh, Jaipur, Rajasthan",

        hotel_review:

          "The hotel was wonderful. It was even better than expected.",

        hotel_rating: "3.5",

        hotel_image:

          "https://media.cntraveler.com/photos/5f678a4eb981fb78a3045f9c/master/w_960%2Cc_limit/rambagh-palace-jaipur.jpg",

        hotel_starting_price: "30000",

        hotel_imgs: [

          "https://media-cdn.tripadvisor.com/media/photo-s/1b/86/70/6b/exterior.jpg",

          "https://www.remotelands.com/storage/media/3298/conversions/b130617012-banner-size.jpg",

          "https://media.architecturaldigest.in/wp-content/uploads/2018/11/Jaipur-Rambagh-Palace-Peacocks-shot-by-Ashish-Shah-featured.jpg",

        ],

        hotel_services: [

          "Pool",

          "Free WiFi",

          "Parking included",

          "Air",

          "conditioning",

          "Spa",

          "Restaurant",

        ],

        hotel_room: [

          {

            Room_No: "001",

 

            Room_Type: "AC",

 

            Bed_type: "Single",

 

            Room_Id: uuidv4(),

 

            Price: 2000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

 

          {

            Room_No: "002",

 

            Room_Type: "NON-AC",

 

            Bed_type: "Double",

 

            Room_Id: uuidv4(),

 

            Price: 3000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

        ],

      },

      {

        hotel_name: "Taj Lake Palace",

        hotel_address1: " Udaipur",

        hotel_address2: " Pichola, Udaipur, Rajasthan ",

        hotel_review:

          "This is a beautiful hotel! It’s clean and has a lot of comfort items to make you feel at home.",

        hotel_rating: "3.8",

        hotel_image:

          "https://media.cntraveler.com/photos/53d9c4b1dcd5888e1459b47c/master/w_960%2Cc_limit/taj-lake-palace-udaipur-rajasthan-udaipur-india-108677-1.jpg",

        hotel_starting_price: "25000",

        hotel_imgs: [

          "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Lake_Palace_Udaipur/images/images2021/Hero-Picture.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",

          "https://media-cdn.tripadvisor.com/media/photo-s/1b/3a/4a/06/exterior.jpg",

          "https://www.historyhit.com/app/uploads/2021/09/taj-lake-palace-udaipur.jpg",

        ],

        hotel_services: [

          "Pool",

          "Free WiFi",

          "Parking included",

          "Air",

          "conditioning",

          "Spa",

          "Restaurant",

        ],

        hotel_room: [

          {

            Room_No: "001",

 

            Room_Type: "AC",

 

            Bed_type: "Single",

 

            Room_Id: uuidv4(),

 

            Price: 2000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

 

          {

            Room_No: "002",

 

            Room_Type: "NON-AC",

 

            Bed_type: "Double",

 

            Room_Id: uuidv4(),

            Price: 2000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

        ],

      },

      {

        hotel_name: "The Lodhi",

        hotel_address1: "New Delhi",

        hotel_address2: "New Delhi, India",

        hotel_review:

          "The hotel room was clean, nice and spacious. Breakfast offered with a wide variety of food.",

        hotel_rating: "4.7",

        hotel_image:

          "https://media.cntraveler.com/photos/59de699de8ae802744462390/master/w_960%2Cc_limit/Exterior1-TheLodhi-India-CRHotel.jpg",

        hotel_starting_price: "20000",

        hotel_imgs: [

          "https://m.economictimes.com/thumb/msid-61799668,width-640,height-480,resizemode-7/can-dlf-turn-around-the-fortunes-of-the-lodhi-hotel.jpg",

          "http://pix10.agoda.net/hotelImages/502515/-1/fe7a0d49fd29ef420c2cb823c3ecd3ad.jpg?ca=8&ce=1&s=768x1024",

          "https://www.theluxevoyager.com/wp-content/uploads/2019/04/The-Lodhi-Hotel-New-Delhi-Pool-Cafe.jpg",

        ],

        hotel_services: [

          "Pool",

          "Free WiFi",

          "Parking included",

          "Air",

          "conditioning",

          "Spa",

          "Restaurant",

        ],

        hotel_room: [

          {

            Room_No: "001",

 

            Room_Type: "AC",

 

            Bed_type: "Single",

 

            Room_Id: uuidv4(),

 

            Price: 2000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

 

          {

            Room_No: "002",

 

            Room_Type: "NON-AC",

 

            Bed_type: "Double",

 

            Room_Id: uuidv4(),

 

            Price: 3000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

        ],

      },

      {

        hotel_name: "Taj Fateh Palace",

        hotel_address1: "Udaipur",

        hotel_address2:

          "Lake Pichola, The City Palace Complex, City Palace Rd, Udaipur, Rajasthan",

        hotel_review:

          "Second stay at Taj Fateh Palace, and same great experience. Lovely, friendly, helpful staff. Spacious room.",

        hotel_rating: "4.1",

        hotel_image:

          "https://media.cntraveler.com/photos/61c983e7361139bfc50b29d5/master/w_960%2Cc_limit/Taj-Fateh-Prakash-Palace.jpg",

        hotel_starting_price: "28000",

        hotel_imgs: [

          "https://d19lgisewk9l6l.cloudfront.net/assetbank/The_Sunset_Terrace_Fateh_Prakash_Palace_Udaipur_Rajasthan_India_60874.jpg",

          "https://d19lgisewk9l6l.cloudfront.net/assetbank/Fateh_Prakash_Palace_Udaipur_Rajasthan_India_60881.jpg",

          "https://pbs.twimg.com/media/FeR7p41aMAAoTxq?format=jpg&name=large",

          "https://www.tajhotels.com/content/dam/luxury/hotels/taj-fateh-prakash-palace/Gallery/DJI_0008.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg",

        ],

        hotel_services: [

          "Pool",

          "Free WiFi",

          "Parking included",

          "Air",

          "conditioning",

          "Spa",

          "Restaurant",

        ],

        hotel_room: [

          {

            Room_No: "001",

 

            Room_Type: "AC",

 

            Bed_type: "Single",

 

            Room_Id: uuidv4(),

 

            Price: 2000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

 

          {

            Room_No: "002",

 

            Room_Type: "NON-AC",

 

            Bed_type: "Double",

 

            Room_Id: uuidv4(),

 

            Price: 3000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

        ],

      },

      {

        hotel_name: "JW Marriott Juhu",

        hotel_address1: "Mumbai",

        hotel_address2: "Juhu Tara Rd Mumbai Maharashtra",

        hotel_review:

          "Nice hotel with friendly staff. Breakfast good but could be better. Happy Hour a nice touch.",

        hotel_rating: "4.4",

        hotel_image:

          "https://media.cntraveler.com/photos/53dacd95dcd5888e145ce2f2/master/w_960%2Cc_limit/jw-marriott-mumbai-mumbai-india-108608-3.jpg",

        hotel_starting_price: "",

        hotel_imgs: [

          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ee/2d/9d/jw-marriott-hotel-mumbai.jpg?w=700&h=-1&s=1",

          "https://r1imghtlak.mmtcdn.com/1e0467f2237611e888530a4cef95d023.jpg",

          "https://cache.marriott.com/marriottassets/marriott/BOMJW/bomjw-pool-7760-hor-feat.jpg",

        ],

        hotel_services: [

          "Pool",

          "Free WiFi",

          "Parking included",

          "Air",

          "conditioning",

          "Spa",

          "Restaurant",

        ],

        hotel_room: [

          {

            Room_No: "001",

 

            Room_Type: "AC",

 

            Bed_type: "Single",

 

            Room_Id: uuidv4(),

 

            Price: 2000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

 

          {

            Room_No: "002",

 

            Room_Type: "NON-AC",

 

            Bed_type: "Double",

 

            Room_Id: uuidv4(),

 

            Price: 3000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

        ],

      },

      {

        hotel_name: "SUJÁN The Serai",

        hotel_address1: "Jaisalmer",

        hotel_address2: "Jaisalmer, Rajasthan",

        hotel_review:

          "Overall, I had a great experience and a wonderful stay at SUJÁN The Serai.",

        hotel_rating: "4.5",

        hotel_image:

          "https://media.cntraveler.com/photos/606de02150f16c474fede587/master/w_960%2Cc_limit/Hotel_Placeholder_Image.jpg",

        hotel_starting_price: "30000",

        hotel_imgs: [

          "https://media.cntraveller.in/wp-content/uploads/2018/01/ANJ9224-A.jpg",

          "https://thesujanlife.com/documents/35366/93366/the-serai-05+desktop.jpg/e59800e6-be96-dc7e-06fd-1d1e9d15ae81?t=1572844429799",

          "https://thesujanlife.com/documents/20124/258911/burgermenu-sts.jpg/ee222ee9-6d4e-6bf1-0d51-35bbca941d1f?t=1643875767121",

        ],

        hotel_services: [

          "Pool",

          "Free WiFi",

          "Parking included",

          "Air",

          "conditioning",

          "Spa",

          "Restaurant",

        ],

        hotel_room: [

          {

            Room_No: "001",

 

            Room_Type: "AC",

 

            Bed_type: "Single",

 

            Room_Id: uuidv4(),

 

            Price: 2000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

 

          {

            Room_No: "002",

 

            Room_Type: "NON-AC",

 

            Bed_type: "Double",

 

            Room_Id: uuidv4(),

 

            Price: 3000,

 

            Image:

              "https://gos3.ibcdn.com/0fe6bcd0343511e98ee30242ac110003.jpg",

          },

        ],

      },

    ],

  },

  reducers: {},

});

 

export const hotelactions = HotelSlice.actions;

 

export default HotelSlice;

 

 