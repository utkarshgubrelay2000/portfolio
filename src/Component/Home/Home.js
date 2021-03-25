import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFillTwoTone";
import DeveloperModeOutlinedIcon from "@material-ui/icons/DeveloperModeOutlined";
import WebAssetTwoToneIcon from "@material-ui/icons/WebAssetTwoTone";
import FormatQuoteTwoToneIcon from "@material-ui/icons/FormatQuoteTwoTone";
import Card from "../card/Card";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {
  const [cardItem, setCartItems] = useState([
    {
      imgUrl:
        "https://res.cloudinary.com/dvu7miswu/image/upload/v1616269112/b7erasu3r0oothl72gwq.png",
      descrpition:
        "Ekluvya Coaching is a WebApp from providing Online Eduation...",
      head: "Ekluvya Coaching",
      url: "https://classes.ekluvya.guru/",
      cardStyle: { color: "black", background: "white" },
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dvu7miswu/image/upload/v1616530452/wdshsqzg9ffeenrqs3vs.png",
      descrpition:
        "Rentzy is a onGoing rental App.. handle Backend for User and Admin Side",
      head: "Rentzy",
      url: "https://play.google.com/store/apps/details?id=com.rentzytbw",
      cardStyle: { color: "black", background: "white" },
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dvu7miswu/image/upload/v1616708344/nmao0syj6sekx1rfwcbo.png",
      descrpition: "FinLadder is a Website for providing Online Course ...",
      head: "finladder",
      url: "https://finladder.co/",
      cardStyle: { color: "black", background: "white" },
    },

    {
      imgUrl:
        "https://res.cloudinary.com/dvu7miswu/image/upload/v1616530455/er7gj9umsybxn4inwhyx.png",
      descrpition:
        "Mehr Global Consultancy Pvt Ltd is a world class Consultancy and Training company having footprints across India, Saudi Arabia, UAE, Netherland, Australia and Canada serving since 2002.",
      head: "MEHR GLOBAL CONSULTANY",
      url: "https://www.mehrconsultants.com/",
      cardStyle: { color: "black", background: "white" },
    },
  ]);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section>
      <section className="home_banner_area home_banner">
        <div className="container box_1620">
          <div className="banner_inner d-flex align-items-center">
            <div className="banner_content">
              <div className="media row ">
                <div className="d-flex col-md-6 col-12">
                  <img
                    className="homePageImage"
                    src="https://res.cloudinary.com/dvu7miswu/image/upload/v1616061752/a2z5guhisnfrxvydcca3.jpg"
                    alt=""
                  />
                </div>
                <div className="media-body col-md-6 col-12">
                  <div className="personal_text" style={{ color: "black" }}>
                    <h6>Hello Everybody, i am</h6>
                    <h3>Utkarsh Gubrelay</h3>
                    <h5>
                      <ReactTypingEffect
                        text={[
                          "MERN STACK Developer",
                          "WEB DESIGNER",
                          "WEB DEVELOPER",
                          "APP DEVELOPER",
                        ]}
                        speed={300}
                        eraseDelay={2000}
                        eraseSpeed={300}
                      />
                    </h5>

                    <p>
                      You will begin to realise why this exercise is called the
                      Dickens Pattern (with reference to the ghost showing
                      Scrooge some different futures)
                    </p>
                    <ul className="list basic_info">
                      <li>
                        <a href="telto:7489279080">
                          <i className="lnr lnr-phone-handset"></i> 7489279080
                        </a>
                      </li>
                      <li>
                        <a href="mailto:utkarshgubrelay2000@gmail.com">
                          <i className="lnr lnr-envelope"></i>{" "}
                          utkarshgubrelay2000@gmail.com
                        </a>
                      </li>
                    </ul>
                    <ul className="list personal_social">
                      <li>
                        <Link to="#">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="welcome_area p_120">
        <div className="container">
          <div className="row welcome_inner">
            <div className="col-lg-6">
              <div className="welcome_text">
                <h4 className="primary-color">About Myself</h4>
                <p>
                  I am Utkarsh Gubrelay.. I have completed my schooling from
                  Hoshangabad and currently pursingmy Mtech(I.T) Degree From
                  International Institute of Professional Studies college ,Davv Indore .I am Hardworking ,creative and enthusiastic
           toward my work..
           i will be glad to work with you and showcase my skills . you Can
           <a href="mailto:utkarshgubrelay2000@gmail.com">
              Contact Me
             </a>
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="wel_item">
                      <h6>Working Experience</h6>

                      <p className="friendly" style={{ color: "black" }}>
                        currently working in{" "}
                        <a href="thebrandwick.com">BrandWick</a>
                      </p>
                      <br />
                      <p className="friendly" style={{ color: "black" }}>
                        intern at
                        <a href="https://www.onit.digital/">
                          {" "}
                          {"     "} <br />
                          Onit Digital Creative Studio
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="wel_item">
                      <h5>Friendly With</h5>
                      <p className="friendly" style={{ color: "black" }}>
                        git & github , netlify , heroku , firebase , payment
                        gateways , ghost.io , contentful
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tools_expert">
                <div className="skill_main">
                  <div className="skill_item">
                    <h4>
                      React js <span className="counter">75</span>%
                    </h4>
                    <div className="progress_br" data-aos="fade-right">
                      <div className="progress">
                        <div className="pB"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      Nodejs <span className="counter">80</span>%
                    </h4>
                    <div className="progress_br" data-aos="fade-right">
                      <div className="progress">
                        <div className="pB1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      Html, css, javaScript <span className="counter">80</span>%
                    </h4>

                    <div className="progress_br" data-aos="fade-right">
                      <div className="progress">
                        <div className="pB2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      React Native <span className="counter">65</span>%
                    </h4>
                    <div className="progress_br" data-aos="fade-right">
                      <div className="progress">
                        <div className="pB3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      Mongodb <span className="counter">75</span>%
                    </h4>
                    <div className="progress_br" data-aos="fade-right">
                      <div className="progress">
                        <div className="pB4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      Wordpress <span className="counter">65</span>%
                    </h4>
                    <div className="progress_br" data-aos="fade-right">
                      <div className="progress">
                        <div className="pB5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>offerings to my clients</h2>
            <p>
              I can assure you to give you desired content within the given time
              ..
              <br /> Things that are offer are
            </p>
          </div>
          <div className="feature_inner row" data-aos="fade-left">
            <div className="col-lg-4 col-md-6">
              <div className="feature_item">
                <h4>
                  <FormatColorFillIcon /> Designer
                </h4>
                <p className="text-left">
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions.
                </p>
                <br />
                <h4>Services</h4>
                <p className="text-left">UX , UI , Web , Apps , Logos</p>
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature_item">
                <h4>
                  <WebAssetTwoToneIcon /> Front-end Development
                </h4>

                <p className="text-left">
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
                <br />
                <h4>Enjoy working with</h4>
                <p className="text-left">HTML , EJS , REACTJS , NEXTJS</p>
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature_item">
                <h4>
                  <DeveloperModeOutlinedIcon /> Front-end Development
                </h4>

                <p className="text-left">
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
                <br />
                <h4>Enjoy working with</h4>
                <p className="text-left">
                  MERN Stack Developer ,firebase , github , netlify , React
                  Native
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-5">
          <div className="col-12">
            <div className="feature_item feature_quote">
              <FormatQuoteTwoToneIcon fontSize="large" />
              <h5 className="text-center  feature_quoteh5">
                “A successful website does three things: It attracts the right
                kinds of visitors. Guides them to the main services or product
                you offer. Collect Contact details for future ongoing relation.”
              </h5>
              <h4> ― Mohamed Saad</h4>
              <br />
            </div>
          </div>
        </section>
      </section>
      <section className="home_gallery_area p_120 animate">
        <div className="container">
          <div className="main_title">
            <h2> Projects</h2>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
        </div>
        <div className="container" data-aos="fade-down">
          <div className="gallery_f_inner row imageGallery1">
            {cardItem.map((item) => {
              console.log(item);
              return (
                <div className="col-lg-6 col-md-6 col-sm-6 brand manipul design print">
                  <Card carditems={item} />{" "}
                </div>
              );
            })}{" "}
          </div>
        </div>
      </section>
    </section>
  );
}
