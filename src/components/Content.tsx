import React, { Dispatch, useEffect, useState } from 'react'
import styles from './styles/Content.module.css'
import { useSelector } from 'react-redux'
import { selectCountries } from '../redux/slices/countriesSlice'
import { Link } from 'react-router-dom'
import Toolbar from './Toolbar'

const Content = ({ search, setSearch }: { search: string, setSearch: Dispatch<string>}) => {
  const { loading } = useSelector((state) => state.countries)
  const countries = useSelector(selectCountries)
  const { mode } = useSelector(state => state.countries)
  
  const searchItems = search !== "" ? countries.filter((country) => country.name.common.toLowerCase().includes(search)) : countries

  useEffect(() => {
    console.log(countries)
  }, [countries])

  const modeStyle = {
    backgroundColor: mode === "dark" ? "#2b3743" : "rgb(252, 252, 252)",
    color: mode === "dark" ? "white" : "black",
  }

  const countryBox = (flag: string, name: string, population: number, region: string, capital: string, idx: string) => {
    return (
      <Link to={`/country/${idx.toLowerCase()}`} className={styles.country} key={idx} style={modeStyle}>
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
      </Link>
    )
  }

  return (
    <>
      <Toolbar search={search} setSearch={setSearch} />
      <div className={styles.content}>
        
        {loading ? "Loading..." : searchItems.map((country) =>
          countryBox(country.flags.svg, country.name.common, country.population, country.region, country.capital, country.cca3)
        )}

      </div>
    </>
  )
}

export default Content