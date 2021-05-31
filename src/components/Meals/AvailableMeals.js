import { useEffect, useState } from 'react'
import styles from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [httpError, setHttpError] = useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true)
      const response = await fetch(
        'https://react-http-e108f-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      )

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const responseData = await response.json()

      const loadedMeals = []
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false)
    }

    fetchMeals().catch((err) => {
      setIsLoading(false)
      setHttpError(err.message)
    })
  }, [])

  if (isLoading) {
    return (
      <section className={styles.mealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={styles.mealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={styles.meals}>
      <Card>{<ul>{mealsList}</ul>}</Card>
    </section>
  )
}

export default AvailableMeals
