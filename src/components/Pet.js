import React, { useState } from "react";

function Pet({ pet, onAdoptPet }) {
  const [isAdopted, setIsAdopted] = useState(pet.isAdopted)

  function handleClick() {
    onAdoptPet(pet.id)
    setIsAdopted(!isAdopted)
  }
  
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          { pet.gender === "male" ? "♂" : "♀" }
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}lbs</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted === false ? <button onClick={handleClick} className="ui primary button">Adopt pet</button> : <button className="ui disabled button">Already adopted</button>}
      </div>
    </div>
  );
}

export default Pet;
