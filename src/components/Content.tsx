import { Dispatch, useEffect } from 'react'
import styles from './styles/Content.module.css'
import { useSelector } from 'react-redux'
import { selectCountries } from '../redux/slices/countriesSlice'
import { Link } from 'react-router-dom'
import Toolbar from './Toolbar'
import { RootState } from '../redux/store'

const Content = ({ search, setSearch }: { search: string, setSearch: Dispatch<string>}) => {
  const { loading, mode } = useSelector((state: RootState) => state.countries)
  const countries = useSelector(selectCountries)
  
  const searchItems = search !== "" ? countries.filter((country: any) => country.name.common.toLowerCase().includes(search)) : countries

  useEffect(() => {
    console.log(countries)
  }, [countries])

  const modeStyle = {
    backgroundColor: mode === "dark" ? "#2b3743" : "rgb(252, 252, 252)",
    color: mode === "dark" ? "white" : "black",
  }

  const countryBox = (flag: string, alt: string, name: string, population: number, region: string, capital: string, idx: string) => {
    return (
      <Link to={`/country/${idx.toLowerCase()}`} className={styles.country} key={idx} style={modeStyle}>
        <div className={styles.flag}>
          <img src={flag} alt={alt} />
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
      <Toolbar setSearch={setSearch} />
      <div className={styles.content}>
        
        {loading ? "Loading..." : searchItems.map((country: any) =>
          countryBox(country.flags.png, country.flags.alt, country.name.common, country.population, country.region, country.capital, country.cca3)
        )}

      </div>
    </>
  )
}

export default Content