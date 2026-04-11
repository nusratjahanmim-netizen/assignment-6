import { Suspense, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Section from './components/Section'
import Models from './components/Models'





const getModels = async () => {
  const res = await fetch ('/models.json')
  return res.json()
}



function App() {
  const [count, setCount] = useState(0)
 const modelPromise = getModels()
  return (
    <>
 <NavBar />  
 <Banner/> 
 <Section/>
 <Suspense fallback={<div>Loading...</div>}>
 <Models modelPromise = {modelPromise}/>
 </Suspense>


    </>
  )
}

export default App
