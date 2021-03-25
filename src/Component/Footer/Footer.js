import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
export default function Footer(props) {
  return (
    <>
      <footer class="footer_area p_50">
        <div class="container">
          <div class="col-12">
            <aside class="f_widget social_widget">
              <div class="f_title" style={{ marginTop: "20px" }}>
                <h3>Follow Me</h3>
                <p>Let us be social</p>
                <ul class="list bg=primary">
                  <li>
                    <a href="https://github.com/utkarshgubrelay2000/">
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://in.linkedin.com/public-profile/in/utkarsh-gubrelay-860511194?challengeId=AQH1RYthZUJhzgAAAXhrYTxY9r8y9Qv-VqoPCbrA8b9ynM9lAyRGS6qTMyMiYmkcuNod-ZjlD4jcDbCE0s13nddiiDHyvw1dug&submissionId=f9d38364-7cb4-6f16-fbf7-5be9abbade2a">
                      <LinkedInIcon />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/utkarsh2000.9.19/">
                      <InstagramIcon />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div class="main-footer text-center">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <span>
                    Copyright © 2021 <a href="#">Utkarsh Gubrelay</a> .All
                    rights reserved.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
