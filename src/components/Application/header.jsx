import React, { useEffect, useState } from "react";
import classes from "./css/header.module.css";
import Nav from "./navBar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserLogin from "../../userLog";
import { memo } from "react";

function Header(props) {
  const [show, handleShow] = useState(true);

  const transitionNavBar = () => {
    if (window.scrollY > 250) {
      handleShow(false);
    } else {
      handleShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <>
      {/* <div className={classes.frame1}> */}

      <div className={classes.frame2}>
        <div className={classes.image2}></div>
        <div className={classes.image3}></div>
        <div className={classes.image1}></div>

        <div className={classes.oTOBOTS}>OTOBOTS</div>
        <div className={classes.oTOBOTS2}>OTOBOTS</div>
        <div className={classes.aPPAREL}>APPAREL</div>
        <div className={classes.oTOBOTS3}>OTOBOTS</div>
        <div className={classes.oTOBOTS4}>OTOBOTS</div>
        {/* <div className={classes.rectangle2}></div> */}

        <Link to="/userLog">
          <div className={classes.rectangle2}>SHOP NOW</div>
        </Link>
      </div>

      {/* <Route path="../../userLog" component={userLogin} /> */}

      {/* </div> */}
    </>
  );
}

export default Header;
