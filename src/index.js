import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sdata from './Arrays';


function ncard(val,index)
{
return (<Card 
key={val.id}
imgsrc={val.imgsrc}
  title={val.title}
   link={val.link}
  /> );

}

ReactDOM.render(
  <>
<h1 className="heading_style">ENJOY!!!</h1>
{Sdata.map(ncard)};
</>,
  document.getElementById("root")
);