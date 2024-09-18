import { AVAILABLE_PLACES } from "./data"
export default function Places({title, places, fallBackText, handlePlace, handleRemove})
{
    
    console.log(AVAILABLE_PLACES)
    return(
        <>
        <div className="selected-box">
            <h2>{title}</h2>
            <p>{fallBackText}</p>
            {places.length>0 && 
            <div className="places-list">
                <ul className="">
                {places.map(item=>{
                    return(
                        <li key={item.id}>
                            <button onClick={()=>{handlePlace && handlePlace(item)}}>
                                    <img src={item.image.src} alt={fallBackText} onClick={()=>{handleRemove && handleRemove(item)}}/>
                                    <p>{item.title}</p>
                            </button>
                        </li>
                    )
                })}
                </ul>
            </div>
            }
        </div>
        </>
    )
}