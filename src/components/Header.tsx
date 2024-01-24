import React from 'react'
import styles from './styles/Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headline}>
        Where in the world!
      </div>

      <button type="button" className={styles.button}>
        <FontAwesomeIcon icon={faMoon} />
        <span>Dark Mode</span>
      </button>
    </header>
  )
}

export default Header