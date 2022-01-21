import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
 
 const Starrating = (newRating) => {
  console.log(newRating);
};
 
render(
  <ReactStars
    count={5}
    onChange={Starrating}
    size={24}
    activeColor="#ffff00"
  />,
 
//   document.getElementById("where-to-render")
);

export default Starrating