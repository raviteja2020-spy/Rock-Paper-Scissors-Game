import './index.css'

const Buttons = props => {
  const {buttonDetails, onGetId} = props
  const {id, image} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, image)
  }

  return (
    <li className="button-container">
      <button
        className="button-image"
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <img className="image-item" src={image} alt={id} />
      </button>
    </li>
  )
}

export default Buttons
