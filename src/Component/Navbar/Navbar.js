import React,{useState} from "react";
import {Link} from 'react-router-dom'
import Modal from '../Modal/Modal'
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
					
						<Link className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" style={{width:'60px'}} alt=""/></Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					
						<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul className="nav navbar-nav menu_nav ml-auto">
								<li className="nav-item">
								
								<Link  className='nav-link cta-btn'>
								<button   class="btn cta-btn" data-toggle="modal" data-target="#exampleModal" onClick={handleShow} >

									Say Hello
									</button>
									<Modal show={show} handleClose={handleClose}/>
								</Link>
								
									</li>
									<li className="nav-item">
								
								<Link  className='nav-link cta-btn dark-border'>
									Resume
								</Link>
								
									</li>	</ul>
						</div> 
					</div>
            	</nav>
            </div>
        </header>
    
   
    </section>
  );
}

 
