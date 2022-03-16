import { Link } from 'react-router-dom';
import "./HomePage.css";

export default function() {
    return(
        <main className="landing-header">
          <div className="home-container">
            <div className='landing-left'>
              <h1>Finding the pawfect furry animal is hard, but we can help you</h1>
              <h2>Fill out this form to see your pawfect match</h2>
              <Link to ="/getStarted"><button className="getStarted">Get Started</button></Link>
            </div>
            <div className="landing-right">
              <div className="landing-buttons">
              <Link to ="/cats"><button className="pet-button">Find a cat</button></Link>
              <Link to="/dogs"><button className="pet-button">Find a dog</button></Link>
              </div>
            </div>
          </div>
        </main>
    )
}




