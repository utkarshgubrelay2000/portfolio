import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import Pdf from "./myResume.pdf";
export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      <header className="header_area animate__bounceInLeft">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item">
                    <a href="mailto:utkarshgubrelay2000@gmail.com" className="nav-link cta-btn">
                      <button
                        class="btn cta-btn"
                        data-toggle="modal"
                        data-target="#exampleModal"
                       // onClick={handleShow}
						
                      >
                        Say Hello
                      </button>
                      {/* <Modal show={show} handleClose={handleClose} /> */}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href={Pdf} className="nav-link cta-btn dark-border">
                      Resume
                    </a>
                  </li>{" "}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </section>
  );
}
