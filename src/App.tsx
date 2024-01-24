import { useState } from 'react'

import styles from './App.module.css'
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

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
