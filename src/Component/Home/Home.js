import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import FormatColorFillIcon from '@material-ui/icons/FormatColorFillTwoTone';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';
import WebAssetTwoToneIcon from '@material-ui/icons/WebAssetTwoTone'
import FormatQuoteTwoToneIcon from '@material-ui/icons/FormatQuoteTwoTone';
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Home() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section >
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
                    <h3 className='animate__bounceInLeft'>Utkarsh Gubrelay</h3>
                    <div class="animate__animated animate__bounce animate__repeat-2">Example</div>
                    <h5>
                      <ReactTypingEffect
                        text={[
                          "MERN STACK Developer",
                          "WEB DESIGNER",
                          "WEB DEVELOPER",
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
                        <Link to="#">
                          <i className="lnr lnr-calendar-full"></i> 19 September,
                          2000
                        </Link>
                      </li>
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
                      <li>
                        <Link to="#">
                          <i className="lnr lnr-home"></i> Santa monica bullevard
                        </Link>
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
                <h4 className='primary-color'>About Myself</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach. inappropriate behavior
                  is often laughed.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="wel_item">
                      <h6>Working Experience</h6>

                      <p>
                        currently working in{" "}
                        <a href="thebrandwick.com">BrandWick</a>
                      </p>
                      <br />
                      <p>
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
                      <h5>Education</h5>

                      <h6>Higher education</h6>
                      <p>pursing for Mtech 5years</p>
                      <br/>
                      <h6>Schooling (2019)</h6>
                      <p>
                        12th -: 83%
                        <br />
                        10th -: 9.0 CGPA
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
                    <div className="progress_br">
                      <div className="progress">
                        <div className="pB"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      Nodejs <span className="counter">80</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="pB1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      Html, css, javaScript <span className="counter">80</span>%
                    </h4>
                    
                    <div className="progress_br">
                      <div className="progress">
                        <div className="pB2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      React Native <span className="counter">65</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="pB3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      git & github <span className="counter">75</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="pB4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      Wordpress <span className="counter">65</span>%
                    </h4>
                    <div className="progress_br">
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
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $.17 each.
            </p>
          </div>
          <div className="feature_inner row" data-aos='fade-left'>
            <div className="col-lg-4 col-md-6">
              <div className="feature_item">
              

                <h4><FormatColorFillIcon /> { " "}Designer</h4>
                <p className="text-left">
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions.
                </p>
                <br />
                <h4>Services</h4>
                <p className="text-left">UX , UI , Web , Apps , Logos</p>
                <br/>
              
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature_item">
              
                <h4><WebAssetTwoToneIcon /> { " "}Front-end Development</h4>
           
                <p className="text-left">
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
                <br />
                <h4>Enjoy working with</h4>
                <p className="text-left">HTML , EJS , REACTJS , NEXTJS</p>
                <br/>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature_item">
              
                <h4><DeveloperModeOutlinedIcon /> { " "}Front-end Development</h4>
               
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

        <section className='mt-5'>
          <div className="col-12">
            <div className="feature_item feature_quote">
              <FormatQuoteTwoToneIcon fontSize='large'/>
              <h5 className="text-center  feature_quoteh5" >
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
      <section class="home_gallery_area p_120 animate">
        	<div class="container"  >
        		<div class="main_title">
        			<h2>Recent Projects</h2>
        			<p>Who are in extremely love with eco friendly system.</p>
        		</div>
        		
        	</div>
        	<div class="container"  data-aos='fade-up'>
        		<div class="gallery_f_inner row imageGallery1">
        			<div class="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
        				<div class="h_gallery_item">
        					<div class="g_img_item">
        						<img class="img-fluid" src="img/gallery/project-1.jpg" alt=""/>
        						<a class="light" href="img/gallery/project-1.jpg"><img src="img/gallery/icon.png" alt=""/></a>
        					</div>
        					<div class="g_item_text">
        						<h4>3D Helmet Design</h4>
        						<p>Client Project</p>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-4 col-md-4 col-sm-6 brand manipul creative">
        				<div class="h_gallery_item">
        					<div class="g_img_item">
        						<img class="img-fluid" src="img/gallery/project-2.jpg" alt=""/>
        						<a class="light" href="img/gallery/project-2.jpg">
                      <img src="img/gallery/icon.png" alt=""/></a>
        					</div>
        					<div class="g_item_text">
        						<h4>2D Vinyl Design</h4>
        						<p>Client Project</p>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-4 col-md-4 col-sm-6 manipul creative design print">
        				<div class="h_gallery_item">
        					<div class="g_img_item">
        						<img class="img-fluid" src="img/gallery/project-3.jpg" alt=""/>
        						<a class="light" href="img/gallery/project-3.jpg">
                      <img src="img/gallery/icon.png" alt=""/></a>
        					</div>
        					<div class="g_item_text">
        						<h4>Creative Poster Design</h4>
        						<p>Client Project</p>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-4 col-md-4 col-sm-6 brand creative print">
        				<div class="h_gallery_item">
        					<div class="g_img_item">
        						<img class="img-fluid" src="img/gallery/project-4.jpg" alt=""/>
        						<a class="light" href="img/gallery/project-4.jpg"><img src="img/gallery/icon.png" alt=""/></a>
        					</div>
        					<div class="g_item_text">
        						<h4>Embosed Logo Design</h4>
        						<p>Client Project</p>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-4 col-md-4 col-sm-6 brand manipul design">
        				<div class="h_gallery_item">
        					<div class="g_img_item">
        						<img class="img-fluid" src="img/gallery/project-5.jpg" alt=""/>
        						<a class="light" href="img/gallery/project-5.jpg"><img src="img/gallery/icon.png" alt=""/></a>
        					</div>
        					<div class="g_item_text">
        						<h4>3D Disposable Bottle</h4>
        						<p>Client Project</p>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-4 col-md-4 col-sm-6 brand creative">
        				<div class="h_gallery_item">
        					<div class="g_img_item">
        						<img class="img-fluid" src="img/gallery/project-6.jpg" alt=""/>
        						<a class="light" href="img/gallery/project-6.jpg"><img src="img/gallery/icon.png" alt=""/></a>
        					</div>
        					<div class="g_item_text">
        						<h4>3D Logo Design</h4>
        						<p>Client Project</p>
        					</div>
        				</div>
        			</div>
        		</div>
        		<div class="more_btn">
        			<a class="main_btn" href="#">Load More Items</a>
        		</div>
        	</div>
        </section>
   
   
    </section>
  );
}
