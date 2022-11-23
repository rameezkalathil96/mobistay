import React from "react";
import classes from "./Design.module.css";

const Companydetails = () => {
  return (
    <>
      <b />
      <b />
      <center>
        <h1>Company Details</h1>
      </center>

      <center>
        <div className={classes.background2}></div>
      </center>

      <br />
      <br />
      <div className={classes.cdetails}>
        <h5>Correspondence address</h5>
        Mobistay Limited
        <br />
        Electronic City
        <br />
        Phase 2 <br />
        Bangalore
        <br />
        karnataka, India
        <br />
        <br />
        <h5>Offices</h5>
        Bangalore,Mumbai
        <br />
        <h5>Registered office</h5>
        Mobistay Limited
        <br />
        Appolo Bunder
        <br />
        Mumbai
        <br />
      </div>
    </>
  );
};

export default Companydetails;
