import React from 'react'
import styles from './styles/Toolbar.module.css'

const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.input}
        />
      </div>

      <div className={styles.filter}>

      </div>
    </div>
  )
}

export default Toolbar