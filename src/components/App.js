import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });


  function handleChangeType (event) {
    setFilters({type: event.target.value})
  }
  
  function handleFindPetsClick () {
    if (filters.type === "all") {
      return (
        fetch("http://localhost:3001/pets")
        .then((response)=> response.json())
        .then((petList)=> setPets(petList))
      )
    } else {
      return (
        fetch(`http://localhost:3001/pets?type=${filters.type}`)
        .then((response)=> response.json())
        .then((petList)=> setPets(petList))
      )
    }
  }

  function handleAdoptPet(petId) {
    fetch(`http://localhost:3001/pets/${petId}`, {
      method: "PATCH", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        isAdopted: true 
      })
    })
  }
  
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
            onChangeType={handleChangeType} 
            onFindPetsClick={handleFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
