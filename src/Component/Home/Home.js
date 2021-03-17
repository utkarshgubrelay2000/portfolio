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
                          <i class="lnr lnr-envelope"></i> utkarshgubrelay2000@gmail.com
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
    </section>
  );
}
