import { AVAILABLE_PLACES } from "./data"
export default function SelectedPlaces()
{
    return(
        <div className="selected-box">
            <h2>I'd like to visit ...</h2>
            <div className="image-box">

                <img src={AVAILABLE_PLACES[0].image.src} alt="" />
                <img src={AVAILABLE_PLACES[0].image.src} alt="" />
                <img src={AVAILABLE_PLACES[0].image.src} alt="" />
                <img src={AVAILABLE_PLACES[0].image.src} alt="" />
                <img src={AVAILABLE_PLACES[0].image.src} alt="" />
                <img src={AVAILABLE_PLACES[0].image.src} alt="" />
                <img src={AVAILABLE_PLACES[0].image.src} alt="" />
            </div>
        </div>
    )
}