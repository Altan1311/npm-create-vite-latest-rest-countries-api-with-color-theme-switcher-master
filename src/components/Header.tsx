import React from 'react'
import styles from './styles/Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headline}>
        <Link tp="/">Where in the world!</Link>
      </div>

      <button type="button" className={styles.button}>
        <FontAwesomeIcon icon={faMoon} />
        <span>Dark Mode</span>
      </button>
    </header>
  )
}

export default Header