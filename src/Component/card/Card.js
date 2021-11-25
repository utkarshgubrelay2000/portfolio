import React from 'react'

export default function Card(props){
    return(
        <>
             <div className="item-single mb-30">
                      <div className="image">
                        <img src={props.carditems.imgUrl}  className='image'alt="demo" />
                      </div>
                      <div className="content" style={props.carditems.cardStyle}>
                      <h5>
                        {props.carditems.prod?
                        <a href={props.carditems.url}>
                                  {props.carditems.head}
                            </a>
                          :
                          <h5>  {props.carditems.head} <br/>
                          <span className='text-info'>This Website is Under Construction</span></h5>}
                      </h5>
                      <div className='text-left'>

                     
                        <p>{props.carditems.descrpition}
                        </p>
                      </div>
                        <hr />
                      </div>
                      <div className="spacer"></div>
                    </div>
              
        </>
    )
}