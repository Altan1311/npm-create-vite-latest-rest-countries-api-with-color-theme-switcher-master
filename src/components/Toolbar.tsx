import React from 'react'
import styles from './styles/Toolbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries, getCountriesByRegion } from '../redux/slices/countriesSlice'

const Toolbar = ({ search, setSearch }) => {
  const dispatch = useDispatch()
  const { mode } = useSelector(state => state.countries)

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value

    if(region === "all"){
      dispatch(getAllCountries())
    }else{
      dispatch(getCountriesByRegion({ region }))
    }
  }

  const modeStyle = {
    backgroundColor: mode === "dark" ? "#2b3743" : "rgb(252, 252, 252)",
    color: mode === "dark" ? "white" : "black",
  }

  return (
    <div className={styles.toolbar}>
      <div className={styles.search} style={modeStyle}>
        <div className={styles.searchIcon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        
        <input
          type="text"
          className={styles.input}
          placeholder="Search for a country..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          style={modeStyle}
        />
      </div>

      <div className={styles.filter}>
        <select className={styles.select} onChange={handleFilter} style={modeStyle}>
          <option value="all">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default Toolbar