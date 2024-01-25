import React, { useEffect } from 'react'
import styles from './styles/Country.module.css'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCountries } from '../redux/slices/countriesSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Country = () => {
  const { id } = useParams()
  const { mode } = useSelector(state => state.countries)
  const countries = useSelector(selectCountries)
  const country = countries && countries.find(item => item.cca3.toLowerCase() === id)

  useEffect(() => {
    console.log(country)
  }, [country])

  const stat = (label, data) => {
    return (
      <div className={styles.stat}>
        <span className={styles.label}>{label}</span>
        <span className={styles.data}>{data}</span>
      </div>
    )
  }

  const modeStyle = {
    backgroundColor: mode === "dark" ? "#2b3743" : "rgb(252, 252, 252)",
    color: mode === "dark" ? "white" : "black",
  }

  return (
    <div className={styles.country}>
      {country ? 
        <>
          <Link to="/" className={styles.backLink} style={modeStyle}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back</span>
          </Link>
          <div className={styles.flag}>
            <img src={country.flags.svg} alt={country.name.common} />
          </div>
          
          <div className={styles.countryName}>
            {country.name.common}
          </div>

          <div className={styles.stats}>
            {stat("Native Name:", country.name.nativeName[Object.keys(country.name.nativeName)[0]].common)}
            {stat("Population:", country.population)}
            {stat("Region:", country.region)}
            {country.subregion && stat("Sub Region:", country.subregion)}
            <div className={styles.additionalData}>
              {stat("Top Level Domain:", country.tld.join(", "))}
              {stat("Currencies:", Object.keys(country.currencies).map(key => country.currencies[key].name).join(", "))}
              {stat("Languages:", Object.keys(country.languages).map(key => country.languages[key]).join(", "))}
            </div>
            
            {country.borders && <div className={styles.borderCountries}>
              <div className={styles.label}>Border Countries</div>
              <div className={styles.borderList}>
                {country.borders.map((borderCountry, idx) => (
                  <Link style={modeStyle} to={`/country/${borderCountry.toLowerCase()}`} className={styles.borderCountry} key={`boder-${idx}`}>
                    {countries.find(item => item.cca3 === borderCountry).name.common}
                  </Link>
                ))}
              </div>
            </div>}
          </div>
        </> 
      : "Loading..."}
    </div>
  )
}

export default Country