import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const onClickItem = () => {
    onClickEvent(registrationStatus)
  }

  return (
    <li className="event-card">
      <button type="button" className="button" onClick={onClickItem}>
        <img src={imageUrl} className="event-image" alt="event" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
