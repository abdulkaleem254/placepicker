import logo from '../assets/logo.png'
export default function Header()
{
    return(
        <div className='header'>
            <img src={logo} alt="logo" />
            <h1>PlacePicker</h1>
            <p className="desc">Create your personal collection of places you would like to visit or you have visited.</p>
        </div>
    )
}