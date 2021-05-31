import { useRef, useState } from 'react'
import styles from './Checkout.module.css'

const isEmpty = (value) => value.trim() === ''
const isFiveChars = (value) => value.trim().length === 5

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  })

  const nameInput = useRef()
  const streetInput = useRef()
  const postalCodeInput = useRef()
  const cityInput = useRef()

  const confirmHandler = (event) => {
    event.preventDefault()

    const enteredName = nameInput.current.value
    const enteredStreet = streetInput.current.value
    const enteredPostalCode = postalCodeInput.current.value
    const enteredCity = cityInput.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode)
    const enteredCityIsValid = !isEmpty(enteredCity)

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid

    if (!formIsValid) {
      return
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    })
  }

  const nameControlClasses = `${styles.control} ${
    formInputsValidity.name ? '' : styles.invalid
  }`

  const streetControlClasses = `${styles.control} ${
    formInputsValidity.street ? '' : styles.invalid
  }`

  const postalCodeControlClasses = `${styles.control} ${
    formInputsValidity.postalCode ? '' : styles.invalid
  }`

  const cityControlClasses = `${styles.control} ${
    formInputsValidity.city ? '' : styles.invalid
  }`

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
        {!formInputsValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!formInputsValidity.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id="postalCode" ref={postalCodeInput} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long).</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!formInputsValidity.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout
