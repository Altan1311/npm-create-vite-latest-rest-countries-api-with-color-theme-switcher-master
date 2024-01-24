import React, { useEffect } from 'react'
import styles from './styles/Content.module.css'
import { useSelector } from 'react-redux'
import { selectCountries } from '../redux/slices/countriesSlice'


const Content = () => {
  const { loading } = useSelector((state) => state.countries)
  const countries = useSelector(selectCountries)

  useEffect(() => {
    console.log(countries)
  }, [countries])

  const countryBox = (flag, name, population, region, capital, idx) => {
    return (
      <div className={styles.country} key={idx}>
        <div className={styles.flag}>
          <img src={flag} />
        </div>
        <div className={styles.description}>
          <div className={styles.countryName}>
            {name}
          </div>

          <ul className={styles.data}>
            <li><span className={styles.dataTopic}>Population: </span>{population}</li>
            <li><span className={styles.dataTopic}>Region: </span>{region}</li>
            <li><span className={styles.dataTopic}>Capital: </span>{capital}</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.content}>
      {loading ? "Loading..." : countries.map((country, idx) =>
        countryBox(country.flags.svg, country.name.common, country.population, country.region, country.capital, country.cca2)
      )}

    </div>
  )
}

export default Content