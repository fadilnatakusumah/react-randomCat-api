import React from 'react'
import Card from './Card'

const CardList = ({cats}) => {
    
    const cardComponent = cats.map((user, i) => {
        return <Card key={user.id} id={user.id} name={user.name} username={user.username} email={user.email}></Card>
    });

    return (
      <div>
          {cardComponent}
      </div>  
    );
}


export default CardList;