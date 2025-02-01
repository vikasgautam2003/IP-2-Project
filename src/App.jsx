import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Components
import Heading from './Components/Heading.jsx'
import BackgroundVideo from './Components/BackgroundVideo.jsx'
import Video from './Components/Video.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BackgroundVideo />
    <Heading />
    <Video />

    </>
  )
}

export default App
