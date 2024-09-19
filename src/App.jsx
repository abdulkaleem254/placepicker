import { useRef, useState } from "react";
import Header from "./components/Header";
import Places from "./components/Places";
import "../src/App.css"
import { AVAILABLE_PLACES } from "./components/data";
import DeleteConfirmation from "./components/DeleteConfirmation";
import { Modal } from "./components/Modal";

function App()
{
  const [selectedPlaces,setPlaces]=useState([])
  const modal=useRef();
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
  var removedPlace;
  function remove(place)
  {
    modal.current.open();
    removedPlace=place;
    
  }
  function ConfirmDelete(place)
  {
    setPlaces(prev=>{
      
      return prev.filter(item=>item!==removedPlace)
    
  })
  modal.current.close();
  }
  function cancel()
  {
    modal.current.close()
  }
  console.log(selectedPlaces)
  return(
    <>
    <Header/>
    <Modal ref={modal}>
      <DeleteConfirmation onyes={ConfirmDelete} onNo={cancel}/>
    </Modal>
    <Places title="I'd like to visit ..." ref={modal} fallBackText="I would like to visit below places." places={selectedPlaces} handleRemove={remove}/>
    <Places title="Available Places" places={AVAILABLE_PLACES} fallBackText="Select the places you would like to visit below." handlePlace={selectedPlace}/>
    </>
  ) 
}
export default App;