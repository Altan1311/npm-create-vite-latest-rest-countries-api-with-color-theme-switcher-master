import React from 'react'
import styles from './styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headline}>
        Where in the world!
      </div>

      <button>
        Dark Mode
      </button>
    </header>
  )
}

export default Header