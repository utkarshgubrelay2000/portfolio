import React from "react";
import {Link} from 'react-router-dom'
export default function Navbar() {

  
  return (
    <section>
         <header class="header_area">
            <div class="main_menu">
            	<nav class="navbar navbar-expand-lg navbar-light">
					<div class="container box_1620">
					
						<Link class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""/></Link>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					
						<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul class="nav navbar-nav menu_nav ml-auto">
								<li class="nav-item active"><Link class="nav-link" href="index.html">Home</Link></li> 
								<li class="nav-item"><Link class="nav-link" href="about-us.html">About</Link></li> 
								<li class="nav-item"><Link class="nav-link" href="services.html">Services</Link></li> 
								<li class="nav-item submenu dropdown">
									<Link to="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</Link>
									<ul class="dropdown-menu">
										<li class="nav-item"><Link class="nav-link" to="/portfolio">Portfolio</Link></li>
										<li class="nav-item"><Link class="nav-link" to="/elements">Elements</Link></li>
									</ul>
								</li> 
								<li class="nav-item submenu dropdown">
									<Link to="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
									<ul class="dropdown-menu">
										<li class="nav-item"><Link class="nav-link" href="blog.html">Blog</Link></li>
										<li class="nav-item"><Link class="nav-link" href="single-blog.html">Blog Details</Link></li>
									</ul>
								</li> 
								<li class="nav-item"><Link class="nav-link" href="contact.html">Contact</Link></li>
							</ul>
						</div> 
					</div>
            	</nav>
            </div>
        </header>
    
   
    </section>
  );
}

 
