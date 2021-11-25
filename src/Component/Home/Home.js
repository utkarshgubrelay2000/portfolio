import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFillTwoTone";
import DeveloperModeOutlinedIcon from "@material-ui/icons/DeveloperModeOutlined";
import WebAssetTwoToneIcon from "@material-ui/icons/WebAssetTwoTone";
import FormatQuoteTwoToneIcon from "@material-ui/icons/FormatQuoteTwoTone";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import Card from "../card/Card";
import Aos from "aos";
import PhoneIcon from '@material-ui/icons/Phone';
import "aos/dist/aos.css";
import { EmailOutlined } from "@material-ui/icons";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Home() {
  const [cardItem, setCartItems] = useState([
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/propbear-io.appspot.com/o/propbear-light.png?alt=media&token=5a2bc978-4841-4960-8784-d69433015387",
      descrpition:
        "Working on Backend. ",
      head: "Prop Bear",prod:false,
      url: "https://app.propbear.io/",
      cardStyle: { color: "black", background: "white" },
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dvu7miswu/image/upload/v1637832750/qw4bfyvz5pthmlmdfjvd.png",
      descrpition:
        "Provides Services for immigrates",
      head: "NBH Consultancy",prod:true,
      url: "  https://nbhimmigration.com/",
      cardStyle: { color: "black", background: "white" },
    },
  
    {
      imgUrl:
        "https://inspirerworld.com/images/hero_image@2x.png",
      descrpition:
        "Inspirer World is a social media for content writers ",
      head: "Inspirer World",prod:true,
      url: "https://inspirerworld.com/",
      cardStyle: { color: "black", background: "white" },
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dvu7miswu/image/upload/v1616269112/b7erasu3r0oothl72gwq.png",
      descrpition:
        "Ekluvya Coaching is a WebApp from providing Online Eduation...",
      head: "Ekluvya Coaching",prod:true,
      url: "https://classes.ekluvya.guru/",
      cardStyle: { color: "black", background: "white" },
    },
    {
      imgUrl:
        "https://www.whatcommute.com/official-logo.png",
      descrpition:
        "Remote Your Job - Handled Backend",
      head: "Ekluvya Coaching",prod:true,
      url: "https://classes.ekluvya.guru/",
      cardStyle: { color: "black", background: "white" },
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dvu7miswu/image/upload/v1637833174/q5dvhdqec3qahlp1n9vi.png",
      descrpition:
        "KT project have four panels . I have handled Super Admin",
      head: "Water Rocket",prod:false,
      url: "https://water-rocket.netlify.app/#",
      cardStyle: { color: "black", background: "white" },
    },
    {
      imgUrl:
        "https://imstocks-user.netlify.app/static/media/IM-HORIZONTAL-WEBSITE%201%20(1).3d08fc89.png",
      descrpition:
        "It is a learning platform for students",
      head: "ImStocks",prod:false,
      url: "https://imstocks-user.netlify.app/",
      cardStyle: { color: "black", background: "white" },
    },
    {
      imgUrl:
        "https://riyft.com/wp-content/uploads/2021/11/RIYFT-Blue-with-tag-296x78.png",
      descrpition: "Online Eduction Platform -Handled user and admin side backend",
      head: "RYIFT",prod:true,
      url: "https://riyft.com/",
      cardStyle: { color: "black", background: "white" },
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dvu7miswu/image/upload/v1637832219/irmwv0lpldtjblfyo8uh.png",
      descrpition: "Shopping platform - Handled user and admin side backend",
      head: "AMMARZO",prod:true,
      url: "https://www.ammarzo.com/",
      cardStyle: { color: "black", background: "white" },
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dvu7miswu/image/upload/v1616708344/nmao0syj6sekx1rfwcbo.png",
      descrpition: "FinLadder is a Website for providing Online Course ...",
      head: "finladder",prod:true,
      url: "https://finladder.co/",
      cardStyle: { color: "black", background: "white" },
    },

    {
      imgUrl:
        "https://res.cloudinary.com/dvu7miswu/image/upload/v1616530455/er7gj9umsybxn4inwhyx.png",
      descrpition:
        "Mehr Global Consultancy Pvt Ltd is a world class Consultancy and Training company having footprints across India, Saudi Arabia, UAE, Netherland, Australia and Canada serving since 2002.",
      head: "MEHR GLOBAL CONSULTANY",prod:true,
      url: "https://www.mehrconsultants.com/",
      cardStyle: { color: "black", background: "white" },
    },
  ]);
  useEffect(() => {
    Aos.init();
  }, []);
