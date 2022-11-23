import React from "react";

// import classes from "./Search.module.css";

// import format from "date-fns/format";

import "react-date-range/dist/styles.css";

import "react-date-range/dist/theme/default.css";

import format from "date-fns/format";

import { useState, useEffect, useRef } from "react";

import "react-date-range/dist/styles.css";

import "react-date-range/dist/theme/default.css";

import classes from "./Search.module.css";

import { addDays } from "date-fns";

import { DateRange } from "react-date-range";

import { useSelector } from "react-redux";

const Searcharea = () => {
  const date = useRef();

  const location = useRef();

  const address = useSelector((state) => state.hotel.hotels);

  // console.log(address[0].hotel_address1);

  const [range, setRange] = useState([
    {
      startDate: new Date(),

      endDate: addDays(new Date(), 1),

      key: "selection",
    },
  ]);

  const [close, setClose] = useState(false);

  const hide = useRef(null);

  useEffect(() => {
    document.addEventListener("click", hideonClick, true);
  }, []);

  const hideonClick = (e) => {
    if (hide.current && !hide.current.contains(e.target)) {
      setClose(false);
    }
  };

  const adddateHandler = () => {
    setClose(true);
  };

  const [Location, setLocation] = useState(address);

  // console.log("final", Location);

  const SearchHandler = () => {
    // let obj = date.current.value;

    // console.log(obj);

    let loc = { location: location.current.value };

    console.log("dghr", loc);

    const searchAddress = address.filter((item) =>
      item.hotel_address1.toLowerCase().includes(loc.location.toLowerCase())
    );

    setLocation(searchAddress);
  };

  return (
    <div>
      <div>
        <div className={classes.background}>
          <div className={classes.Searchcolumn}>
            <h1 className={classes.couts}>
              <b>Find your place to stay</b>
            </h1>

            <div className={classes.searcharea}>
              <div className={classes.text}>
                Where do you want to stay tomorrow?
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Enter destination or hotel name"
                  className={classes.input}
                  ref={location}
                  onChange={SearchHandler}
                />

                <span class="dropdown">
                  <input
                    readOnly
                    Value={`          ${format(
                      range[0].startDate,

                      "dd / MMM"
                    )}      -      ${format(
                      range[0].endDate,

                      "dd / MMM"
                    )}`}
                    className={classes.inputdate}
                    data-bs-toggle="dropdown"
                    ref={date}
                    onClick={adddateHandler}
                  />

                  <span class="dropdown-menu p-4" ref={hide}>
                    {close && (
                      <DateRange
                        onChange={(item) => setRange([item.selection])}
                        editableDateInput={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={2}
                        direction="vertical"
                        minDate={new Date()}
                      />
                    )}
                  </span>
                </span>

                <button className={classes.button} onClick={SearchHandler}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searcharea;
