import React from "react";

export default function About() {

  setTimeout(() => {
      window.location="https://meet.google.com/oqi-steb-ojz"
  }, 2000);
  return (
        
    <section class="_meet p_120">
      <div className="container box_1620">
          <div className="banner_inner d-flex align-items-center">
            <div className="banner_content">
              <div className="media row ">
                <div className="d-flex col-md-6 col-12">
                  <img
                    className="bannerimage"
                    style={{borderRadius:'10vh'}}
                     src="https://i.ibb.co/wQLv6V3/IMG-20211231-151134.jpg" alt="IMG-20211231-151134" border="0"
                
                  />
                </div>
                <div className="media-body col-md-6 col-12">
                  <div className="personal_text">
                    <h3 style={{color:'white'}}>Here for a meeting with Utkarsh?</h3>
                    <h6 style={{color:'white'}}>Click on button below if not redirected 
                       </h6>
                       <h6 style={{color:'white'}}>
                       automatically to join a google meet,Thanks.
                       </h6>
                    <div class="welcome_text">
 <button className="btncta">
<a href='https://meet.google.com/oqi-steb-ojz'>
    Join Now </a>
 </button>
    </div>
         
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</section>
  );
}

 
