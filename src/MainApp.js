import logo from "./logo.svg";
import "./App.css";
import classes from "./Body.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/Nav";
import Searcharea from "./components/Searcharea";
import Footer from "./components/Footer";

function MainApp() {
  const item = useSelector((state) => state.hotel.hotels);
  const [widthh, setWidth] = useState(0);
  const [location, setLocation] = useState(item);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    console.log(carousel.current.offsetWidth);
  });

  function Allcities(a) {
    let Allcities = item;
    setLocation(Allcities);
  }
  function Mumbai() {
    const Mumbai = "Mumbai";
    let mumbai = item.filter((item) => item.hotel_address1.includes(Mumbai));
    setLocation(mumbai);
  }
  function Udaipur() {
    const Udaipur = "Udaipur";
    let udaipur = item.filter((item) => item.hotel_address1.includes(Udaipur));
    setLocation(udaipur);
  }
  function Jaipur() {
    const Jaipur = "Jaipur";
    let jaipur = item.filter((item) => item.hotel_address1.includes(Jaipur));
    setLocation(jaipur);
  }
  function Banglore() {
    const Banglore = "Banglore";
    let banglore = item.filter((item) =>
      item.hotel_address1.includes(Banglore)
    );
    setLocation(banglore);
  }
  function Kerela() {
    const Kerela = "Kerela";
    let kerela = item.filter((item) => item.hotel_address1.includes(Kerela));
    setLocation(kerela);
  }

  return (
    <>
      <Nav />
      <Searcharea />

      <div className="row g-0">
        <div className="col-md-2">aaa</div>
        <div className="col-md-8">
          <div>
            <span className={classes.firstname}>Plan with your dream</span>
            <br /> <br />
            <div className={classes.citiespadding}>
              &emsp;&nbsp;
              <input
                type="radio"
                className="btn-check "
                name="options-outlined"
                id="success-outlined"
                onClick={Allcities}
                autocomplete="off"
       
              />
              <label
                className={`btn ${classes.cityinput}`}
                htmlFor="success-outlined"
              >
                All cities
              </label>
              &emsp;
              <input
                type="radio"
                className={`btn-check ${classes.cityinput}`}
                name="options-outlined"
                id="danger-outlined1"
                autocomplete="off"
                onClick={Mumbai}
              />
              <label
                className={`btn ${classes.cityinput}`}
                htmlFor="danger-outlined1"
              >
                Mumbai
              </label>
              &emsp;
              <input
                type="radio"
                className="btn-check"
                name="options-outlined"
                id="danger-outlined2"
                autocomplete="off"
                onClick={Udaipur}
              />
              <label
                className={`btn ${classes.cityinput}`}
                htmlFor="danger-outlined2"
              >
                Udaipur
              </label>
              &emsp;
              <input
                type="radio"
                className="btn-check"
                name="options-outlined"
                id="danger-outlined3"
                autocomplete="off"
                onClick={Jaipur}
              />
              <label
                className={`btn ${classes.cityinput}`}
                htmlFor="danger-outlined3"
              >
                Jaipur
              </label>
              &emsp;
              <input
                type="radio"
                className="btn-check"
                name="options-outlined"
                id="danger-outlined4"
                autocomplete="off"
                onClick={Banglore}
              />
              <label
                className={`btn ${classes.cityinput}`}
                htmlFor="danger-outlined4"
              >
                Banglore
              </label>
              &emsp;
              <input
                type="radio"
                className="btn-check"
                name="options-outlined"
                id="danger-outlined5"
                autocomplete="off"
                onClick={Kerela}
              />
              <label
                className={`btn ${classes.cityinput}`}
                htmlFor="danger-outlined5"
              >
                Kerela
              </label>
            </div>
            {/* &emsp;
            <button className={classes.citieslist}>Udaipur </button>
            &emsp;
            <button className={classes.citieslist}>Jaipur</button>
            &emsp;
            <button className={classes.citieslist}>Banglore</button>
            &emsp;
            <button className={classes.citieslist}>Kerela</button>
            &emsp; */}
          </div>
          {/* <br/> */}

          <motion.div ref={carousel} className="carousel">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -widthh }}
              className="inner-carousel"
            >
              {location.map((item, i) => {
                return (
                  <Card
                    name={item.hotel_name}
                    hotel_address1={item.hotel_address1}
                    hotel_address2={item.hotel_address2}
                    hotel_review={item.hotel_review}
                    hotel_rating={item.hotel_rating}
                    hotel_image={item.hotel_image}
                    hotel_starting_price={item.hotel_starting_price}
                    index={i}
                    key={i}
                  />
                );
              })}
            </motion.div>
          </motion.div>
        </div>
        <div className="col-md-2">ccc</div>
      </div>
      <br></br>
      <br></br>

      <Footer />
    </>
  );
}

export default MainApp;
