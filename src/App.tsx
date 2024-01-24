import { useEffect, useState } from 'react'

import styles from './App.module.css'
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import Content from './components/Content'
import Country from './components/Country'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from './redux/slices/countriesSlice'
import { Routes, Route } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")

  useEffect(() => {
    dispatch(getAllCountries())
  }, [])

  return (
    <div className={styles.wrapper}>
      
      <Header />
      
      <main className={styles.main}>

        <Routes>
          <Route path="/" element={<Content search={search} setSearch={setSearch} />} />
          <Route path="/country/:id" element={<Country />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
