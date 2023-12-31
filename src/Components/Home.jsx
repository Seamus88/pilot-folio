/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/circuits-landing-background.png";
import headshot from "../images/profilepic.png";

const imageAltText = "Abstract rendering of circuits with transparent background";

const Home = ({ firstName, lastName, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="landingpPic" src={image} alt="" style={{height: "100%", width: "auto", overflow: "hidden"}}/>
      <div style={{ position: "absolute", top: "10rem", left: "2rem", width: "fit-content", display: "flex", flexFlow: "row wrap" }}>

        <div style={{margin: "auto 0"}}>
          <h1>{firstName}</h1>
          <h1>{lastName}</h1>
          <h2>{title}</h2>
        </div>
        <img className="headshot" src={headshot} style={{width: "max-content", height:"auto"}} alt="Headshot of James Cosgrove"/>  
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <a href="#about">
          <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
        </a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
