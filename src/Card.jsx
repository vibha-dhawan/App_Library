import React from 'react';

function Card(props)
{
  console.log(props);
  return(<>
    <div className="cards">
  <div className="card">
    <img src={props.imgsrc} alt="myPic" className="card_img"/>
    <div className="card_info">
      <span className="card_category"></span>
      <h3 className="card_title">{props.title}</h3>
      <a href={props.link} target="_blank">
        <button>Click Now</button>
      </a>
    </div>
  </div>
  </div> 
  </>)  ;
}

export default Card;