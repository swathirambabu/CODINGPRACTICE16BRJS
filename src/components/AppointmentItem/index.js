// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsLike} = props
  const {id, name, date, isStarred} = appointmentDetails

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsLike(id)
  }

  return (
    <li className="appointments-items">
      <div className="header-container">
        <p className="title">{name}</p>
        <button
          type="button"
          data-testid="star"
          className="star-button"
          onClick={onClickStar}
        >
          <img src={starImgUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}
export default AppointmentItem
