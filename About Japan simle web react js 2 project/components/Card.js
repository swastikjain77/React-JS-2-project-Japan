import React from "react"

export default function Card(props){

    // console.log(props.title)
    
    return(
    <div className="card_div">
    
        <img className="card_img" src={props.imageUrl} />
        
        <div className="card">
        
            <div>
                <p className="location">
                <img className="card_img_l" src="./l.png" />
                {props.location} <a href="#"><span className="view_map">View on Google Maps</span></a></p>                
                <h2 className="inner_title">{props.title}</h2>
                <p className="date">{props.startdate} {props.endDate}</p>
                <p className="inner_para">{props.description}</p>
            </div>
            
         </div>
         
    </div>
    )
}


