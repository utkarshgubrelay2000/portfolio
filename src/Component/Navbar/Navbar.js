import React from "react";
import {Link} from 'react-router-dom'
export default function Navbar() {

  
  return (
    <section>
         <header className="header_area animate__bounceInLeft">
            <div className="main_menu">
            	<nav className="navbar navbar-expand-lg navbar-light">
					<div className="container box_1620">
					
						<Link className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""/></Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					
						<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul className="nav navbar-nav menu_nav ml-auto">
								<li className="nav-item">
								
								<Link  className='nav-link cta-btn'>
									Say Hello
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

 
