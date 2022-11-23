import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FaFacebookF } from "react-icons/fa";
import classes from "./Design.module.css";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  function about(){
    navigate("/Aboutus");
  }
  return (
    <div>
      <MDBFooter
        // bgColor="light"
        className={`text-center text-lg-start text-muted ${classes.footerbgup}`}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-10 d-none d-lg-block">
            <span>Get connected with MobiStay:</span>
          </div>
          <div>
            <a href="https://www.facebook.com/" className="me-4 text-reset">
              <FaFacebookF />
            </a>
            &ensp;
            <a href="https://twitter.com/" className="me-4 text-reset">
              <BsTwitter />
            </a>
            &ensp;
            <a href="https://www.instagram.com/" className="me-4 text-reset">
              <FaInstagramSquare />
            </a>
            &ensp;
            <a
              href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&ifkv=ARgdvAullHpJY7NrxScgO-M9Ip12Wpit_aSNywpuUQXFf4OifHkmiyHsY9PwOTfqUnUUR-ZEf5gtNw&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
              className="me-4 text-reset"
            >
              <SiGmail />
            </a>
            &ensp;
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  <h2>
                    <b>MobiStay</b>
                  </h2>
                </h6>
                <p></p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                <p>
                  <span
                    className="text-reset"
                    onClick={() => navigate("/Aboutus")}
                  >
                    About Us
                  </span>
                </p>
                <p>
                  <span
                    className="text-reset"
                    onClick={() => navigate("/Companydetails")}
                  >
                    Company Details
                  </span>
                </p>
                <p>
                  <span
                    className="text-reset"
                    onClick={() => navigate("/Privacypolicy")}
                  >
                    Privacy policy
                  </span>
                </p>
                <p>
                  <span
                    className="text-reset"
                    onClick={() => navigate("/Termsservice")}
                  >
                    Terms of service
                  </span>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Bengaluru, Karnataka,India
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-2" />
                  mobistay111@gmail.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-2" /> +
                  91 992 435 7867
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-2" /> +
                  91 982 456 7667
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
        >
          Developed by Mobistay
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
