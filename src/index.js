import React from "react";
import {createRoot} from "react-dom/client"

function App(){
  
  const animals = [{name: "halal", species: "Dog"}, {name:"iwiwi", species: "Cat"}]
  
  return(
    <div>
      <h1>Hello There from</h1>
      <p>React</p>
      {animals.map(function(animal){
        return <AnimalCard name={animal.name} species = {animal.species} />
      })}
    </div>
  )
}


function AnimalCard(props){
  return <p>Hi, my name is {props.name}. I am a {props.species}</p>
}


const root = createRoot(document.querySelector('#app'))
root.render(<App />)