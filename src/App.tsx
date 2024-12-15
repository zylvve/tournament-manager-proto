import Tournament from "./features/tournament/Tournament"
import styles from './App.module.css'

const App = () => {
  return (
    <div data-theme="dark" className={styles.app}>
      <header>
        <h1>Tournament Manager</h1>
      </header>
      <Tournament/>
    </div>
  )
}

export default App
