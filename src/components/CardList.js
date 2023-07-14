import React from 'react';
import Card from './Card';

const CardList = ({ mydata }) => {
  return (
    <div>
      {
        mydata.map((user, i) => {
          return (
            <Card
              key={i}
              id={mydata[i].id}
              name={mydata[i].first_name}
              last_name={mydata[i].last_name}
              avatar={mydata[i].avatar}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;