import styles from './styles/Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeMode } from '../redux/slices/countriesSlice'
import { RootState } from '../redux/store'

const Header = () => {
  const { mode } = useSelector((state: RootState) => state.countries)
  const dispatch = useDispatch()

  const fontColor = {
    color: mode === "dark" ? "white" : "black"
  }

  return (
    <header className={styles.header} style={{backgroundColor: mode === "dark" ? "#2b3743" : "white"}}>
      <div className={styles.headline}>
        <Link to="/" style={fontColor}>Where in the world!</Link>
      </div>

      <button type="button" className={styles.button} onClick={() => dispatch(changeMode())} style={fontColor}>
        <FontAwesomeIcon icon={mode === "dark" ? faMoonSolid : faMoon} />
        <span>Dark Mode</span>
      </button>
    </header>
  )
}

export default Header