let options={
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive:{0 : {
    items:1,  
},
480 : {
  items:1,  
},
// breakpoint from 768 up
768 : {
  items:2,  
}
,
1020 : {
  items:3,   nav:true,
  loop:false
}
,

}}
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
                    <ul className="list basic_info">
                      <li>
                        <a href="telto:7489279080">
                          <PhoneIcon/> 7489279080
                        </a>
                      </li>
                      <li>
                        <a href="mailto:utkarshgubrelay2000@gmail.com">
                          <i className="lnr lnr-envelope"></i>{" "}
                       <EmailOutlined/>   utkarshgubrelay2000@gmail.com
                        </a>
                      </li>
                    </ul>
                    <ul className="list personal_social">
                      <li>
                        <Link >
                        <a href="https://github.com/utkarshgubrelay2000/">
                      <GitHubIcon />
                    </a>
                        </Link>
                      </li>
                      <li>
                        <Link >
                        <li><a href="https://in.linkedin.com/public-profile/in/utkarsh-gubrelay-860511194?challengeId=AQH1RYthZUJhzgAAAXhrYTxY9r8y9Qv-VqoPCbrA8b9ynM9lAyRGS6qTMyMiYmkcuNod-ZjlD4jcDbCE0s13nddiiDHyvw1dug&submissionId=f9d38364-7cb4-6f16-fbf7-5be9abbade2a"><LinkedInIcon/></a></li>
        						
                        </Link>
                      </li>
                      <li>
                        <Link >
                        <li><a href="https://www.instagram.com/utkarsh2000.9.19/"><InstagramIcon/> </a></li>
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
                <p className='text-left'>
                  I am Utkarsh Gubrelay.. I have completed my schooling from
                  Hoshangabad and currently pursing my Mtech(I.T) Degree From
                  International Institute of Professional Studies college ,Davv Indore .I am Hardworking ,creative and enthusiastic
           toward my work..
           i will be glad to work with you and showcase my skills . you Can {"  "}
           <a href="mailto:utkarshgubrelay2000@gmail.com">
               Contact Me
             </a>
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="wel_item">
                      <h4>Experience</h4>

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
                      <h4 style={{color:'black'}}>Friendly With</h4>
                      <p className="friendly" >
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
                        <div className="pB1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      Mongodb <span className="counter">80</span>%
                    </h4>
                    <div className="progress_br" data-aos="fade-right">
                      <div className="progress">
                        <div className="pB1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      React js/NEXTJS <span className="counter">75</span>%
                    </h4>
                    <div className="progress_br" data-aos="fade-right">
                      <div className="progress">
                        <div className="pB"></div>
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
                      Wordpress <span className="counter">55</span>%
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
                  <DeveloperModeOutlinedIcon /> Full Stack Work
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
              <h4  style={{color:"#0e9ff3"}}className='author'> ― Mohamed Saad</h4>
              <br />
            </div>
          </div>
        </section>
      </section>
     
      <section className="home_gallery_area p_120 animate">
        <div className="container">
          <div className="main_title">
            <h2> Projects</h2>
            <p>Some of my Projects</p>
          </div>
        </div>
        <div className="container" data-aos="fade-down">
          <div className="gallery_f_inner row imageGallery1">
            
          <OwlCarousel {...options}  className='owl-theme' loop margin={10} nav>
   
   {cardItem.map((item) => {
             console.log(item);
             return (
               <div className="item brand manipul design print">
                 <Card carditems={item} />{" "}
               </div>
             );
           })}
</OwlCarousel>;
<p>These Are some of Public Projects</p>
           
          </div>
        </div>
      </section>
    </section>
  );
}
