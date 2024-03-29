import { useEffect } from 'react'
import styles from './styles/Country.module.css'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCountries } from '../redux/slices/countriesSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { RootState } from '../redux/store'

const Country = () => {
  const { id } = useParams()
  const { mode } = useSelector((state: RootState) => state.countries)
  const countries: any = useSelector(selectCountries)
  const country: any = countries && countries.find((item: any) => item.cca3.toLowerCase() === id)

  useEffect(() => {
    console.log(country)
  }, [country])

  const stat = (label: string, data: string | number) => {
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
          <div className={styles.countryWrapper}>
            <div className={styles.flag}>
              <img src={country.flags.svg} alt={country.name.common} />
            </div>

            <div className={styles.countryInfo}>
              <div className={styles.countryName}>
                {country.name.common}
              </div>

              <div className={styles.stats}>
                <div className={styles.dataWrapper}>
                  <div className={styles.mainData}>
                    {stat("Native Name:", country.name.nativeName[Object.keys(country.name.nativeName)[0]].common)}
                    {stat("Population:", country.population)}
                    {stat("Region:", country.region)}
                    {country.subregion && stat("Sub Region:", country.subregion)}
                  </div>
                  
                  <div className={styles.additionalData}>
                    {stat("Top Level Domain:", country.tld.join(", "))}
                    {stat("Currencies:", Object.keys(country.currencies).map(key => country.currencies[key].name).join(", "))}
                    {stat("Languages:", Object.keys(country.languages).map(key => country.languages[key]).join(", "))}
                  </div>
                </div>
                
                
                {country.borders && <div className={styles.borderCountries}>
                  <div className={styles.label}>Border Countries</div>
                  <div className={styles.borderList}>
                    {country.borders.map((borderCountry: any, idx: number) => (
                      <Link style={modeStyle} to={`/country/${borderCountry.toLowerCase()}`} className={styles.borderCountry} key={`boder-${idx}`}>
                        {
                          countries.find((item: any) => item.cca3 === borderCountry)?.name.common
                        }
                      </Link>
                    ))}
                  </div>
                </div>}
              </div>
            </div>
          </div>
        </> 
      : "Loading..."}
    </div>
  )
}

export default Country