import { Link } from 'react-router-dom';

export default function() {
    return(
        <main>
            <div className='landing-header'>
              <h1>Finding the perfect furry animal is hard, but we can help you</h1>
              <h2>Fill out this form to see your perfect match</h2>
              <button className="getStarted"><Link to ="/getStarted">Get Started</Link></button>
            </div>
            <div className="landing-buttons">
              <button className="pet-button"><Link to="/dogs">Find a dog</Link></button>
              <button className="pet-button"><Link to ="/cats">Find a cat</Link></button>
            </div>
        </main>
    )
}




