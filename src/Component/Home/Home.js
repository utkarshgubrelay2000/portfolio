import React from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
export default function Home() {
  return (
    <section>
      <section class="home_banner_area">
        <div class="container box_1620">
          <div class="banner_inner d-flex align-items-center">
            <div class="banner_content">
              <div class="media">
                <div class="d-flex">
                  <img src="img/personal.jpg" alt="" />
                </div>
                <div class="media-body">
                  <div class="personal_text">
                    <h6>Hello Everybody, i am</h6>
                    <h3>Donald McKinney</h3>
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
                    <ul class="list basic_info">
                      <li>
                        <Link to="#">
                          <i class="lnr lnr-calendar-full"></i> 19 September,
                          2000
                        </Link>
                      </li>
                      <li>
                        <a href="telto:7489279080">
                          <i class="lnr lnr-phone-handset"></i> 7489279080
                        </a>
                      </li>
                      <li>
                        <a href="mailto:utkarshgubrelay2000@gmail.com">
                          <i class="lnr lnr-envelope"></i>{" "}
                          utkarshgubrelay2000@gmail.com
                        </a>
                      </li>
                      <li>
                        <Link to="#">
                          <i class="lnr lnr-home"></i> Santa monica bullevard
                        </Link>
                      </li>
                    </ul>
                    <ul class="list personal_social">
                      <li>
                        <Link to="#">
                          <i class="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i class="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i class="fa fa-linkedin"></i>
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

      <section class="welcome_area p_120">
        <div class="container">
          <div class="row welcome_inner">
            <div class="col-lg-6">
              <div class="welcome_text">
                <h4>About Myself</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach. inappropriate behavior
                  is often laughed.
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <div class="wel_item">
                      <h6>Working Experience</h6>

                      <p>
                        currently working in{" "}
                        <a href="thebrandwick.com">BrandWick</a>
                      </p>
<br/>
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
                  <div class="col-md-6">
                    <div class="wel_item">
                      <h5>Education</h5>

                        <h6>
                          Higher education 
                          </h6>
                      <p>
                         pursing for Mtech 5years
                      </p>
                       <h6>
                          Schooling (2019) 
                         </h6>
                      <p>
                        12th -: 83%<br/>
                        10th -: 9.0 CGPA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="tools_expert">
                <div class="skill_main">
                  <div class="skill_item">
                    <h4>
                      React js <span class="counter">75</span>%
                    </h4>
                    <div class="progress_br">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                    
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="skill_item">
                    <h4>
                      Nodejs <span class="counter">80</span>%
                    </h4>
                    <div class="progress_br">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="skill_item">
                    <h4>
                      Html, css, javaScript <span class="counter">80</span>%
                    </h4>
                    <div class="progress_br">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="skill_item">
                    <h4>
                      React Native <span class="counter">65</span>%
                    </h4>
                    <div class="progress_br">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="skill_item">
                    <h4>
                      git & github <span class="counter">75</span>%
                    </h4>
                    <div class="progress_br">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="skill_item">
                    <h4>
                      Wordpress  <span class="counter">65</span>%
                    </h4>
                    <div class="progress_br">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
         
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
