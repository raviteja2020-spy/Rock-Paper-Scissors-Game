import './index.css'

const GameResultView = props => {
  const {myChoice, apponentChoice, resultMessage, playAgain} = props
  const {id, image} = apponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <div className="show-result-container">
      <div className="result-image-container">
        <div>
          <p className="result-text">YOU</p>
          <img
            className="result-image-item"
            src={myChoice[1]}
            alt="your choice"
          />
        </div>
        <div className="result-image-container">
          <div>
            <p className="result-text">OPPONENT</p>
            <img
              className="result-image-item"
              src={image}
              alt="opponent choice"
            />
          </div>
        </div>
      </div>
      <p className="result-text">{resultMessage}</p>
      <div className="result-button-container">
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgainButton}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default GameResultView
