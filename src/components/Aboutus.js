import React from "react";
import classes from "./Design.module.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Nav from "./Nav";

const Aboutus = () => {
  return (
    <>
      <Nav />
      <div className={classes.abouttop}>
        <>
          <center>
            <div>
              <div className={classes.backdv}>
                <div className={classes.background}></div>
              </div>
              <h3 className={classes.abt}>
                <u>About us</u>
              </h3>
            </div>

            <div className={classes.des}>
              Mobistay is a leading provider of hotel accommodation worldwide,
              offering booking services through its own network of localised
              websites. Mobistay gives travellers one of the widest selections
              of accommodation on the net, including both independent and major
              chain hotels as well as self-catering in over hundreds of
              thousands properties worldwide. The company offers a one-stop
              shopping source for hotel pricing, amenities and availability.
            </div>
            <div className={classes.des}>
              We build beautiful consumer experiences and intelligent data sets
              that give hotels the ability to reduce cost, hyper personalize
              their guest experience and create multiple revenue opportunities.
            </div>
            <div>
              <br />
              <br />
              <div>
                <h3 className={classes.abt}>
                  <u>Why Mobistay-</u>
                </h3>
              </div>
              <div className={classes.des}>
                Do you struggle to get the best hotel offers online for your
                next booking? Mobistay makes your stays cheaper than ever with
                hotel booking offers. Thousands of hotels are available for you
                to pick the best option for you. Sign up on Mobistay now to
                avail new user offers, exclusive deals and get access to the
                latest hotel booking coupons.
              </div>
              <br />
              <div className={classes.des}>
                <span className={classes.icon}>
                  <IoIosCheckmarkCircle />
                </span>
                High satisfaction &ensp;
                <span className={classes.icon}>
                  <IoIosCheckmarkCircle />
                </span>
                Unparalleded service &ensp;
                <span className={classes.icon}>
                  <IoIosCheckmarkCircle />
                </span>
                Best Offers
              </div>
            </div>
          </center>
        </>
      </div>
    </>
  );
};

export default Aboutus;
