import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from", "import MainContent from", "import Footer from
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Welcome message component */}
      <WelcomeMessage />

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <h2>User Profiles</h2>

      {/* Use UserProfile with props */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Ray" age="22" bio="Passionate about coding and design" />
      <Header />", "<Footer />", "<MainContent />
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
