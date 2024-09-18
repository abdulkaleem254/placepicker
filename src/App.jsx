import { useState } from "react";
import Header from "./components/Header";
import Places from "./components/Places";
import "../src/App.css"
import { AVAILABLE_PLACES } from "./components/data";

function App()
{
  const [selectedPlaces,setPlaces]=useState([])
  function selectedPlace(newPlace)
  {
    setPlaces(prev=>{
      if(!prev.includes(newPlace))
      {
        return [...prev,newPlace]
      }
      return prev;
    });
  }
  function remove(place)
  {
    setPlaces(prev=>{
      
        return prev.filter(item=>item!==place)
      
    })
  }
  console.log(selectedPlaces)
  return(
    <>
    <Header/>
    <Places title="I'd like to visit ..." fallBackText="I would like to visit below places." places={selectedPlaces} handleRemove={remove}/>
    <Places title="Available Places" places={AVAILABLE_PLACES} fallBackText="Select the places you would like to visit below." handlePlace={selectedPlace}/>
    </>
  ) 
}
export default App;