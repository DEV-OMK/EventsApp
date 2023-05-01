import './index.css'

const registrationStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const renderInitial = () => (
    <p className="initial-message">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegister = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="caption">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="registration-button">
        Register Here
      </button>
    </>
  )

  const renderRegistered = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="register-image"
      />
      <h2 className="title">You have already registered for the event.</h2>
    </>
  )

  const renderRegistrationClosed = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed-image"
      />
      <h2 className="title">Registrations Are Closed Now!</h2>
      <p className="caption">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </>
  )

  switch (registrationStatus) {
    case registrationStatusConstants.initial:
      return renderInitial()
    case registrationStatusConstants.yetToRegister:
      return renderYetToRegister()
    case registrationStatusConstants.registered:
      return renderRegistered()
    case registrationStatusConstants.registrationClosed:
      return renderRegistrationClosed()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
