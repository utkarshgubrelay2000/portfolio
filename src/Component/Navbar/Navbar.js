import React from "react";
import {Link} from 'react-router-dom'
export default function Navbar() {

  
  return (
    <section>
         <header class="header_area animate__bounceInLeft">
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
								<li class="nav-item">
								
								<Link  className='nav-link cta-btn'>
									Say Hello
								</Link>
								
									</li>
									<li class="nav-item">
								
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

 
