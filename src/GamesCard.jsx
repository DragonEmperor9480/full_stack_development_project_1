import './index.css';
import React from 'react';

let  GamesCard =({obj})=> {
let {title, genre, platform, release_date, developer, publisher, rating, price, image_url, buy_link} = obj;
    return(
        <div className="card w-96 glass m-5">
  <figure><img src={image_url} alt="car!" className="w-60 h-75 object-cover p-4"/></figure>
  <div className="card-body">
    <h2 className="card-title"> {title}</h2>
    <p>{developer}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy now!</button>
    </div>
  </div>
</div>
    )
}
export default GamesCard;