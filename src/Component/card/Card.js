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
                        <a href={props.carditems.url}>
                                  {props.carditems.head}
                            </a>
                      </h5>
                     
                        <p>{props.carditems.descrpition}
                        </p>
                        <hr />
                      </div>
                      <div className="spacer"></div>
                    </div>
              
        </>
    )
}