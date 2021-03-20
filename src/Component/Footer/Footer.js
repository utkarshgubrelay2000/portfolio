import React from 'react'

export default function Footer(props){
    return(
        <>
           <footer class="footer_area p_90">
        	<div class="container">
        		<div  class="row footer_inner ">
        			<div class="col-lg-5 col-sm-6 mt-6">
        				<aside class="f_widget ab_widget mt-6">
        					<div class="f_title mt-6" style={{marginTop:'20px'}}>
        						<h3>About Me</h3>
        					</div>
        					<p>Do you want to be even more successful? Learn to love learning a
                                nd growth. The more effort you put into improving your skills,</p>
        				
        				</aside>
        			</div>
        			<div class="col-lg-5 col-sm-6">
        				<aside class="f_widget news_widget">
        					<div class="f_title" style={{marginTop:'20px'}}>
        						<h3>Newsletter</h3>
        					<p>Lets Connect</p>
        					<div id="mc_embed_signup">
                                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="subscribe_form relative">
                                	<div class="input-group d-flex flex-row">
                                        <input name="EMAIL" placeholder="Enter email address" 
                                        onfocus="this.placeholder = ''" onblur="this.placeholder =
                                         'Email Address '" required="" type="email"/>
                                        <button class="btn sub-btn"><span class="lnr lnr-arrow-right"></span></button>		
                                    </div>				
                                    <div class="mt-10 info"></div>
                                </form>
                            </div>
        					</div>
        				</aside>
        			</div>
        			<div class="col-lg-2">
        				<aside class="f_widget social_widget">
        					<div class="f_title" style={{marginTop:'20px'}}>
        						<h3>Follow Me</h3>
        					<p>Let us be social</p>
        					<ul class="list">
        						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
        						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
        						<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
        						<li><a href="#"><i class="fa fa-instagram"></i></a></li>
        					</ul>
        					</div>
        				</aside>
        			</div>
        		</div>
        	</div>
        </footer>    
        </>
    )
}