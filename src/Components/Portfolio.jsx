/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/spikeybg.png";

const imageAltText = "Abstract background with spiked shapes";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Recipe Finder",
    description:
      "A meal preparation tool allowing users to find recipes by ingredient to build shopping lists and build meal plans.",
    role: "Project Manager and Webmaster",
    url: "https://silver-gumdrop-718f29.netlify.app/",
  },
  {
    title: "E-Tarot",
    description:
      "A tarot card application built to replicate how cards are used in the real world for entertainment purposes only.",
    role: "Personal Project - Full Stack Development",
    url: "https://cozcreations.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2
        style={{
          textAlign: "center",
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "#aaa solid 1px",
          padding: "5px",
          maxWidth: "fit-content",
          margin: "auto",
        }}
      >
        Portfolio
      </h2>
      <div style={{ width: "100%" }}>
        <img className="background" src={image} alt={imageAltText} />
        <div
          className="container"
          style={{ zIndex: "2", display: "relative", top: "10px", width: "fit-content" }}
        >
          {projectList.map((project) => (
            <div className="box" key={project.title} style={{ backgroundColor: "#fff" }}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.role}</p>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
