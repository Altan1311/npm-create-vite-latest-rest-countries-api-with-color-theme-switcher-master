import React from 'react'
import styles from './styles/Toolbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { getCountriesByRegion } from '../redux/slices/countriesSlice'

const Toolbar = () => {
  const dispatch = useDispatch()

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value

    dispatch(getCountriesByRegion({ region }))
  }

  return (
    <div className={styles.toolbar}>
      <div className={styles.search}>
        <div className={styles.searchIcon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        
        <input
          type="text"
          className={styles.input}
          placeholder="Search for a country..."
        />
      </div>

      <div className={styles.filter}>
        <select className={styles.select} onChange={handleFilter}>
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