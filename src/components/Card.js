import React from 'react';

const Card = ({ name, id,avatar,last_name }) => {
  return (
    
  <div class="card" >
  <img src={avatar} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name} {last_name}</h5>
  </div>
</div>

  );
}

export default Card;
