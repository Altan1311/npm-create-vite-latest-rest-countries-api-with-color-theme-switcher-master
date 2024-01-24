import React, { useEffect, useState } from 'react'
import styles from './styles/Content.module.css'
import { useSelector } from 'react-redux'
import { selectCountries } from '../redux/slices/countriesSlice'
import { Link } from 'react-router-dom'
import Toolbar from './Toolbar'

const Content = ({ search, setSearch }) => {
  const { loading } = useSelector((state) => state.countries)
  const countries = useSelector(selectCountries)
  
  const searchItems = search !== "" ? countries.filter((country) => country.name.common.toLowerCase().includes(search)) : countries

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
            <Link to={`/country/${idx.toLowerCase()}`}>{name}</Link>
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
    <>
      <Toolbar search={search} setSearch={setSearch} />
      <div className={styles.content}>
        
        {loading ? "Loading..." : searchItems.map((country, idx) =>
          countryBox(country.flags.svg, country.name.common, country.population, country.region, country.capital, country.cca3)
        )}

      </div>
    </>
  )
}

export default Content