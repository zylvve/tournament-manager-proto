import Tournament from "./features/tournament/components/tournament/Tournament"
import styles from './App.module.css'

const App = () => {
  return (
    <div data-theme="dark" className={styles.app}>
      <Tournament/>
    </div>
  )
}

export default App
