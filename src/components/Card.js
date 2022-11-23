import React from 'react';
import classes from '../Body.module.css';
import { MdLocationPin } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";



const Card = (props) => {
  // const HotelIndex = useDispatch();
  const i = Math.round(props.hotel_rating);
  function viewdetails(){
    console.log("hi")
  }
  
  return (
    <div>
      <motion.div className="item">
        <div className={`card-wrapper ${classes.zoom}`} onClick={viewdetails}>
          <div class={`card ${classes.crdBrdr}`}>
            <img src={props.hotel_image} className={classes.hotelImage} />
            <div className={classes.hotelImagebadge}>
              <span className={classes.badge}>
                {" "}
                {[...Array(i)].map((star) => {
                  return (
                    <span className={`star ${classes.star}`}>&#9733;</span>
                  );
                })}
              </span>
            </div>

            <div class="card-body">
              <small className="text-muted">
                <MdLocationPin />
                &nbsp;{props.hotel_address1}
              </small>
              <p class="card-text">
                <h4>{props.name}</h4>
              </p>
              <br />
              <p className="card-text">
                <small className="text-muted">
                  <i>"{props.hotel_review}"</i>
                </small>
              </p>
              <div className="row g-0">
                <div className="col-md-6">
                  <span>₹{props.hotel_starting_price}/-</span>{" "}
                  <small className="text-muted">Per night</small>
                </div>
                <div className="col-md-6">
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class={`btn btn-succes me-md-2 ${classes.view}`} type="button">
                      View Details
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card