import { useEffect, useState } from 'react'

import styles from './App.module.css'
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import Content from './components/Content'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from './redux/slices/countriesSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCountries())
  }, [])

  return (
    <div className={styles.wrapper}>
      
      <Header />
      
      <main className={styles.main}>
        <Toolbar />

        <Content />
      </main>
    </div>
  )
}

export default App
