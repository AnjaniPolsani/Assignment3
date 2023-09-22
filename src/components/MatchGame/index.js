import './index.css'

const MatchGame = props => {
  const {score, time} = props

  return (
    <nav >
      <img
          
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      <ul>
      <li>
        <p >Score: <span>{score}</span></p>
      </li>
      <li>
        
          <img
            
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p >{time} sec</p>
        
      </li>
      </ul>
    
    </nav>
  )
}
export default MatchGame
